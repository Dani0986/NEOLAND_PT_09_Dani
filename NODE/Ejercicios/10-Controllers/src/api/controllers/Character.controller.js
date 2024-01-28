
// traemos la funcion de borrar imagenes por si el usuario al subir un nuevo character tienee un error, que esa imagen se borre
const { deleteImgCloudinary } = require("../../middleware/file.middleware");
const enumOk = require("../../utils/enumOk");

// nos traemos el modelo

const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

// metodo post - hacemos el create

const create = async (req, res, next) => {
// guardamos url de imagen que se sube a cloudinary
// los archivos (imagen) -- req.file
    let catchImg = req.file?.path;

    console.log("req body", req.body);
    console.log("req file", req.file);

    try { // hacemos prueba y capturar error
        //!-- actualizar indexes
        // los indexes se forman cuando la clave es unica
        // es importante por si es modificado posteriormente a la creacion del controlador
        await Character.syncIndexes();

        // Creamos una nueva instancia de Character con los datos del body

        const newCharacter = new Character(req.body);

        // comprobamos si hay imagen para añadirla al Character creado

        if (catchImg) {
            newCharacter.image = catchImg;
        } else {
            // si no trae imagen la solicitud, le ponemos una predeterminanda
            newCharacter.image =
            "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
        }

    // guardamos el Character creado

    const saveCharacter = await newCharacter.save();

    // comprobar si el Character se a guardado para lanzar la respuesta 
        if (saveCharacter) {
            // si se guarda lanzamos respuesta correcta con los dtaso del character
            return res.status(200).json(saveCharacter);
        } else { 
            // si no se guarda hya un error y lanzamos la respuesta
            return res
            .status(404)
            .json("No se a podido guardad en la base de datos");
        }
    } catch (error) {
        // solo entramos al catch si ha habido un error
        // si hay error
        /* tenemos que borrar la imagen en cloudinary porque se sube antes de que nos metamos en
        el controlador, porque es un middleware que esta entre la peticion dle cliente y el controlador.
        Comprobar si hay imagen en req.file porque si es asi se a subido a cñoudinary y hay qeu borrarla. */ 
        
        req.file?.path && deleteImgCloudinary(catchImg);
        next(error);
        return res.status(409).json("Error al crear el Character");
    }
};

// metodo get y get all

const getAll = async (req, res, next) => {
    try { // traemos los elementos de la coleccion
        const allCharacter = await Character.find();
        // find nos devuelve un array con todos los elelenmtos coincidentes

        if (allCharacter.length > 0) {
            // si hay registros lanzamos respuestra correcta 
            return res.status(200).json(allCharacter);
        } else {
            // si no hay registros lanzamos una respuesta 404
            return res.status(404).json("No se han encontrado personajes")
        }
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Error al buscar personajes", message: error.message});
    }
};

// metodo get y getById

const getById = async (req, res, next) => {
    try { 
        //hacemos destructuring del id traido por params
        const { id } = req.params;
        // Encontramos al character que tenga es ID
        //! POPULATE nos permite obtener los datos de lso campos populados

        const characterById = await Character.findById(id).populate("movies");

        // Comprobamos si se ha encontrado el character
        if (characterById) {
        return res.status(200).json(characterById);
      } else {
        return res.status(404).json("No se ha encontrado el character");
      }
    } catch (error) {
      return res
        .status(409)
        .json({ error: "Error al buscar por Id", message: error.message });
    }
  };

// metodo get y getByName 

const getByName = async (req, res, next) => {
    console.log(req);
    try {
      // Hacemos destructuring del name traido por params
      const { name } = req.params;
  
      // Buscamos al character que coincida en el name
      const charactersByName = await Character.find({ name });
      console.log(charactersByName);
  
      // comprobar si la longitud del array es mayor a 0 y hay character con ese name, la respuesta es 200
      if (charactersByName.length > 0) {
        return res.status(200).json(charactersByName);
      } else {
        return res.status(404).json("No se han encontrado registros");
      }
    } catch (error) {
      return res
        .status(409)
        .json({ error: "error durante la búsqueda", message: error.message });
    }
  };

  // patch y update (parches y actualizciones)

  const update = async (req, res, next) => {
    try {
      // comprobasr si en la solicitud hay una imagen
      let catchImage = req.file?.path // path es una ruta que podemos manejar
      await Character.syncIndexes()

      // Trameos el  ID de los params de este character a actualizar
      const { id } = req.params;

      //buscamos el character
      const characterById = await Character.findById(id);

      if (characterById) {
        // guardamos la imagen que tiene el character en la base de dfatos
        const oldImage = characterById.image;

        //creamos un body custom con los datos, si los hay, del body
        const bodyCustom = {
          _id: characterById._id,
          image: req.file?.path ? catchImage : oldImage,
          name: req.body?. name ? req.body?.name : characterById.name,
        };

        // comprobamos si recibimospor el body el genero
      if (req.body?.gender) {
        // comprobamos si recibimos por el body el genero
        const resultEnumOk = enumOk(req.body?.gender);
        bodyCustom.gender = resultEnumOk.check
          ? req.body?.gender
          : characterById.gender;
      }
      // buscar por id el character y actualizar con el custombody
    try {
      await Character.findByIdAndUpdate(id, bodyCustom);

      //miramos si se a actulizado la imagen, si esto es asi - borrar la antigua

      if (req.file?.path) {
        // si la inmagen atigua es diferete a la que ponemos por defecto la borramos
        oldImage !== 
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
        deleteImgCloudinary(oldImage);
      }

      // testear en teimpo real qie todo se hay realizado correctamente
      
      // buscar el elemento character ya actualizado mediante el id
      const characterByIdUpdate = await Character.findById(id); 
      
      // cogemos el req.body y le sacamos las CLAVES para saber que elementos se han actualizado
      const elementUpdate = object.keys(req.body);

      // creamos un objeto vacio donde vamos a meter el test
      let test = {};

      // recorremos las claves del body y rellenamos el objeto test

      elementUpdate.forEach((item) => {
        // comprobar el valor de las claves del body con los valores del character actualizad
        if (req.body[item] === characterByIdUpdate[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }
      });

      // comprobar que la imagen del character actualizado coincide con la imagen nueva que hay
      // si coinciden creamos una copia de tes con una nueva clave que sera file en true y si jno estara en false
      // usamos el spread oprator para hacer la copia
      if (catchImage) {
        characterByIdUpdate.image === catchImage
        ? (test = { ...test, file: true})
        : (test = { ...test, file: false})

      }

      //comprobar que ninguna clave es false, si hayu alguna lanzamos 409 
      // clave no actulizada correctamente, so estan bien lanzamos 200

      // creamos contador
      let acc = 0

      for (const key in test) {
        // si esto es false añadimos al contador
        test[key] === fasle && acc++;
      }

      // si acc es mayor a 0 lanzamos el error porque hay alguna clave en false y eso es por que no se a atualizado
      if (acc > 0) {
        return res.status(409).json({ dataTest: test, update: false});
      } else {
        return res
        .status(200)
        .json({ dataTest: test, update: characterByIdUpdate});
      }
    } catch (error) {
      return res.status(409).json({
        error: "No se ha podidio actualizar",
        message: error.message,
      });
    }
      } else {
        // si el chacarter con es id no existe
        return res.status(404).json("El character no ha sido encontrado");
      }
    } catch (error) {
      return res
      .status(409)
      .json({ error: "No se ha podidio actualizar", message: error.message });
    }
  }