import { useState } from 'react'

import { RiShoppingCart2Line } from "react-icons/ri"
import { BsPerson } from "react-icons/bs"
import { BiHeart } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx";

import logo from "../assets/HDS Logo.png"

import "./navbar.css"

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className="navLeft">
                    {/* <h1>HDS</h1> */}
                    <img src={logo} alt="" />
                </div>
                <div className='navRight'>
                    <button className='menu-icons'><BiHeart /></button>
                    <button className='menu-icons'><RiShoppingCart2Line /></button>
                    <button className='menu-icons'><BsPerson /></button>
                    <button className='hamburger' onClick={() => {
                        if (menu === true) {
                            setMenu(false)
                        } else {
                            setMenu(true);
                        }
                    }}> {menu ? <RxCross2 /> : < GiHamburgerMenu />} </button>
                </div>
            </div>
            {menu &&
                <div className='ham-menu'>
                    <ul>
                        <li>Favorites</li>
                        <li>Cart</li>
                        <li>Account</li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar