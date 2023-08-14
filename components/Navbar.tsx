// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex flex-row">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">My Website</a>
            </div>
            <div className="flex-2 flex-row">
                <ul className="flex flex-row space-x-4 ">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="border-solid border-2 border-indigo-600 rounded-full px-2">
                        <Link href="/contact">Request a demo</Link>
                    </li>
                    <li  className="rounded-full bg-blue-500 text-[#ffffff] px-2">
                            <Link href="/about">Start for free</Link>

                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;