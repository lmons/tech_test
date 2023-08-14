import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import Image from 'next/image'
import Card from 'components/Card'
import SideMenu from 'components/SideMenu'
import SideMenuContent from 'components/SideMenuContent'
import Discussions from 'components/Discussions';
import Pricing from 'components/Pricing';

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4 break-after-column">
            <h1 className="text-8xl my-4 break-after-column">where remote teams share knowledge and make decisions</h1>
            <div className="flex flex-row space-x-4 justify-center">
                <div className="flex flex-row border-solid border-2 border-zinc-500 rounded-full m-1.5 justify-center items-center">
                    <div className="bg-transparent  ">
                        <input type="text" name="name" id="name" placeholder="Enter your email" className="bg-transparent place-content-center px-2 outline-0" />
                    </div>
                    <div className="rounded-full bg-blue-500 text-[#ffffff]" >
                        <button type="submit" className="m-1.5" onClick={()=>alert('start for free')}>Start for free</button>
                    </div>
                </div>
                <div className="border-solid border-2 border-zinc-500 rounded-full m-1.5 justify-center items-center" >
                    <button type="submit" className="m-1.5" onClick={()=>alert('book a demo')}>book a demo</button>
                </div>
            </div>
            <Image
                src="/images/teams.webp"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Card/>
            <div className="flex flex-row justify-center justify-items-center space-x-40">
                <div className="basics-1/4">
                    <SideMenu/>
                </div>

                <div className="basics-1/2">
                    <SideMenuContent/>
                </div>

            </div>
            <div>
                <Discussions/>
            </div>
            <div>
                <Pricing/>
            </div>


        </div>
      </div>
    </div>
  );
};

export default HomePage;
