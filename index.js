//This is the main express file
import express from "express";
import router from "./routes/index.js";
import dbConnect from "./config/DBconfig.js";

//begin express
const app = express();

//define port we'll work
const port = process.env.PORT || 4000;

//listen a port
app.listen(port, () => console.log(`El servidor esta operando en el puerto ${port}!`));

//Connect with DB
dbConnect.authenticate()
.then(() => console.log("DB Connection successfully!"))
.catch(res => console.log(res));

//startup pug engine
app.set("view engine", "pug");

//set up css and images folder
app.use(express.static("public"));

//enable body to read form content
app.use(express.urlencoded({extended:true}));

//define a variable for years in the footer
app.use((req, res, next) =>
    {
        const year = new Date();
    
        res.locals.current_year = year.getFullYear();
        res.locals.title_web = "Agencia de Viajes";
    
        next();
    })

//indicate router
app.use("/", router);
