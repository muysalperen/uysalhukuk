import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { services } from './services'

export default defineConfig({
  name: 'default',
  title: 'uysalhukuk-cms',
  projectId: 'jnf3wwzm',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [services],
  },
})

