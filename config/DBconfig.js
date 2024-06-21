//This file has DB configuration parameters

import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//define Data Base parameters

const dbConnect = new Sequelize(process.env.db_credentials, {
    createdAt: false,
    updatedAt: false,
    define:{
        timestamp: false,
        createdAt: false,
        updatedAt: false
    },
    pol:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false

});

export default dbConnect;
