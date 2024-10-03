import {
    createRootRoute,
    Link,
    Outlet,
    useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const Route = createRootRoute({
    component: () => {
        const [scope, animate] = useAnimate()
        const { status } = useRouterState()
        useEffect(() => {
            if (status === 'pending') {
                console.log('pending')
                animate('div', { x: 100, y: 100 })
            } else if (status === 'idle') {
                console.log('idle')
                animate('div', { x: 0, y: 0 })
            }
        }, [status])
        return (
            <>
                <div
                    ref={scope}
                    className={
                        'w-full h-full fixed flex justify-center items-center -z-10'
                    }
                >
                    <div className={'h-20 w-20 bg-blue-400 z-20'} />
                </div>
                <div className="p-2 flex gap-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' '}
                    <Link to={'/about'} className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
                <hr />
                <Outlet />
                <TanStackRouterDevtools />
            </>
        )
    },
})
