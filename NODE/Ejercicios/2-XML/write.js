
const fs = require("fs");

const { XMLBuilder } = require("fast-xml-parser");


const alumnos = [
    {
      name: "Rodri",
      age: "43",
      job: "dev",
    },
    {
      name: "Laura",
      age: "37",
      job: "libreria",
    },
    {
      name: "Antonio",
      age: "33",
      job: "dev",
    },
  ];

  let options = {
    ignoreAtributes: false,
    format: true,
    arrayNodeName: "alumno"
};

const builder = new XMLBuilder(options);

console.log("Builder", builder);

const alumnnosROOT = {
    alumnosRootElement: {
      alunos: [
        {
          name: "Rodri",
          age: "43",
          job: "dev",
        },
        {
          name: "Laura",
          age: "37",
          job: "libreria",
        },
        {
          name: "Antonio",
          age: "33",
          job: "dev",
        },
      ],
    },
  };

  
let opciones = {
    ignoreAtributes: false,
    format: true,
};

const builderRoot = new XMLBuilder(opciones);

let output = builderRoot.build(alumnnosROOT);

console.log("OUTPUTROOT", output);

fs.writeFile("rootXML.xml", output, () => 
    console.log("Archivos esrcitos Correctamente")
);

