import { feeds } from '@/pages/feeds'
import { stories } from '@/pages/stories'
import { auth } from '@/pages/auth'
import { profile } from '@/pages/profile'

export default [
    {
        path: '/',
        name: 'feeds',
        component: feeds
    },
    {
        path: '/stories',
        name: 'stories',
        component: stories,
        props: true
    },
    {
        path: '/auth',
        name: 'auth',
        component: auth
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    }

]
