import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'uii6pzvm',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skc7IARgO8sfElFs7rQmfQZn2LqfWNvLyGv8LHIyVcUhjabPUdhNQrYOPKUXsPZ6qsigGMa006bK91Y1IMqOkTILAG9s4LOiqjF1r42Snb1ZKO9QnMflCC6cFefJ44A88saT94gGGLPQAyfvY3hj6tyST1uczSUibsMnUfDRxghNEFL5IvaG',
  useCdn: false,
})
