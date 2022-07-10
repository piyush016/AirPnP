import './style.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {

  const cards = data.map( (item) =>{
    return(
      <Card 
      // 3 ways to pass props
        key={item.id}
        item={item}
        // {...item}: Spread technique
        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
