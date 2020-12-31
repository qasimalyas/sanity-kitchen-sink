export default {
  widgets: [
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
                  buildHookId: '5fee065c49113dde4e4b7120',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vz2g4u39',
                  apiId: '0e494580-3fb2-421e-bdd7-c9d93fee4396'
                },
                {
                  buildHookId: '5fee065c11e18bf8525aac56',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1s41w26n',
                  apiId: '0fca2c40-e034-43a3-88ca-1d33e22ef91b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qasimalyas/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1s41w26n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
