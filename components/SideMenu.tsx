// components/SideMenu.tsx
import React from "react";
import Link from "next/link"
const SideMenu = () => {
    return (
        <div>
            <ul className="flex flex-col space-y-4 ">
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Wiki</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Projects</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Processes</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Onboarding</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Meetings</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">Team updates</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">1:1s</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">User research</Link>
                </li>
                <li className="hover:bg-white focus-within:bg-white justify-center justify-items-center">
                    <Link href="/">More-></Link>
                </li>
            </ul>

        </div>

    );
};
export default SideMenu;