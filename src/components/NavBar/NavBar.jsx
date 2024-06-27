import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '/profile/:username', name: 'Profile' }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000
                ${open ? 'top-16' : '-top-60'}
                px-6 bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;