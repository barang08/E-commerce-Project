import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Title() {
    return (
        <div className="py-6 flex  justify-around items-center">

            <h2 className="font-mont text-2xl font-bold text-[#252B42] justify-start">Shop</h2>
            <div className="flex items-center justify-end">
                <h4 className="font-mont text-sm text-[#252B42] font-bold">Home</h4>
                <FontAwesomeIcon icon={faAngleRight} size="sm" className="p-2 text-gray-500" />
                <h4 className="font-mont text-sm text-[#BDBDBD] font-bold">Shop</h4>
            </div>

        </div>


    )
}

export default Title;

/* <div className="flex gap-8 justify-around my-4 items-center">
           


        </div>*/