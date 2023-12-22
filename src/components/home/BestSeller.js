import React from "react";
import { data } from "../../data";

function BestSeller() {
    return (
        <div className="flex justify-center">
            <div className="w-5/6 gap-12 flex-col inline-flex mt-14 ">
                <div className="text-center flex flex-col gap-2 text-center">
                    <h2 className="text-neutral-500 text-xl font-normal leading-7 tracking-tight">
                        Featured Products
                    </h2>
                    <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">
                        BESTSELLER PRODUCTS
                    </h2>
                    <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">
                        Problems trying to resolve the conflict between
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-7">
                    {data.bestseller.map((value, i) => (
                        <div key={i} className="flex flex-col text-center w-[20%]">
                            <div className="h-4/5 ">
                                <img
                                    src={value.img}
                                    className="max-w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex-col gap-2">
                                <h5 className="text-slate-800 text-base font-bold ">
                                    {value.title}
                                </h5>
                                <h5 className="text-neutral-400 text-sm font-bold ">
                                    {value.desc}
                                </h5>
                                <div className="flex gap-1 justify-center">
                                    <h5 className="text-stone-300 text-base font-bold ">
                                        {value.price}
                                    </h5>
                                    <h5 className="text-teal-700 text-base font-bold">
                                        {value.disc}
                                    </h5>
                                </div>
                                <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex">
                                    {value.colors.map((color, i) => (
                                        <div key={i} className={color} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BestSeller;