import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { motion } from 'framer-motion'

export const Route = createRootRoute({
    component: () => (
        <>
            <div
                className={
                    'w-full h-full fixed flex justify-center items-center'
                }
            >
                <motion.div
                    className={'w-20 h-20 bg-blue-500'}
                    animate={{
                        scale: [1, 2, 40, 40, 1, 0],
                        rotate: [0, 0, 180, 180, 0, 0],
                        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                        type: 'spring',
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [1, 1, 1, 1, 1],
                    }}
                />
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
    ),
    beforeLoad: async () => {
        // wait 2 second
        console.log('beforeLoad')
    },
    onEnter: () => {
        console.log('onEnter')
    },
})
