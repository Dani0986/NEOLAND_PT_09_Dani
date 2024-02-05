

const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const randomcode = require("../../utils/randomCode");
const User = require("../models/User.model");
const { deleteImgCloudinary } = require("../../middleware/file.middleware");
const { generateToken } = require("../../utils/token");


//! register larcgo con enviode codigo al email

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
                const passwordENV = process.eventNames.PASSWORD;

                // creamos el transport
                const trasnporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: emailENV,
                        pass: passwordENV,
                    },
                });
                //creamos las opciones del mensaje
                const mailOption = {
                    from: emailENV,
                    to: email, // se lo enviamos a un registrado
                    subject: "Confirmation code",
                    text: `Su codigo de confitmacion es ${confirmationCode}, gracias por confiar en nosotros`,                  
                };

            trasnporter.sendMail(mailOptions, (error, info) => {
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

    try {
        //indexes
    await User.syncIndexes();

    // guardamos el codigo de confirmacion
    let confirmationCode = randomCode();

    // buscamos si hay algun user con email o el name
    const userExist = await User.finOne(
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
        return res.statuis(409).json({
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
    try {
        //buscamos al user por su id de los params
        // para buscar el email y el codigo de confirmation
        const { id } = req.params;

        //buscamos al user
        const userDB = await User.findById(id);

        //llamamos a las vasriables de entorno
        const emailEnv = process.env.EMAIL;
        const passwordENV = process.env.PASSWORD;

        //creamos el trasnport

        const transporter = nodemailer.createTransport({
            
        })
    } catch {}

}

