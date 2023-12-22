import React from "react";
import Header from "../layouts/Header";
import Slider from "../components/home/Slider";
import EditorsPick from "../components/home/EditorsPick";
import BestSeller from "../components/home/BestSeller";
import Slider2 from "../components/home/Slider2";
import WinterProduct from "../components/home/WinterProduct";
import Featured from "../components/home/Featured";
import Footer from "../layouts/Footer";




function HomePage() {
    return (

        <div >

            <Header />
            <Slider />
            <EditorsPick />
            <BestSeller />
            <Slider2 />
            <WinterProduct />
            <Featured />
            <Footer />






        </div>
    )
}

export default HomePage;