// components/Discussions.tsx
import React from "react";
import Image from "next/image";

const Discussions = () => {
    return (
        <div className="navbar bg-base-100 flex flex-col">
            <div className="flex flex-row">
                <div className="basis-1/4">
                    <h1 className="text-5xl my-6 break-after-column">Say goodbye to endless meetings and Slack threads with Discussions</h1>
                    <h4 className="text-1xl my-6 break-after-column">Rich discussions is the central place for decisions to be taken thoughtfully and keep your mind clear</h4>
                    <div className="rounded-full bg-blue-500 text-[#ffffff] m-1.5 justify-center items-center" >
                        <button type="submit" className="m-1.5" onClick={()=>alert('Get started')}>Get started</button>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        src="/images/responsive.png"
                        width={1000}
                        height={1000}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className="flex-row  justify-center items-center">
                <div className="border-t-2 border-black-500 flex-3"></div>
                <div>lkfjqlsfkjqslkjfsldkjfdslkjfslkdjfsldkjfdslkjfsdlkfjdslkfjsdlk</div>
                <div className="flex flex-row  justify-center items-center">
                    <div className="border-t-2 border-black-500 basis-1/2">

                    </div>
                    <Image
                        src="/images/responsive.png"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    <div className="border-t-2 border-black-500 basis-1/6">

                    </div>
                </div>
            </div>
            <div className="flex-6 flex-col basis-1/4 justify-center items-center m-60">
                <h1 className="text-5xl my-6 break-after-column">
                    Comunicate where work happens
                    Document, discuss, decide, repeat.
                </h1>
                <Image
                    src="/images/responsive.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <h4 className="text-1xl my-6 break-after-column">Now you can open important topics with all the right people, assign deadlines, come to clear decisions that everyone sees,all in context of your doc. Your teamwork is all tied together to move forward    </h4>
                <div className="rounded-full bg-blue-500 text-[#ffffff] m-1.5 justify-center items-center" >
                    <button type="submit" className="m-1.5" onClick={()=>alert('Get started')}>Get started</button>
                </div>
            </div>
        </div>
    );
};
export default Discussions;