//This file has all colubms that we request from DB
import Sequelize from "sequelize";
import dbConnect from "../config/DBconfig.js";

export const Viaje = dbConnect.define("viajes", {
    titulo:{
        type: Sequelize.STRING
    },
    
    precio:{
        type: Sequelize.STRING
    },

    fecha_ida:{
        type: Sequelize.DATE
    },

    fecha_vuelta:{
        type: Sequelize.DATE
    },

    imagen:{
        type: Sequelize.STRING
    },

    descripcion:{
        type: Sequelize.STRING
    },

    disponibles:{
        type: Sequelize.STRING
    },

    slug:{
        type: Sequelize.STRING
    }

});
