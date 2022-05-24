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
                  buildHookId: '628cea6b8ad16b25a6b67ae0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-32g6v5fz',
                  apiId: '276f85f3-aa3b-4279-a4b9-21e35ff9cef7'
                },
                {
                  buildHookId: '628cea6be3747b257ea6db63',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4ur9z596',
                  apiId: '7530aab9-15aa-43c8-a8a2-c2c49cb42832'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/musfinc3/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4ur9z596.netlify.app', category: 'apps'}
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
