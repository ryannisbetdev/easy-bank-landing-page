import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../Assets/Branding/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="Logo">
                    <img src ={Logo} alt = "easybank logo"/>
                </div>

                <nav>
                    <ul>
                       <li><a>  Home </a> </li> 
                       <li><a>  About </a> </li> 
                       <li><a>  Blog </a> </li> 
                       <li><a>  Careers </a> </li> 
                       <li><a>  Contact </a> </li> 
                    </ul>
                </nav>

                <button className = "RequestInvite">
                    Request Invite
                </button>
            </header>
        )
    }
}
