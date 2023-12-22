import React from "react";
import { data } from "../../data";

function CardContent() {
    return (
        <div className="flex gap-4 justify-center">
            {
                data.clothesContainer.map((value, index) => (
                    <div key={index} className="relative flex justify-center items-center">
                        <img src={value.img} className="object-cover" />
                        <div className="absolute text-white">
                            <h4>{value.title} </h4>
                            <p>{value.description} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default CardContent;