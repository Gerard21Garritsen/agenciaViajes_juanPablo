//This file define Testimoniales' fields and its connection
import { Sequelize } from "sequelize";
import dbConnect from "../config/DBconfig.js";

export const Testimonial = dbConnect.define("testimoniales",
{
    nombre:{
        type:Sequelize.STRING
    },
    
    email:{
        type:Sequelize.STRING
    },

    mensaje:{
        type:Sequelize.STRING
    }
});
