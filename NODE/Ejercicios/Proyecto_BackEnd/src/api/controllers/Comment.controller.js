
//!---------------------- POST- CREATE --------------------


const Character = require("../models/Character.model");
const Comment = require("../models/Comment.model");
const Game = require("../models/Games.model");
const User = require("../models/User.model");

const createComment = async (req, res, next) => {
    try {
    //traemos por params haciendo destructuring el id de quien va dirigido el comentario 
    const { idRecipient } = req.params;

    //! el comentario va dirigido a un registro ya sea User, Character, Movie
    // Buscamos a quien va dirigifdo el comentario
    const findUser = await User.findById(idRecipient); // -> si lo encuentro, el destinatario es este user
    const findCharacter = await Character.findById(idRecipient); // -> si lo encuenta, el destinatario es una character
    const findGame = await Game.findById(idRecipient); // -> si lo encuentra, el destinatario es un game.


    // todo ---- vamos a ver cual a encopntrado

    if (findUser) {
        // El comentario va a ser un user
        // Creamos nueva instancia de comentarios y la guardamos
        // hay que actualizar el user que recibe el comentario
        // hay que actualizar el que realiza el comentario -- owner

        // Creamos el nuevo comentario
        const newComment = new Comment({
            ...req.body,
            recipientUser: idRecipient,
            owner: req.user._id,
        });

        // guardamos la instancia del comentario
        const savedComment = await newComment.save();

        if (savedComment) {
            // si se ha guardado procedemos a las actualizaciones
            try {
                // actualizamos al owner -- dueño del comentario
                await User.findByIdAndUpdate(req.user._id, {
                  $push: { postedComments: newComment._id },
                });

                // actualizamos el user a quien va dirigido este comentario

                await User.findByIdAndUpdate(idRecipient, {
                    $push: { commentsByOther: newComment._id },
                  });
        
                return res.status(200).json({
                    userOwner: await User.findById(req.user._id).populate(
                        "commentsByOther postedComments"
                    ),
                    comment: newComment
                });
            } catch (error) {
                //error al actualizar
                return res.status(409).json({
                    error: "Error al actualizar los usuarios",
                    message: error.message,
                });
            }
        } else {
            // error al guardar
            return res.status(409).json({
                error: "Error al guardar el comentario",
                message: "No se ha guardado el mensaje",
            });
        }
    } else if (findCharacter) {
        // el comentario va a ser un character
        // creamos nueva instancia de comentario y la guardamos
        //  hay que actualizar el character que recibe el comentario
        // hay que actualizar el que realiza el comentario -- owner
        
        // creamos nueva instancia
        const newComment = new Comment({
            ...req.body,
            recipientCharacter: idRecipient,
            owner: req.user._id,
        });

        // guardamos la instancia
        const savedComment = await newComment.save();

        if(savedComment) {
            // actualizamos user y character porque se ha guardado correctamente
            
            try {
            // actualizamos owner
            await User.findByIdAndUpdate(req.user._id, {
                $push: { postedComments: newComment._id},
                });
                
            // actualizamos el characterr que a recibidop el comentario
            await Character.findByIdAndUpdate(idRecipient, {
                $push: { comments: newComment._id },
            });
            
            return res.status(200).json({
                userOwner: await User.findById(req.user._id).populate(
                    "commentsByOther postedComments"
                ),
                comment: newComment,
            });
            } catch (error) {
                // Error al actualizar registros
                return res.status(409).json({
                    error: "Error al actualizar User y Character",
                    message: error.message,
                });
            }
        } else if (findGame) {
            //Creamos y guardamos comentario
            // actualizamos games y owner

            const newComment = new Comment({
                ...req.body,
                recipientGame: idRecipient,
                owner: req.user._id,
            });

            const savedComment = await newComment.save();

            if (savedComment) {
                // se ha guardado y actualizamos

                try {
                    await User.findByIdAndUpdate(req.user._id, {
                        $push: { postedComments: newComment._id},
                    });
                
                    await Game.findByIdAndUpdate(idRecipient, {
                        $push: { comments: newComment._id},
                    });
                    
                    return res.status(200).json({
                        userOwner: await User.findById(req.iuser._id).populate(
                            "commentsByOther postedComments"
                        ),
                        comment: newComment,
                    });
                } catch (error) {
                    //error al actualizar
                    return res.status(409).json({
                        error: "Error al actualizar user y games",
                        message: error.message,
                    });
                }
            } else {
                // error al guardar
                return res.status(409).json({
                    error: "Error al guardar el comentario",
                    message: "No se guardado el comentario",
                });
            }
        } else {
            // el id no pertenece a ningun registro
            return res.status(404).json({
                error: "El idREcipient no pertence a ningun registro",
                message: "El destinatario no exite",
            });
        }
    }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al crear el comentario", message: error.message});
    }
};


//!-------------------------- DELETE 

const deleteComment = async (req, res, next) => {
    try {
        // obtenemos id de los params
        const { id } = req.params;
        
        // Buscamos el comentario
        const commentDB = await Comment.findById(id);
        console.log("Entro", commentDB);
        // verdicamos si existe para proceder a borrarlo
        if (commentDB) {
            // Lo borramos
            await Comment.findByIdAndDelete(id);
            
            // Lo busccamos para ver si se borro correctamente
            const commentDelete = await Comment.findById(id);

            if (!commentDelete) {
                // si commentDelete es null se ha borrado
                // actualizamos los registros correspondientes
                // owner, user character o games a quien ibna el comentraio
                
                try {
                    await User.findByIdAndUpdate(commentDB.owner, {
                        $pull: { postedComments: id },
                    });

                console.log("All users", await User.find());
                console.log(
                    "users que han dado ha me gusta al comentario",
                    await User.find({ gamesFav: "65dcdf90e7b85ceb29a5699b"}) //! - poner un gameFav
                );
                // actualizamos todos los usuarios que han dado ha me gusta el comentario borrado
                await User.updateMany(
                    { commentsFav: id },
                    { $pull: { commentsFav: id} }
                );
                try {
                    await User.findByIdAndUpdate(commentDB.recipientUser, {
                        $pull: { commentsByOther: id },
                    });
                
                try {
                    await Character.findByIdAndUpdate(commentDB.recipientCharacter, {
                        $pull: { comments: id},
                    });
                try {
                    await Game.findByIdAndUpdate(commentDB.recipientGame, {
                        $pull: { comments: id},
                    });

                    return res.status(200).json("comentario borrado");
                } catch (error) {
                    return res.status(409).json({
                        error: 
                        "Error al actualizar el game que ha recibido el comentario",
                        message: error.message,
                    });
                }
                }   catch (error) {
                    return res.status(409).json({
                        error: 
                        "Error al actualizar el user que ha recibido el comentario",
                        message: error.message,
                    });
                } 
                } catch (error) {
                    return res.status(409).json({
                        error: 
                        "Error al actualizar el user que ha recibido el comentario",
                        message: error.message,
                    });
                }
                } catch (error) {
                    // error al actualizar el owner
                    return res.status(409).json({
                        error: "Error al actualizar el owner",
                        message: error.message,
                    });
                }
            } 
        } else {
            // el comentario no existe
            return res.status(404).json({
                error: "No se a borrado comentario",
                message: "El comentario no exite",
            });
        }  
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al borrar el comentario", message: error.message });
    }
};

module.exports = { createComment, deleteComment };