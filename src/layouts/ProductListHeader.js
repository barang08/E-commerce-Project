import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"


function ProductListHeader() {
    return (

        <div >

            <div className="bg-[#252B42] pt-2 pr-40 pb-1 pl-36 flex items-center  justify-between" >
                <div>
                    <div className="flex p-2.5 gap-1.5 items-center">
                        <div className="text-white "><FontAwesomeIcon icon={faPhone} /></div>
                        <h6 className="text-white font-mont text-sm font-bold leading-6">(225) 555-0118</h6>

                        <div className="flex p-2.5 gap-1.5 items-center">
                            <div className="text-white"><FontAwesomeIcon icon={faEnvelope} />  </div>
                            <h6 className="text-white text-white font-mont text-sm font-bold leading-6">michelle.rivera@example.com</h6>
                        </div>
                    </div>
                </div>
                <h6 className="text-white text-white font-mont text-sm font-bold leading-6">Follow Us and get a chance to win 80% off</h6>

                <div className="flex gap-2.5 items-start text-white">
                    <h6 className="text-white font-mont text-sm font-bold leading-6">Follow Us:</h6>
                    <div ><FontAwesomeIcon icon={faInstagram} /></div>
                    <div ><FontAwesomeIcon icon={faYoutube} /></div>
                    <div ><FontAwesomeIcon icon={faFacebook} /></div>
                    <div ><FontAwesomeIcon icon={faTwitter} /></div>
                </div>
            </div>


            <div class="flex items-center pl-9 pr-4 gap-10 justify-end">
                <div class="py-3 pr-20">
                    <h3 class="font-mont text-2xl font-bold">Bandage</h3>
                </div>

                <div className="flex justify-end gap-96">
                    <div class="flex items-center">
                        <nav>
                            <ul class="flex items-center gap-4 font-mont text-sm font-bold text-[#737373] ">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Pages</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center text-[#23A6F0] ">

                        <div className="flex items-center p-4 gap-1.5">
                            <FontAwesomeIcon icon={faUser} />
                            <div>Login/register</div>
                        </div>

                        <div className="flex items-center p-4 gap-1.5"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>

                        <div className=" flex items-center p-4 gap-1.5 ">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className="text-xs">1</div>
                        </div>

                        <div className=" flex items-center p-4 gap-1.5 ">
                            <FontAwesomeIcon icon={faHeart} />
                            <div className="text-xs"> 1</div>
                        </div>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default ProductListHeader;