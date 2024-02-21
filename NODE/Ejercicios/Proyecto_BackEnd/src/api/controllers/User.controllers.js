
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");
const validator = require("validator");

const User = require("../models/User.model");

const { deleteImgCloudinary } = require("../../middleware/file.middleware");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");
const randomCode = require("../../utils/randomCode");
const enumOk = require("../../utils/enumOk");
const Character = require("../models/Character.model");
const Games = require("../models/Games.model");


//! register largo con envio de codigo al email

const registerLargo = async (req, res, next) => {
//vemos si hay imagen en la solicitud
    const catchImg = req.file?.path;

    try {
        // indexes 
        await User.syncIndexes();

        // guardamos el codigo de confitrmacion random en unba variable
        let confirmationCode = randomCode();

        //Destructuring del namo y email del req.body
        const { email, name } = req.body;

        // buscamos en la BD si hay algun usuario ya creadoi con ese email o ese nombre
        //! findOne metodo mongoose para encontrar elementos coincidentes

        const userExist = await User.findOne (
            {
                email: req.body.email,
            },
            {
                name: req.body.name,
            }
        );

        // si no esxiste el usuario procedemos a crearlo

        if (!userExist) {
            //! lo creamos -- con el codigo random y con lo que trae el req.body

            const newUser = new User({...req.body, confirmationCode});

            // verficamos si hay imagen en la solicitud, y si no hay le ponemos uan imagen por defect
            if (req.file) {
                newUser.image = req.file.path;
            } else {
                // le ponemos la imagen por defecto
                newUser.image = 
                "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
            };

            try {
               const userSave = await newUser.save();
               
               //comnprobamos que este usuario se ha guardado y enviamos el codig
               if (userSave) {
                // Todo - ENVIAMOS EL CODIGO
                // llamamos a las variables de entorno
                const emailENV = process.env.EMAIL;
                const passwordENV = process.env.PASSWORD;

                // creamos el transport
                const trasnporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: emailENV,
                        pass: passwordENV,
                    },
                    tls: {
                        // AÑADIR ESTA PARTE PARA QUE FUCNCIONES
                        rejectUnauthorized: false
                    }
                });
                //creamos las opciones del mensaje
                const mailOption = {
                    from: emailENV,
                    to: req.body.email, // se lo enviamos a un registrado
                    subject: "Confirmation code",
                    text: `Su codigo de confitmacion es ${confirmationCode}, gracias por confiar en nosotros`,                  
                };

            trasnporter.sendMail(mailOption, (error, info) => {
                if (error) {
                    return res
                    .status(409)
                    .json({ error: "correo no enviado", message: error });
                } else {
                    return res.status(200).json({ user: userSave, confirmationCode});
                }
            }); 
            } else {
                // lanzamos un error diciendo que no se guardo el usuario
                req.file && deleteImgCloudinary(catchImg);
                return res.status(409).json("Error al guardar el usuario");
            }
            } catch (error) {
                req.file && deleteImgCloudinary(catchImg);
                return res.status(409).json({
                    error: "Problema al guardar el user",
                    message: error.message,
                });
            }
        } else {
            // lanzamos error porque el usuario ya existe con el amil o el name
            req.file && deleteImgCloudinary(catchImg);
            return res.status(409).json("El usuario ya existe");
        }
    } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res
        .status(409)
        .json({ error: "Error en el registro", message: error.message });
    }
};


//! register con redirect 

const registerWithRedirect = async (req, res, next) => {
    let catchImg = req.file?.path;
    console.log("registro")
    try {
        //indexes
    await User.syncIndexes();

    // guardamos el codigo de confirmacion
    let confirmationCode = randomCode();

    // buscamos si hay algun user con email o el name
    const userExist = await User.findOne(
        { email: req.body.email },
        { name: req.body.name }
    );
     
    // comprobamos que este user no existe
    if (!userExist) {
        // si no existe lo creamos
        const newUser = new User({...req.body, confirmationCode});

        //vemos si hay iamgen en la solicitud
        if (req.file) {
            newUser.image = req.file.path;
        } else {
            // le ponemos una iamgen por defecto
         newUser.image =
         "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
        }

        try {
            //guardamos al user con esos datos
            const userSave = await newUser.save();

            // si el user se ha creado hacemos el redirect
            if (userSave) {
                return res.redirect(
                    307,
                    `http://localhost:8080/api/v1/user/register/sendMail/${userSave._id}`
                );
            } else {
                // Error no se ha guarado correcto
                req.file && deleteImgCloudinary(catchImg);
                return res.status(404).json({
                    error: "El user no se ha guardado",
                    message: "El user no se ha guardado",
                });
            }
        } catch (error) {
            //error al guardar el user
            req.file && deleteImgCloudinary(catchImg);
            return res
            .status(409)
            .json({ error: "El user no se ha guardado", message: error.message });
        }        
    } else {
        // Error porque ya existe este usuario
        req.file && deleteImgCloudinary(catchImg);
        return res.status(409).json({
            error: "El usuario ya existe",
            message: "El usuario no se ha guardado",
        });
    }
    } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res
        .status(409)
        .json({ error: "Error en el registro", message: error.message})
    }
};


//! send code Confirmation

const sendCode = async (req, res, next) => {
    console.log("dentro");
    try {
        //buscamos al user por su id de los params
        // para buscar el email y el codigo de confirmation
        const { id } = req.params;

        //buscamos al user
        const userDB = await User.findById(id);

        //llamamos a las vasriables de entorno
        const emailENV = process.env.EMAIL;
        const passwordENV = process.env.PASSWORD;

        //creamos el trasnport

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailENV,
                pass: passwordENV,
            }
        }); 

        //creamos las opciones del mensaje
        const mailOptions = {
            from: emailENV,
            to: userDB.email, // se lo enviamos al registrado
            subject: "Confirmation Code",
            text: `Su código de confirmación es ${userDB.confirmationCode}, gracias por confiar en nosotros`,
        };

        //enviamos el email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res
                .status(409)
                .json({error: "correo no enviado", message: error});
            } else {
                return res
                .status(409)
                .json({ user: userDB, confirmationCode: userDB.confirmationCode})
            }
        });
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al enviar el email", message: error.message});
    }
};

//! Resend Code

const resendCode = async (req, res, next) => {
    try {
        // llamamos a las variables de entorno
        const emailENV = process.env.EMAIL;
        const passwordENV = process.env.PASSWORD;

        const transporter = nodemailer.createTransport ({
            service: "gmail",
            auth: {
                user: emailENV,
                pass: passwordENV,
            },
        });

        // buscamos al usuario por el email que nos trae la solicitud
        const userSave = await User.findOne({ email: req.body.email });

        if(userSave) {
            // creamos las opciones del mensaje
            const mailOptions = {
                from: emailENV,
                to: req.body.email, // se lo enviamos al user registrado
                subject: "Confirmation Code",
                text: `Su codigo de confirmation es ${userSave.confirmationCode}, gracias por confiar en nosotros`,
            };

            //enviamos el email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res
                    .status(409)
                    .json({ error: "correo no enviado", message: error });
                } else {
                    return res.status(200).json({ user: userSave, resemd: true });
                }
            });
            //Error no se encuentra al user por email
            return res
            .status(404)
            .json({ error: "Error al enviar el dcodigo", message: error.message });
        }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al enviar el codigo", message: error.message });
    }
};

//! Check New User

const checkNewUser = async (req, res, next ) => {
    try {
        // recibimos el email y  el confirmationCode de la solicitud

        const { email, confirmationCode } = req.body;

        //Buscamos al Usuario
        const userExist = await User.findOne({ email });

        // si el user no existe lanzamos un error
        if (!userExist) {
           return res
           .status(404)
           .json({ error: "user no encontrado", message: "checkea el correo"});
        } else {
            // si existe -> comprobamos los codigos
            if (userExist.confirmationCode === confirmationCode ) {
                // si es igual actualizamos el check del user
                try {
                    //actualizamos al user
                    await userExist.updateOne({ check: true });

                    // Buscamos a este user actualizado para enviar la respuesta
                    const updateUser = await User.findOne({ email });

                    return res.status(200).json({
                        user: updateUser,
                        testCheckUser: updateUser.check == true ? true : false,
                    });
                } catch (error) {
                    return res
                    .status(409)
                    .json({ error: "Error al actualizar", message: error.message });
                }
            } else {
                // si los codigos no coinciden borramos a este user

                await User.findByIdAndDelete(userExist._id);

                // si la imagen no es la que hay por defecto hay que borrarla
                if (
                    userExist.image !==
                    "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png"
                ) {
                    deleteImgCloudinary(userExist.image);
                }
                // lanzamos la respuiesta avisando del borrado del user

                return res.status(409).json({
                    user: userExist,
                    check: false,
                    delete: (await User.findById(userExist._id))
                        ? "user no borrado"
                        : "user borrado",
                });           
            }
        }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al checkear", message: error.message })
    }
};

//! LOGIN

const login = async (req, res, next) => {
    try {
        // hacemos destructuring del email y la pass del req.body
        const { email, password } = req.body;

        // buscamos a este usuraio por el email
        const userDB = await User.findOne({ email });

        // comprobamos si el user existe en la db
        if (userDB) {
            // tenemos que comparar las contraseñas
            // constraseña de base de datos encriptada
            // bcrypt -> para poder comparar la pass con una pass encriptada
            if (bcrypt.compareSync(password, userDB.password)) {
                // si coinciden devuielve true y puedo generar el token
                //* token */
                const token = generateToken(userDB._id, email);

                // una vez generado enviamos una respuesta con el userr y este token
                return res.status(200).json({
                    user: userDB,
                    token,
                });
            } else {
                // las contraseñas no coinciden
                return res.status(409).json({
                    error: "Contraseña incorrecta",
                    message: "Intentalo otra vez",
                });
            }
        } else {
            // Error user no encontrado
            return res
            .status(404)
            .json({ error: "User no encontrado", message: "User no registrado"});
        }
    } catch (error) { 
        return res
        .status(409)
        .json({ error: "Error en el login", message: error.message });
    }
};

//! AUTOLOGIN

const autoLogin = async (req, res, next) => {
    try {
        // destructuring del email y pass del body
        const { email, password } = req.body;

        //Buscamos al user en la DB
        const userDB = await User.findOne({ email });

        // Comprobamos que el user exista en la base de datos
        if (userDB) {
            // comprobamos si las contraseñas coinciden
            //* En este caso se comparan las 2 contraseñas Encriptadas */
            if (password === userDB.password ) {
                // si coinciden generamos el token
                const token = generateToken(userDB._id, email);

                //Enviamos la respuesta al token
                return res.status(200).json({
                    user: userDB,
                    token,
                });
            } else {
                // Lanzamos error en contraseña
                return res.status(409).json({
                    error: "Contraseña incorrecta",
                    message: "Intentalo otra vez",
                });
            }
        } else {
            // lanzamos un error user no encontrado
            return res
            .status(404)
            .json({ error: "User no encontrado", message: "User no registrado" });
        }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error en el login", message: error.message });
    }
};

//! CAMBIO DE CONTRASEÑA NO LOGUEADO

const forgotPassword = async (req, res, next) => {
    try {
        // nos trae el email del body mediante destructuring
        const { email } = req.body;

        // Buscamos al user para ver si existe
        const userDB = await User.findOne({ email });

        if (userDB) {
            // si el user existe hacemos el redirect que envia el correo con la pass nueva
            //! redirect -- 307
            return res.redirect(
                307,
                `http://localhost:${process.env.PORT}/api/v1/user/forgot/sendPassword/${userDB._id}`
            );
        } else {
            // user no encontrado
            return res
            .status(409)
            .json({ error: "User no encontrado", message: "REvise el email" });
        }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al cambio de contraseña", message: error.message });
    }
};

//! SEND PASSWORD

const sendPassword = async (req, res, next) => {
    try {
      // traemos el id por req.params
      const { id } = req.params;
  
      // Buscamos al user
      const userDB = await User.findById(id);
  
      //Comprobamos si el user existe
  
      if (userDB) {
        // generamos password segura random y la enviamos
        const passwordSecure = randomPassword();
  
        //todo ------> ENVIO DEL CORREO
        // llamamos a las variables de entorno
        const emailENV = process.env.EMAIL;
        const passwordENV = process.env.PASSWORD;
  
        // creamos el transport
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailENV,
            pass: passwordENV,
          },
        });
  
        // creamos las opciones del mensaje
        const mailOptions = {
          from: emailENV,
          to: userDB.email, // se lo enviamos al user registrado
          subject: "INFO",
          text: `User: ${userDB.name}, su nuevo código de login es: ${passwordSecure} Nos ponemos en contacto con uste porque hemos recibido una solicitud de olvido de contraseña`,
        };
  
        // enviamos el email
        transporter.sendMail(mailOptions, async (error, info) => {
          if (error) {
            return res
              .status(409)
              .json({ error: "correo no enviado", message: error });
          } else {
            //** ENCRIPTAMOS CONTRASEÑA para actualizar al user con esta contraseña encriptada */
            const newPasswordEncript = bcrypt.hashSync(passwordSecure, 10);
  
            try {
              // Intentamos actualizar el user
              await User.findByIdAndUpdate(id, { password: newPasswordEncript });
  
              // todo --> TEST comprobar que el user se ha actualizado correctamente
  
              // buscamos al user actualizado para comparar su contraseña encriptada con la enviada
              const userUpdate = await User.findById(id);
  
              // Compruebo la nueva contraseña segura con la contraseña encriptada que tiene el user guardado actualizado
              if (bcrypt.compareSync(passwordSecure, userUpdate.password)) {
                // si es true se ha actualizado de forma correcta
                return res.status(200).json({
                  updateUser: true,
                  sendPassword: true,
                });
              } else {
                // Si las contraseñas no coinciden el user no se ha actualizado de forma correcta
                return res.status(409).json({
                  error: "User no actualizado",
                  message: "Se envio la nueva contraseña",
                });
              }
            } catch (error) {
              // error al actualizar el user
              return res.status(409).json({
                error: "Error al actualizar el user",
                message: error.message,
              });
            }
          }
        });
      } else {
        // Error el user no existe
        return res
          .status(404)
          .json({ error: "User no encontrado", message: "el email esta Mal" });
      }
    } catch (error) {
      return res.status(409).json({
        error: "Error durante el envio del correo",
        message: error.message,
      });
    }
  };


//* RUTAS AUTENTICADAS

//! EJEMPLO RUTA AUTENTICADA

const exampleAuth = async (req, res, next) => {
    try {
        console.log("req.user", req.user);
        console.log("req.headers", req.headers);
        // const userDB = await User.findById(req.user._id);
        const userDB = await User.findOne({ name: req.user.name });
        return res.status(200).json(userDB);
    } catch (error) {
        console.log(error);
        return res.status(409).json(error.message);
    }
};

//! CAMBIO DE CONTRASEÑA UNA VEZ AUTENTICADO

const changePassword = async (req, res, next) => {
    try {
        // Recogemos del body la contraseña antigua y nueva
        const { password, newPassword } = req.body;

        // Tenemos que comprobar que la contraseña sea fuerte (strongPassword) mediante validator

        const validate = validator.isStrongPassword(newPassword);

        if (validate) {
            // sacamos el id del usuario (esta autenticado -> req.user)
            const { _id } = req.user;

            //comprobamos que la contraseñla qie introduce antigua coincide con la guardada en la base de datos
            // la guardada estga encriptada --> bcrypt -> compareSync

            if (bcrypt.compareSync(password, req.user.password)) {
                // si coinciden haseamos (ENCRIPTAMOS) contraseña y actualizamos el user
                const newPasswordHashed = bcrypt.hashSync(newPassword, 10);

                try {
                    // actualizamos al user
                    //! no hacer .save()

                    await User.findByIdAndUpdate(_id, { password: newPasswordHashed });

                    // todo -> Test - en teimpo real para ver si el user se a guardado correctamente

                   // Este es el usuario ya actualizado
          const userSave = await User.findById(_id);

          // Comprobamos la contraseña del user ya actualizado
          if (bcrypt.compareSync(newPassword, userSave.password)) {
            // Si es correcto enviamos una respuesta correcta
            return res.status(200).json({ user: userSave, testUpdate: true });
          } else {
            // No se ha actualizado el user
            return res.status(409).json({ testUpdate: false });
          }
        } catch (error) {
          // Error al actualizar el user
          return res.status(409).json({
            error: "Error al actualizar el user",
            message: error.message,
          });
        }
      } else {
        // error las contraseñas no coinciden
        return res.status(409).json({
          error: "Contraseña antigua incorrecta",
          message: "Pruebe otra contraseña",
        });
      }
        } else {
        // Mandamos un error la pass no es segura
        return res.status(409).json({
          error: "La contraseña nueva no es segura",
          message:
            "Minimo 8 caracteres, 1 simbolo, 1 mayuscula, 1 minuscula y un numero",
        });
      }
    } catch (error) {
      return res.status(409).json({
        error: "Error al cambiar la contraseña",
        message: error.message,
      });
    }
  };



//! UPDATE

const updateUser = async (req, res, next) => {
    try {
    // capturamos la imagen nueva subida a cloudinary (si viene en req.file)
    let catchImg = req.file?.path;

    // Actualizamos los modelos unicos del modelo
    await User.syncIndexes();

    //Hacemos una nueva instancia de User con los datos traidos del body
    const patchUser = new User(req.body);

    // Comprobamos que e lreq.file traiga la imagen para añadirla al user actualizado
    // if (req.file)
    // patchUser.image = catchImg;

    req.file && (patchUser.image = catchImg);

    //* salvoguardo la info que el user No quiero que cambie */
    //* MAantenemos la info que el user tiene en la base de datos */

    patchUser._id = req.user._id;
    patchUser.password = req.user.password;
    patchUser.rol = req.user.rol;
    patchUser.confirmationCode = req.user.confirmationCode;
    patchUser.email = req.user.email;
    patchUser.check = req.user.check;

    // comprobamos mediante la funcion enumOk si el user quiere cambiar el genero, que este entre las opciones
    // compruebo que el user quiere cambiar el genero guardado
    if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        patchUser.gender = resultEnum.check ? req.body.gender : req.user.gender;
      }
  
    // Actualizamos el user

    try {
        //! No hacer mediante .save()
        //* findByIdAndUpdate -> busca al user mediante el id y lo actualiza */
        //* 1) id con el buscamos */
        //* 2) la info con la que vamos a actualizar a este user */

        await User.findByIdAndUpdate(req.user._id, patchUser);

        // todo -- test teimpo real -- runtime 

        //* comparar el user actualizado guardado con lo que quiere actualizarse el user (req.body) y (req.file -> si hay img) */


        // buscamos al user guardado ya actualizado para testear la info
        const updateUser = await User.findById(req.user._id);

        // Sacar las claves del req.body para saber que info quiere actualizar este user
        // Saber lo que el user ha actualizado
        const updateKeys = Object.keys(req.body);

        console.log("claves del body", updateKeys);

        // creo un array vacio donde vamos a guardar el test
        const testUpdate = [];

        // Recorremos las claves que el user quiere actualizar
        updateKeys.forEach((item) => {
            // Comprobamos que la info actualizada sea igual a lo que mando el user por la req.body
            if (updateUser[item] === req.body[item]) {
            // Doble verificacion comprobando que sea difrente a lo que tenia el user guardado
                if (updateUser[item] !== req.user[item]) {
                    // si estas dos verificaciones coinciden se a actualizado el user de forma correcta
                    //* la clave del user actualizado es diferente a la clave del user guardado antres de la actualizacion */
                    //* la clave del user actualizado es igual a la clave que envia el user por la req.body */
                    testUpdate.push({
                        [item]: true,
                    });
                }  else {
                    testUpdate.push({
                        [item]: "Misma info que la antigua",
                    });
                } 
            } else {
                testUpdate.push({
                    [item]: false,
                });
            }
        });

        // Tenemos que checkear el req.file por si hay que hacer el test
        if (req.file) {
            // si la imagen del user actualizado es igual a la imagen nueva el test es correcto
            // si no es igual, no se actualiz y ponemos el test en false
            updateUser.image === catchImg
             ? testUpdate.push({ image: true})
             : testUpdate.push({ image: false});
        } 

        // si el test de imagen es correcto y el user tiene una imagen diferente a la que viene por defecto se la borramos 
        if (
            testUpdate.image &&
            req.user.image !==
            "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png"
        ) {
            deleteImgCloudinary(req.user.image);
        }

        console.log("TEST UPDATE", testUpdate);

        // Una vez fianlizado el test lanzamos una respuesta correcta con el user actualizado y el test
        return res.status(200).json({
            user: updateUser,
            test: testUpdate,
        });
    } catch (error) {
        // Error al actualizar el user

        // si hay un error y el user subio una imagen, esa imagen la borramos
        if (req.file) {
            deleteImgCloudinary(catchImg);
        }

        return res.status(409).json({
            error: "Error al actualizar el user",
            message: error.message,
        });
    }
    } catch (error) {
        // si hay un error y el user subio una imagen, esa imagen la borramos
        if (req.file) {
            deleteImgCloudinary(catchImg);
        }

        return res.status(409).json({
           error: "Error general actualizando el user",
           message: error.message, 
        });
    }
};

//! DELETE


const deleteUser = async (req, res, next) => {
    // creamos array donde se van a almacenar ids de comentarios que hizo este user y que le hicieron a el
    // Recorremos estos id para actualizar Users, Movies, y Characters donde aparezcan los comentarios
    const allComments = []; //! se guardan id de comment

    // REcorremos comentarios de otros y por cada uno lo añadimos al array de todo los comentarios
    req.user.commentsByOther.forEach((comment) => {
        allComments.push(comment);
    });

    //Recorremos comentarios que el user hizo y por cada uno lo añadimos al array
    req.user.postedComments.forEach((comment) => {
        allComments.push(comment);
    });
    
    console.log("Todos comentarios", allComments);
    
    // ** Al borrar un user tendremos que actualizar :
    //** 1) Registros de Movie que en su campo de likes tengan el id de este user borrado */
    //** 2) Registros de Character que en su campo de likes tengan el id de este user borrado */
    //** 3) Registros de User que en su campo de followers tengan el id de este user borrado */
    //** 4) Registros de User que en su campo de followed tengan el id de este user borrado */
    //** Sacamos el id de estos campos mediante - $pull - SACARLO */ ( $push --- meter)

    try {
        // buscar al user por el id y borrarlo
        await User.findByIdAndUpdate(req.user._id);

        //Buscamos al user borrado para verificar que se a borrado
        const existUser = await User.findById(req.user._id);

        // si el user no existe se a borrado correctamente y habira que borrar la imagen si no es la que hay por defecto
        if (!existUser) {
            // borrado de imagen si no es la que hay por defecto
            req.user.image !==
            "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
            deleteImgCloudinary(req.user.image);

            // todo -- actualizar los modelos que contienen en su campo correspodniente este id

        try {
            // actualizamos los registros de las movies que contangan el id en el campo de likes
            // La condicion es que en el campo de like aparezca el id del user
            // la accion es sacar del campo de likes este id
            await Games.updateMany(
                { likes: req.user._id},
                { $pull: { likes: req.user._id }}
            );
            try {
                // Actualizamos character que tenian en su array de likes el id del user
                await Character.updateMany(
                  { likes: req.user._id },
                  { $pull: { likes: req.user._id } }
                );

                try {
                    // Actualizamos users que le seguian
                    await User.updateMany(
                      { followed: req.user._id },
                      { $pull: { followed: req.user._id } }
                    );

                    // Actualizamos los users a los que el seguia
                    await User.updateMany(
                        { followers: req.user._id },
                        { $pull: { followers: req.user._id } }
                      );
                
 //! borrar registros de comentarios que hizo el user y que le hicieron a el
 //! Actualizar registros donde aparecen estos id de comentarios que ha sido borrados

            try {
                // borramos comentarios que iban dirigidos a este user borrado
                await Comment.deleteMany({
                    recipientUSer: req.user._id,
                });

                // borramos comentarios de los que el user borrado es dueño (owner)
                await Comment.deleteMany({
                    owner: req.user._id,
                });

                // Hemos borrado los comentarios, pero hay que actualizar los registros donde aparecen estos id de los comentraios borrados


                //! Hacemos promise.all porque hay que recorrer el array de los comentarios y por cada uno realizar una serie de acciones:
                //! actualizar registros donde apararece este id
                //! User, Movie, Character

                // Hasta que no hagas todo lo de dentro de la promesa no continues
              Promise.all(
                // recorremos array de id de comentarios
                allComments.map(async (comment) => {
                  //! Por cada comentario
                  //* Actualizamos los user que tenian comentario del user borrado

                  await User.updateMany(
                    { commentsByOther: comment },
                    { $pull: { commentsByOther: comment } }
                  );

                  //* User que hicieron comentario al user borrado
                  await User.updateMany(
                    { postedComments: comment },
                    { $pull: { postedComments: comment } }
                  );

                  //* Movies que tiene en comments este comentario
                  await Games.updateMany(
                    { comments: comment },
                    { $pull: { comments: comment } }
                  );

                  //* Character que tienen en comments este comentario
                  await Character.updateMany(
                    { comments: comment },
                    { $pull: { comments: comment } }
                  );
                })
              ).then(async () => {
                return res.status(200).json("User borrado");
              });
            } catch (error) {
              // Error al borrar los comentarios
              return res.status(409).json({
                error: "Error borrando comentario",
                message: error.message,
              });
            }
          } catch (error) {
            // Error actualizando seguidores y seguidos
            return res.status(409).json({
              error: "Error actualizando users",
              message: error.message,
            });
          }
        } catch (error) {
          // Error actualizando characters
          return res.status(409).json({
            error: "Error actualizando characters",
            message: error.message,
          });
        }
      } catch (error) {
        // Error al actualizar Games
        return res.status(409).json({
          error: "Error actualizando Games",
          message: error.message,
        });
      }
    } else {
      // Error user no borrado

      return res.status(409).json({ error: "Error en el borrado" });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error general borrando el user",
      message: error.message,
    });
  }
};

//! TOGGLE LIKE FAV MOVIE

// ruta autenticada
const addFavMovie = async (req, res, next) => {
    try {
        // pensar lo que vamos a actualizar
        // 1 Games ->  array likes -> necesitamos el id de esta game (req.params)
        // 2 user -> arrays gamesFav -> necesitmaos ed del game (req.params)

        //* recibimos  id de movie por req.params
        //* en la ruta tendremos que añadir al path -> /:idGames
        const { idGames } = req.params;

        // hacemos destructuring del req.user para obtener su id y su array de games
        const { _id, gamesFav } = req.user;

        //* TOGGLE -> hay que ver si este id esta incluido en el array de gamesFav del user -> para sacarlo o meterlo

        if (gamesFav.includes(idGames)) {
            // si lo incluye -> hay que sacarlo $PULL

            try {
                // sacamos del user deñ array de gamesFav el id de games que le ha dado a me gusta
                await User.findByIdAndUpdate(_id, {
                    $pull: { gamesFav: idGames}
                });

                // Sacamos de games del array de likes el id del user

                await Games.findByIdAndUpdate(idGames, {
                    $pull: { likes: _id},
                });

            //! respuesta
            return res.status(200).json({
                userUpdate: await User.findById(_id).populate(
                    "charatersFav gamesFav"
                ),
                gamesUpdate: await Games.findById(idGames),
                action: `pull idMovie: ${idGames}`,
            });
            } catch (error) {
                // Error al sacar el like
                return res.status(409).json({
                    error: "Error al sacar el like",
                    message: error.message,
                });
            }
        } else {
            // No se incluye el id en el array de gamesFav
            // $push -> añadir este id al array

            try {
            // Actualizamos el user añadiendo en el campo de gamesFav el id del game
            // findByIdAndUpdate -> 1 el id del registro que queremos actualizar 2 -> accion pull, push
            await User.findByIdAndUpdate(_id, {
                $push: { gamesFav: idGames},               
            });

            // Actualizamos games en su campo de likes añadir el id del user
            await Games.findByIdAndUpdate(idGames, {
                $push: { likes: _id},
            });

            //! Una vez actualizados enviamos la respuesta
            return res.status(200).json({
                userUpdate: await User.findById(_id).populate(
                    "gamesFav characterFav"
                ),
                gamesFav: await games.findById(idGames),
                action: `push idGames: ${idGames}`,
            });
        } catch (error) {
            // Error al añadir el like
            return res.status(409).json({
              error: "Error al añadir el like",
              message: error.message,
            });
          }
        }
      } catch (error) {
        // Error general al añadir o quitar like a movie
        return res.status(409).json({
          error: "Error general en el like de movie",
          message: error.message,
        });
      }
    };
  

module.exports = {
    registerLargo,
    registerWithRedirect,
    sendCode,
    resendCode,
    checkNewUser,
    login,
    autoLogin,
    forgotPassword,
    sendPassword,
    exampleAuth,
    changePassword,
    updateUser,
    deleteUser,
    addFavMovie
};