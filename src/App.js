
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
// import Card from './Components/card';
import ItemCard from './Components/Itemcard';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
 
   <Header/>
   <Home/>
 <ItemCard/>
 <Footer/>
    </div>
  );
}

export default App;
