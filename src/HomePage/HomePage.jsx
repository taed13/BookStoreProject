import React from "react";
import Nav from "../layout/Nav/Nav";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ListBook from "../components/ListBook/ListBook";
import CarouselAdverstisment from "../components/CarouselAdverstisment/CarouselAdverstisment";
import NewFeed from "../components/NewFeed/NewFeed";
import CardList from "../components/CardList/CardList";
import CardBenefit from "../components/CardBenefit/CardBenefit";
import MoreToExplore from "../components/MoreToExplore/MoreToExplore";

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="main text-left">
                <CarouselAdverstisment />
                <ListBook title={ 'Sách đề xuất cho bạn' } />
                <NewFeed />
                <CardList />
                <ListBook title={ 'Sách xem gần đây' } />
                <CardBenefit />
                <ListBook title={ 'Sách thịnh hành' } />
                <ListBook title={ 'Sách xem gần đây' } />
                <MoreToExplore />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;