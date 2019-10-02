export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9472924c9a19a5ddcd3b47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio3-studio-8rjefxpf',
                  apiId: '7db5b152-02f2-4e71-a4fc-8a617c839e6b'
                },
                {
                  buildHookId: '5d947292b87499e40fcf99da',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio3-web-d1vnswcs',
                  apiId: '2118b990-16ee-4c1b-adeb-89c92d5578f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-portfolio3',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio3-web-d1vnswcs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
