import React from "react";
import { data } from "../../data";

function EditorsPick() {
    return (
        <div className="flex flex-col w-3/4 text-center m-auto py-20 items-center">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-mont text-2xl font-bold text-slate-800">EDITOR'S PICK</h2>
                <p className="font-mont text-xs font-normal text-[#737373]">Problems trying to resolve the conflict between</p>
            </div>

            <div className="flex gap-8 h-[500px]">
                <div className="w-[50%] relative">
                    <img src={data.editors[0].img} className="w-full h-full object-cover" />
                    <button className="absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold py-3 bg-white ">{data.editors[0].name} </button>
                </div>
                <div className="w-[50%] relative">
                    <img src={data.editors[1].img} className="w-full h-full object-cover" />
                    <button className="absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold py-3 bg-white ">{data.editors[1].name} </button>
                </div>
                <div className="w-[50%] flex flex-col gap-[2%]">
                    <div className="w-full h-[49%] relative">
                        <img
                            src={data.editors[2].img}
                            className="w-full h-full object-cover"
                        />
                        <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold py-3 bg-white">
                            {data.editors[2].name}
                        </button>
                    </div>
                    <div className="w-full h-[49%] relative">
                        <img
                            src={data.editors[3].img}
                            className="w-full h-full object-cover"
                        />
                        <button className=" absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold py-3 bg-white">
                            {data.editors[3].name}
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default EditorsPick;