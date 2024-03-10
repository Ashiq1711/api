import React from 'react'
import Navbartop from './components/Navbartop'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductApi from './components/ProductApi';


function Home() {
  return (
    <div>
        <Navbartop/>
 <ProductApi/>
    </div>
  )
}

export default Home