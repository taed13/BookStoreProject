import React, { useEffect, useState } from "react";
import axios from "../api/axiosClient";
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
  const [recommendedBooks, setRecommendedBooks] = useState(
    []
  );
  const [recentlyViewedBooks, setRecentlyViewedBooks] =
    useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    // Gọi API để lấy sách đề xuất cho bạn
    axios
      .get("/product")
      .then((response) => {
        setRecommendedBooks(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching recommended books:",
          error
        );
      });

    // Gọi API để lấy sách xem gần đây
    axios
      .get("/users")
      .then((response) => {
        setRecentlyViewedBooks(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching recently viewed books:",
          error
        );
      });

    // Gọi API để lấy sách thịnh hành
    axios
      .get("/posts")
      .then((response) => {
        setPopularBooks(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching popular books:",
          error
        );
      });

    // Gọi API để lấy sách đang thịnh hành
    axios
      .get("/posts")
      .then((response) => {
        setTrendingBooks(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching trending books:",
          error
        );
      });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <div className='main text-left'>
        <CarouselAdverstisment />
        <ListBook
          title={"Sách đề xuất cho bạn"}
          bookList={recommendedBooks}
        />
        <NewFeed />
        <CardList />
        <ListBook
          title={"Sách xem gần đây"}
          bookList={recentlyViewedBooks}
        />
        <CardBenefit />
        <ListBook
          title={"Sách thịnh hành"}
          bookList={popularBooks}
        />
        <ListBook
          title={"Sách đang thịnh hành"}
          bookList={trendingBooks}
        />
        <MoreToExplore />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
