import { defineCollection, z } from 'astro:content';

const findesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    fecha: z.string(),
    titulo: z.string(),
    imagens_splash: z.string(), 
    img_circulo_actividades: z.string().default('/img/default-act.jpg'),
    img_circulo_comida: z.string().default('/img/default-comida.jpg'),
    img_circulo_peliculas: z.string().default('/img/default-peli.jpg'),
    
    actividades: z.array(
      z.object({
        tipo: z.string(),
        desc: z.string(),
        detalle: z.string().optional(),
        imagen: z.string().optional(),
      })
    ).default([]),
    
    comida: z.array(
      z.object({
        momento: z.string(),
        lugar: z.string(),
        detalle: z.string().optional(), 
        ubicacion: z.string().url(),
        imagen: z.string().optional(),
      })
    ).default([]),
    
    peliculas: z.array(
      z.object({
        momento: z.string(),
        pelicula: z.string(),
        detalle: z.string().optional(),
        url_cartel: z.string(),
      })
    ).default([]),
  })
});

export const collections = {
  'findes': findesCollection,
};