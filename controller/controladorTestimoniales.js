/*This file has all methods which control Databases and Views
for Testimoniales form data*/
import { Testimonial } from "../model/Testimoniales.js";


export const testimonial = async (req, res) =>
{
    //read form content

    const {nombre, email, mensaje} = req.body;

    //validate form fields

    let mensajes = [];

    if(nombre.trim() === "")
        mensajes.push({mensaje:"El campo Nombre esta vacio!"});
    
    if(email.trim() === "")
        mensajes.push({mensaje:"El campo email esta vacio!"});

    if(mensaje.trim() === "")
        mensajes.push({mensaje:"El campo Testimonial esta vacio!"});
    
    //show error messajes or send data to the DB
    
    if(mensajes.length > 0)
    {
        try{

            //get testimonials data from DB
            const data_testimonials = await Testimonial.findAll();

            res.render("../views/testimoniales.pug",
            {
                pagina:"Testimoniales",
                mensajes,
                nombre,
                email,
                mensaje,
                data_testimonials,
    
            });
        }
        catch(e)
        {
            console.log(e);
        }
        
    }
    else
    {
        //store form data into DB

        try{
            await Testimonial.create({
            nombre,
            email,
            mensaje,
            });

            //redirect to get method testimoniales
            res.redirect("/testimoniales");
        }
        catch(e)
        {
            console.log(e);
        }
    }
}

