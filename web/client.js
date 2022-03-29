const sanityClient = require('@sanity/client')

export const client = sanityClient({
  //apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  projectId: "fdtg1t1l",
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
})