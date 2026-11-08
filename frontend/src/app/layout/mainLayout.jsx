import React from 'react'
import { Outlet } from 'react-router'
import AsideBar from '../componets/AsideBar'
import '../style/Globel.css'

const mainLayout = () => {
    return (
        <div className='MianLayout'>
            <AsideBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default mainLayout