import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { data } from "../../data";

function Slider() {
    return (
        <div className="flex justify-center">
            <Carousel style={{ width: '100%', height: '716px' }}>
                <Carousel.Item>
                    <img
                        className="w-full h-full object-cover"
                        src={data.slider[0].img}
                        alt={data.slider[0].title}
                    />
                    <Carousel.Caption className=" flex flex-col gap-4 py-12 width-w-[500px] absolute  text-start">
                        <div className="max-w-[600px] flex flex-col gap-4">
                            <h5 className="font-mont text-base font-bold text-[#FFF]">
                                {data.slider[0].title}
                            </h5>
                            <h1 className="font-mont text-6xl font-bold leading-[5rem]">
                                {data.slider[0].baslik}
                            </h1>
                            <h4 className="font-mont text-xl font-normal max-w-[375px]">
                                {data.slider[0].description}
                            </h4>
                            <button className="  font-mont text-xl py-2 w-[180px] bg-[#2DC071] text-center ">{data.slider[0].button}</button>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-full h-full object-cover"
                        src={data.slider[0].img}
                        alt={data.slider[0].title}
                    />
                    <Carousel.Caption className=" flex flex-col gap-4 py-12 width-w-[500px] absolute  text-start">
                        <div className="max-w-[600px] flex flex-col gap-4">
                            <h5 className="font-mont text-base font-bold text-[#FFF]">
                                {data.slider[0].title}
                            </h5>
                            <h1 className="font-mont text-6xl font-bold leading-[5rem]">
                                {data.slider[0].baslik}
                            </h1>
                            <h4 className="font-mont text-xl font-normal max-w-[375px]">
                                {data.slider[0].description}
                            </h4>
                            <button className="  font-mont text-xl py-2 w-[180px] bg-[#2DC071] text-center ">{data.slider[0].button}</button>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;