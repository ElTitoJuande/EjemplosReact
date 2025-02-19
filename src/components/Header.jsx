import React from 'react'
import logo from '../assets/react.svg'
import Nav from './Nav'

const Header = () => {
    return (
        <>

            <header className='bg-amber-200 px-[20px] py-[40px] text-black flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" className='h-[80px]' />
                </div>
                <Nav/>
            </header>

        </>
    )
}

export default Header