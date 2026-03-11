// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const findesCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    id: z.string(),
    fecha: z.string(),
    titulo: z.string(),
    imagens_splash: z.string().url(), // Validamos que sea un enlace real
    actividades: z.array(
      z.object({
        tipo: z.string(),
        desc: z.string(),
      })
    ).default([]), // Ponemos default por si un finde no hay actividades
    comida: z.array(
      z.object({
        momento: z.string(),
        lugar: z.string(),
        ubicacion: z.string().url(),
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

export const collections = {
  'findes': findesCollection,
};