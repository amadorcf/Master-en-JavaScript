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
    },

    // READ
    getProject: async function (req, res) {
        var projectId = req.params.id;
      
        // Si no existe proyecto...
        if (projectId == null) return res.status(404).send({message: "El proyecto no existe"});
      
        // Si existe, devolverlo
        try {
          const project = await Project.findById(projectId);
          if (!project) return res.status(404).send({message: "No se ha encontrado el proyecto"});
          return res.status(200).send({project});
        } catch (err) {
          return res.status(500).send({message: "Error al devolver los datos"});
        }
    },

    getProjects: function(req, res){

        Project.find({}).sort('-year')
            .then((projects)=>{
                if(!projects) return res.status(404).send({message: "No hay projectos que mostrar..."});
    
                return res.status(200).send({projects});
            })
            .catch((err)=>{
                if(err) return res.status(500).send({message: "Error al devolver los datos"});
            })
    },

    // UPDATE
    updateProject: function(req, res){
        var projectId = req.params.id;

        var update_params = req.body;

        // Si no existe proyecto...
        if (projectId == null) return res.status(404).send({message: "El proyecto no existe"});

        Project.findByIdAndUpdate(projectId, update_params, {new:true})
        .then((projectUpdated)=>{
            return res.status(200).send({
                project: projectUpdated
            })
        })
        .catch(() => {
            return res.status(404).send({message: "Imposible actualizar. No se ha encontrado el proyecto"});
        })
    }

    // DELETE


}

module.exports = controller;