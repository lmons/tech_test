// components/SideMenuContent.tsx
import React from "react";
import Image from 'next/image'
const SideMenuContent = () => {
    return (
        <div className="flex flex-col  justify-items-center">
            <Image
                src="/images/responsive.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h1  className="text-5xl my-6 break-after-column">All you documents in one place</h1>
            <h4  className="text-1xl my-1 break-after-column text-gray-400">Project, Knowledge base, process, bring all your work to life in docs</h4>
            <div className="flex flex-row space-x-6">
                <div className="rounded-full bg-blue-500 text-[#ffffff] m-1.5 justify-center items-center" >
                    <button type="submit" className="m-1.5" onClick={()=>alert('Get started')}>Get started</button>
                </div>
                <div className="border-solid border-2 border-zinc-500 rounded-full m-1.5 justify-center items-center" >
                    <button type="submit" className="m-1.5" onClick={()=>alert('Download the app')}>Download the app</button>
                </div>

            </div>
        </div>

    );
};
export default SideMenuContent;