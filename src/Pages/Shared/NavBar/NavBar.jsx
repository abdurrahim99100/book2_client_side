import { Link } from "react-router-dom";

const NavBar = () => {
    const user = false;
    const navItems = < >
        <li>
            <Link>home</Link>
        </li>
        <li>
            <Link>colleges</Link>
        </li>
        <li>
            <Link>admission</Link>
        </li>
        <li>
            <Link>my-college</Link>
        </li>
        {
            user ?
                <>
                    <li>
                        <Link>logout</Link>
                    </li>
                </>
                :
                <>
                    <li>
                        <Link>login</Link>
                    </li>
                </>
        }
    </>
    return (
        <div className="bg-base-300">
            <div className="navbar justify-between max-w-screen-2xl mx-auto">
                <div className="navbar-start w-6/12 lg:w-[250px]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="text-2xl text-orange-600 font-semibold">book2</Link>
                </div>
                <div className="">
                    <input type="text" placeholder="Search" className="input input-bordered w-[200px] lg:w-[320px]" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase font-semibold">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;