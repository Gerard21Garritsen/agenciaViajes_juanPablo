//This file has the rouitng web pages
import express from "express";
import { start, us, travels, testimonials, viajeDetalle} from "../controller/controladorPaginas.js";
import { testimonial } from "../controller/controladorTestimoniales.js";

const router = express.Router();

//the follow are the different routes to the pages
router.get("/", start);

router.get("/nosotros", us);

router.get("/viajes", travels);

router.get("/viajes/:detalle", viajeDetalle);

router.get("/testimoniales", testimonials);

router.post("/testimoniales", testimonial);

export default router;
