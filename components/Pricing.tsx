// components/Pricing.tsx
import React from "react";
import Image from "next/image";
const Pricing = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex flex-row">
              <div>
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
              <div className="flex flex-row">
                  <div className="border-solid border-2 border-zinc-500 rounded-lg flex-row ">
                      <h1>Free</h1>
                      <h4>plan</h4>
                      <div className="border-t-2 border-black-500"></div>
                      <div className="flex flex-row">
                          <h2>$</h2><h1>0</h1><h4>/month</h4>
                      </div>
                      <h4>Up to 50 docs</h4>

                  </div>
                  <div className="bg-white rounded-lg flex-row ">
                      <h1>Standard</h1>
                      <h4>plan</h4>
                      <div className="border-t-2 border-black-500"></div>
                      <div className="flex flex-row">
                          <h2>$</h2><h1>6</h1><h2>/67</h2><h4>/month</h4>
                      </div>
                      <h4>per user</h4>

                  </div>

              </div>

            </div>
            <div>

                <Image
                    src="/images/responsive.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <div className="flex-row absolute">
                    <h1>lksqdjlksqjdqlksjdlskjfsdljfdslkfjsldkjfsldkjfsdlkfj</h1>
                    <div className="rounded-full bg-blue-500 text-[#ffffff] m-1.5 justify-center items-center" >
                        <button type="submit" className="m-1.5" onClick={()=>alert('Get started')}>Get started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Pricing;