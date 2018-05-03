
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      // { path: '', component: () => import('pages/index') },
      { path: '', component: () => import('pages/route') },
      { path: 'gear', component: () => import('pages/gear') },
      { path: 'gallery', component: () => import('pages/gallery') },
      { path: 'video', component: () => import('pages/video') },
      { path: 'log', component: () => import('pages/log') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
