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
import Ejercicio11 from './ejercicios/ejercicio11/pages/Ejercicio11'
import Ejercicio12 from './ejercicios/ejercicio12/pages/Ejercicio12'
import Ejercicio13 from './ejercicios/ejercicio13/pages/Ejercicio13'
import Ejercicio14 from './ejercicios/ejercicio14/pages/Ejercicio14'
import Ejercicio15 from './ejercicios/ejercicio15/pages/Ejercicio15'
import Ejercicio16 from './ejercicios/ejercicio16/pages/Ejercicio16'
import Ejercicio17 from './ejercicios/ejercicio17/pages/Ejercicio17'
import Ejercicio18 from './ejercicios/ejercicio18/pages/Ejercicio18'
import Ejercicio19 from './ejercicios/ejercicio19/pages/Ejercicio19'
import Ejercicio20 from './ejercicios/ejercicio20/pages/Ejercicio20'
import Ejercicio21 from './ejercicios/ejercicio21/pages/Ejercicio21'
import Ejercicio22 from './ejercicios/ejercicio22/pages/Ejercicio22'
import Ejercicio25 from './ejercicios/ejercicio25/pages/Ejercicio25'
import './index.css'
import './carrito.css'
import './tares.css'
import './Photo.css'

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
              <Route path='/Ejercicio11' element={<Ejercicio11/>}/>
              <Route path='/Ejercicio12' element={<Ejercicio12/>}/>
              <Route path='/Ejercicio13' element={<Ejercicio13/>}/>
              <Route path='/Ejercicio14' element={<Ejercicio14/>}/>
              <Route path='/Ejercicio15' element={<Ejercicio15/>}/>
              <Route path='/Ejercicio16' element={<Ejercicio16/>}/>
              <Route path='/Ejercicio17' element={<Ejercicio17/>}/>
              <Route path='/Ejercicio18' element={<Ejercicio18/>}/>
              <Route path='/Ejercicio19' element={<Ejercicio19/>}/>
              <Route path='/Ejercicio20' element={<Ejercicio20/>}/>
              <Route path='/Ejercicio21' element={<Ejercicio21/>}/>
              <Route path='/Ejercicio22' element={<Ejercicio22/>}/>
              <Route path='/Ejercicio25' element={<Ejercicio25/>}/>
            </Routes>
           </div>
 )
}

function Navigation(){
    return <nav >
        <ul>
        <li>
       <Link to="/Ejercicio1">Ejercicio-01</Link>
        </li>
        <li>
       <Link to="/Ejercicio2">Ejercicio-02</Link>
        </li>
        <li>
       <Link to="/Ejercicio3">Ejercicio-03</Link>
        </li>
        <li>
       <Link to="/Ejercicio4">Ejercicio-04</Link>
        </li>
        <li>
       <Link to="/Ejercicio5">Ejercicio-05</Link>
        </li>
        <li>
       <Link to="/Ejercicio6">Ejercicio-06</Link>
        </li>
        <li>
       <Link to="/Ejercicio7">Ejercicio-07</Link>
        </li>
        <li>
       <Link to="/Ejercicio8">Ejercicio-08</Link>
        </li>
        <li>
       <Link to="/Ejercicio9">Ejercicio-09</Link>
        </li>
        <li>
       <Link to="/Ejercicio10">Ejercicio-10</Link> 
        </li>
        <li>
       <Link to="/Ejercicio11">Ejercicio-11</Link>
        </li>
        <li>
       <Link to="/Ejercicio12">Ejercicio12</Link>
        </li>
        <li>
       <Link to="/Ejercicio13">Ejercicio-13</Link>
        </li>
        <li>
       <Link to="/Ejercicio14">Ejercicio-14</Link>
        </li>
        <li>
       <Link to="/Ejercicio15">Ejercicio-15</Link>
        </li>
        <li>
       <Link to="/Ejercicio16">Ejercicio-16</Link>
        </li>
        <li>
       <Link to="/Ejercicio17">Ejercicio-17</Link>
        </li>
        <li>
       <Link to="/Ejercicio18">Ejercicio-18</Link>
        </li> 
        <li>
       <Link to="/Ejercicio19">Ejercicio-19</Link>
        </li>
        <li>
       <Link to="/Ejercicio20">Ejercicio-20</Link>
        </li>
        <li>
       <Link to="/Ejercicio21">Ejercicio-21</Link>
        </li>
        <li>
       <Link to="/Ejercicio22">Ejercicio-22</Link>
        </li>
        <li>
       <Link to="/Ejercicio25">Ejercicio-25</Link>
        </li>
        
        </ul>
        </nav>
        
}
export default App;