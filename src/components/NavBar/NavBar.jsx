import { useState } from "react";
import Link from "./Link/Link";
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {
                    open ? <AiOutlineClose></AiOutlineClose> : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex justify-center md:static duration-1000 absolute  my-4 ${open ? 'top-3' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;