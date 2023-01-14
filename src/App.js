import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style.css"
import cardData from "./components/data"

function App() {
  const cardElements  = cardData.map(card=> {
    return (
    <Card 
    key={card.id}
    {...card}
    />
    )
  })
  return (
    <div>
     <Navbar/>
     <Hero/>
     <section className="cards-list">
     {cardElements}
     </section>
    
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