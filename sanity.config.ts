' 'use client'

/**
 * Configuration pour le Sanity Studio monté sur `/src/app/studio/[[...tool]]/page.tsx`
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// On pointe vers les fichiers qui sont DANS le dossier src
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Utilise tes schémas personnalisés (Projets et Vidéos)
  schema,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})