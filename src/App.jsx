import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './components/product'
import Cart from './components/cart'

function App() {
  const [products, setProducts] = useState([])
  const fetchProduct = async function() {
    const data = await(await fetch('https://62e09871fa8ed271c4851d98.mockapi.io/products')).json()
    setProducts(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div>
      <Product product={products}/>
      <Cart/>
    </div>
  )
}

export default App
