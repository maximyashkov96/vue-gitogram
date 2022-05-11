import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '@/api'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const AuthRoute = to.name === 'auth'

    try {
        await api.user.getUser()
        next(AuthRoute ? { name: 'feeds' } : null)
    } catch (e) {
        if (e.response.status === 401) {
            next(AuthRoute ? null : { name: 'auth' })
        }
    }
})

export default router
