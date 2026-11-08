import React from 'react'

const AsideBar = () => {
    return (
        <div className='AsideBar'>
            <div className='logoName'>
                <h1>Threadly.</h1>
            </div>

            <div>
                <a href="#">Discover</a>
                <a href="#">Wishlist</a>
                <a href="#">Cart</a>
            </div>

            <div className='userProfile'>
                    <img src="#"  />
                    <h1>Himanshu</h1>
            </div>
        </div>
    )
}

export default AsideBar