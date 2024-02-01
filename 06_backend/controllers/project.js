'use strict'

// PRIMERO: IMPORTAR MODELOS
var Project = require('../models/project')

// SEGUNDO: SE CREA CONTROLADOR CON SUS METODOS
var controller = {
    home: function(req, res){
        return res.status(200).send({
            message:"Soy la home"
        })
    },

    test: function(req, res){
        return res.status(200).send({
            message:"Soy el metodo o accion test del controlador de project"
        })
    },

    // CREAMOS EL CRUD

    // CREATE
    saveProject: async function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        try{
            await project.save();
            return res.status(200).send({project});
        } catch(err) {
            return res.status(500).send({
                message: 'Error al guardar'
            });
        }

        /* Deprecated
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({
                message: 'Error al guardar'
            });

            if(!projectStored) return res.status(404).send({
                message: 'No ha sido posible guardar el projecto'
            });

            return res.status(200).send({project: projectStored});
        });


        return res.status(200).send({
            project: project,
            message:'Metodo save-project'
        })
        */
    }

    // READ
    

    // UPDATE


    // DELETE
}

module.exports = controller;