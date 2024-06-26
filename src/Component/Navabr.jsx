import { Link, NavLink } from "react-router-dom";

const Navabr = () => {
    const list = <>
        <li className="text-xl"><NavLink to="/"><a>Home</a></NavLink></li>
        <li className="text-xl"><NavLink to="/shop"><a>Shop</a></NavLink></li>
        <li className="text-xl"><NavLink to="/mycart"><a>My Cart</a></NavLink></li>
        <li className="text-xl"><a>Categories</a></li>
        <li className="text-xl"><a>Context</a></li>
    </>
    return (
        <div className="mt-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl">Exchange’s</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link><NavLink to="/login"><a className="btn bg-[#FF4240] text-white text-xl font-bold">Login</a></NavLink></Link>
                </div>
            </div>
        </div>
    );
};

export default Navabr;