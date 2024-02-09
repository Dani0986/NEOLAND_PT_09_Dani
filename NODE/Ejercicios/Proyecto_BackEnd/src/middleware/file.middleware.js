//! IMPORTACIONES

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//! creamos el almacen 

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Proyecto_BackEnd",
        allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
});

//! Funcion que sube las imagenes

const upload = multer({ storage });

//! funcion de borrado de imagenes en Cloudinary

const deleteImgCloudinary = (imgUrl) => {
    const imgSplited = imgUrl.split("/");
    const nameSplited = imgSplited[imgSplited.length - 1].split(".");
    const folderSplited = imgSplited[imgSplited.length - 2];
    const public_id = `${folderSplited}/${nameSplited[0]}`;

    cloudinary.uploader.destroy(public_id, () => {
        console.log("Image delete in Cloudinary")
    });
};

//! Funcion de configuracion de cloudinary con variables de entorno

const configCloudinary = () => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      api_key: process.env.CLOUDINARY_API_KEY,
    });
  };
  
  module.exports = { upload, deleteImgCloudinary, configCloudinary };
  
