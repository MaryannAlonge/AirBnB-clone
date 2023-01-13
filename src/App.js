import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style.css"
import image from "./images/image-12.png"
import cardData from "./components/data"

function App() {
  const cardElements  = cardData.map(card=> {
    return (
    <Card 
    img={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    country={card.location}
    title={card.title}
    price={card.price}
    />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <section className="cards-list">
     {cardElements}
     </section>
     
     {/* <Hero/> */}
     
    </div>
  );
}

export default App;


// <Card
//      img={image}
//      rating="5.0"
//      reviewCount="(6)"
//      country="USA"
//      title="Life Lessons with Katie Zaferes"
//      price="136"
//      />