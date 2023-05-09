import Ejercicio1 from './ejercicios/ejercicio1/pages/Ejercicio1'
import Ejercicio2 from './ejercicios/ejercicio2/pages/Ejercicio2'
import Ejercicio3 from './ejercicios/ejercicio3/pages/Ejercicio3'
import Ejercicio4 from './ejercicios/ejercicio4/pages/Ejercicio4'
import Ejercicio5 from './ejercicios/ejercicio5/pages/Ejercicio5'
import Ejercicio6 from './ejercicios/ejercicio6/pages/Ejercicio6'
import Ejercicio7 from './ejercicios/ejercicio7/pages/Ejercicio7'
import Ejercicio8 from './ejercicios/ejercicio8/pages/Ejercicio8'
import Ejercicio9 from './ejercicios/ejercicio9/pages/Ejercicio9'
import Ejercicio10 from './ejercicios/ejercicio10/pages/Ejercicio10'
import './index.css'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Slider from "react-slick";

const App = () => {
    return (
        
            <div>
           
            <Navigation/>
            <Routes>
              <Route path='/' element={<h1>TALENT-LOGY</h1> }/> 
              <Route path='/Ejercicio1' element={<Ejercicio1/>}/> 
              <Route path='/Ejercicio2' element={<Ejercicio2/>}/> 
              <Route path='/Ejercicio3' element={<Ejercicio3/>}/> 
              <Route path='/Ejercicio4' element={<Ejercicio4/>}/>
              <Route path='/Ejercicio5' element={<Ejercicio5/>}/>  
              <Route path='/Ejercicio6' element={<Ejercicio6/>}/>
              <Route path='/Ejercicio7' element={<Ejercicio7/>}/>
              <Route path='/Ejercicio8' element={<Ejercicio8/>}/>
              <Route path='/Ejercicio9' element={<Ejercicio9/>}/>
              <Route path='/Ejercicio10' element={<Ejercicio10/>}/>
            </Routes>
           </div>
 )
}

function Navigation(){
    return <nav>
        <ul>
        <li>
       <Link to="/Ejercicio1">Ejercicio1</Link>
        </li>
        <li>
       <Link to="/Ejercicio2">Ejercicio2</Link>
        </li>
        <li>
       <Link to="/Ejercicio3">Ejercicio3</Link>
        </li>
        <li>
       <Link to="/Ejercicio4">Ejercicio4</Link>
        </li>
        <li>
       <Link to="/Ejercicio5">Ejercicio5</Link>
        </li>
        <li>
       <Link to="/Ejercicio6">Ejercicio6</Link>
        </li>
        <li>
       <Link to="/Ejercicio7">Ejercicio7</Link>
        </li>
        <li>
       <Link to="/Ejercicio8">Ejercicio8</Link>
        </li>
        <li>
       <Link to="/Ejercicio9">Ejercicio9</Link>
        </li>
        <li>
       <Link to="/Ejercicio10">Ejercicio10</Link>
        </li>
        </ul>

        </nav>
}
export default App;