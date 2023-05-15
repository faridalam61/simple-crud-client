import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add user</Link></li>
                    <li><Link to='/update'>Update</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header