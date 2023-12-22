import React from "react";
import ProductListHeader from "../layouts/ProductListHeader";
import Title from "../components/productList/Title";
import CardContent from "../components/productList/CardContent";
import Details from "../components/productList/Details";
import Brands from "../components/productList/Brands";
import Footer from "../layouts/Footer"
import Paginat from "../components/productList/Pagination";




function ProductListPage() {
    return (
        <div>
            <ProductListHeader />
            <Title />
            <CardContent />
            <Details />

            <Brands />
            <Footer />
        </div>
    )
}

export default ProductListPage;