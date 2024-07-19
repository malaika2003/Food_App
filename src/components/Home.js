import React from 'react'
import Featured from "./Featured";
import Nav from "./Nav";
import TopPicks from "./TopPicks";
import Meal from "./Meal";
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav/>
      <Featured/>
      {/* <Delivery/> */}
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
