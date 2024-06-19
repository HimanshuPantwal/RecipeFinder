import './App.css';
import Header from './Components/Header';
import Meal from './Components/Meal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipe from './Components/Recipe';
import Contact from './Components/Contact';
function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" Component={Meal}/>
      <Route path='/:recipeId' Component={Recipe} />
      <Route path='/contact' Component={Contact}/>
    </Routes>
  </Router>
}

    export default App
