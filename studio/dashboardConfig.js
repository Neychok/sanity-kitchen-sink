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
                  buildHookId: '600ee4cf0b64237599dca220',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-93374gws',
                  apiId: '52932e04-74bf-43cc-b781-ea8b48d38076'
                },
                {
                  buildHookId: '600ee4cf5e57f100405b2f75',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hdgi2fbh',
                  apiId: '81c47226-ed07-4cdd-b030-5e075cd6e2ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Neychok/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hdgi2fbh.netlify.app', category: 'apps'}
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
