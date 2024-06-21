//This is the controller which manage Database request and send it to the views
import { Viaje } from "../model/Viajes.js";
import { Testimonial } from "../model/Testimoniales.js";

export const start = async (req, res) =>
{
    try{
        
        //get data from viajes table
        const datos_db = await Promise.all([Viaje.findAll({limit: 3}), Testimonial.findAll({limit: 3})]);

        const viajes = datos_db[0];
        const data_testimonials = datos_db[1];

        res.render("../views/inicio.pug",
        {
            pagina:"Inicio",
            clase:"home",
            viajes,
            data_testimonials,
    
        });
    }
    catch(e)
    {
        console.log(e);
    }
    
}


export const us = (req, res) =>
{
    res.render("../views/nosotros.pug",
    {
        pagina:"Nosotros"
    });

}


export const travels = async (req, res) =>
{
    //get DataBase data
    const viajes = await Viaje.findAll();

    res.render("../views/viajes.pug",
    {
        pagina:"Proximos viajes",
        viajes,
    });

}


export const viajeDetalle = async (req, res) =>
{
    //get data from link
    const { detalle } = req.params;

    //request data from DB
    try{
        const viaje = await Viaje.findOne({where: {slug: detalle}});

        //send data to views
        res.render("../views/detalle.pug",
        {
            pagina:"Detalle viaje",
            viaje,

        });
    }
    catch(e)
    {
        console.log(e);
    }
    
}


export const testimonials = async (req, res) =>
{
    try{

        //get testimonials from DB
        const data_testimonials = await Testimonial.findAll();

        res.render("../views/testimoniales.pug",
        {
            pagina:"Testimoniales",
            data_testimonials,
    
        });
    }
    catch(e)
    {
        console.log(e);
    }

}

