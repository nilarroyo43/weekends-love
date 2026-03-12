import { defineCollection, z } from 'astro:content';

const findesCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    id: z.string(),
    fecha: z.string(),
    titulo: z.string(),
    imagens_splash: z.string().url(),
    // Imágenes para cuando se abre el regalo
    img_circulo_actividades: z.string().default('/img/default-act.jpg'),
    img_circulo_comida: z.string().default('/img/default-comida.jpg'),
    img_circulo_peliculas: z.string().default('/img/default-peli.jpg'),
    
    actividades: z.array(
      z.object({
        tipo: z.string(),
        desc: z.string(),
        imagen: z.string().optional(), // Nueva imagen para la story
      })
    ).default([]),
    comida: z.array(
      z.object({
        momento: z.string(),
        lugar: z.string(),
        ubicacion: z.string().url(),
        imagen: z.string().optional(), // Nueva imagen para la story
      })
    ).default([]),
    peliculas: z.array(
      z.object({
        momento: z.string(),
        pelicula: z.string(),
        url_cartel: z.string().url(),
      })
    ).default([]),
  })
});

export const collections = { 'findes': findesCollection };