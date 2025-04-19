import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'jnf3wwzm', // kendi projectId'n (değiştirme)
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
