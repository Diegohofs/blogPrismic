import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'casafac'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZMXBHSGhRQUFDWUFjbzdP.77-977-9QhQo77-977-9GWrvv73vv70WEu-_ve-_vQF377-9dmDvv73vv73vv70t77-9f--_ve-_ve-_ve-_vVo1',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  /*routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],*/
})