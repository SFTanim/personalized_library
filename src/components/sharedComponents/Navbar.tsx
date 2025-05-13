import { Link, NavLink } from "react-router-dom";
import { Plus, HomeIcon, Users, Library, Book } from "lucide-react";
import { User, Settings as SettingsIcon } from "lucide-react";


const navLinks = [
    { name: "Home", path: "/", icon: <HomeIcon className="h-4 w-4" /> },
    { name: "My Books", path: "/myBookLibrary", icon: <Book className="h-4 w-4" /> },
    { name: "Community", path: "/community", icon: <Users className="h-4 w-4" /> },
    { name: "Add Book", path: "/addBook", icon: <Plus className="h-4 w-4" /> },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200 dark:border-amber-800">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-amber-800 flex items-center justify-center text-white">
                <span className="font-bold">M</span>
              </div>
              <h1 className="text-lg font-bold text-amber-800">MyReadShelf</h1>
            </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-300 ${isActive ? "font-semibold" : ""
                                }`
                            }
                        >
                            {link.icon && link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">


                    {/* Mobile Nav */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive ? "text-orange-500 font-semibold" : ""
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*  Avatar Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="User Avatar"
                                />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 space-y-2"
                        >
                            <li>
                                <Link
                                    to="/addBook"
                                    className="button-style-01"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add Book
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="button-style-01"
                                >
                                    <User className="h-4 w-4" />
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/settings"
                                    className="button-style-01"
                                >
                                    <SettingsIcon className="h-4 w-4" />
                                    Settings
                                </Link>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>
        </header>
    );
};

export default Navbar;
