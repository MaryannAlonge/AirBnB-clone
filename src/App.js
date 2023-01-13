import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style.css"
import image from "./images/image-12.png"

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Hero/> */}
     <Card
     img={image}
     rating="5.0"
     reviewCount="(6)"
     country="USA"
     title="Life Lessons with Katie Zaferes"
     price="136"
     />
    </div>
  );
}

export default App;
