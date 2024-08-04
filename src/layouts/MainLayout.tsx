import React from 'react'
import Header from './Header'
import SideBAr from './SideBAr'

const MainLayout = (props) => {
    return (
        <>
            <Header />
            <div className="container-fluid d-flex">
                <SideBAr />

                <main>
                    {props.children}
                </main>
            </div>

        </>
    )
}

export default MainLayout
