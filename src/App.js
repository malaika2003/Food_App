
// import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Nav from "./components/Nav";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Featured/>
      {/* <Delivery/> */}
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div> 
  );
}

export default App;
