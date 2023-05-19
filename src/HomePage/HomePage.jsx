import React from "react";
import Nav from "../layout/Nav/Nav";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import RecommendedItems from "../components/RecommendedItems/RecommendedItems";
import CarouselAdverstisment from "../components/CarouselAdverstisment/CarouselAdverstisment";

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="main">
                <CarouselAdverstisment />
                <RecommendedItems title={ 'Recommended items for you' } />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;