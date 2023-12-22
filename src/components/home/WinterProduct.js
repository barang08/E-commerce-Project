import { data } from "../../data";

function WinterProduct() {
    return (
        <div className="flex mx-12 mb-12 pl-5">
            <div>
                <img src={data.universe[0].img} />
            </div>
            <div className="flex flex-col text-start py-40 pl-20 gap-6">
                <h6 className="font-bold text-gray-500">SUMMER 2020</h6>
                <h2 className="font-bold text-6xl">Part of the Neural Universe</h2>
                <p className=" text-gray-500 text-xl">
                    We know how large objects will act, but things on a small scale.
                </p>
                <div className="flex gap-2 text-sm font-bold">
                    <button className="bg-green-500 w-1/6 text-white rounded-sm h-11">
                        BUY NOW
                    </button>
                    <button className="border-green-500 border-solid w-1/6 border-2 text-green-500 rounded-sm">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WinterProduct;