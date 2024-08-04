import React from 'react'
import { protectedRoutes, publickRoutes } from './all_routes';
import { Routes, Route } from "react-router-dom"
import MainLayout from '../layouts/MainLayout';

import AuthProtected from './AuthProtected'

const index = () => {
    return (
        <>

            <Routes>
                <Route>
                    {publickRoutes.map((val, idx) => {
                        return <Route path={val.path} key={idx} element={val.component} />
                    })}
                </Route>
                <Route>
                    {protectedRoutes.map((val, idx) => {
                        return <Route path={val.path} key={idx} element={<AuthProtected>
                            <MainLayout>
                                {val.component}
                            </MainLayout>

                        </AuthProtected>} />
                    })}
                </Route>
            </Routes>

        </>
    )
}

export default index
