
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products/Products'

function App() {
  const [handlebtn, setHandlebtn] = useState([]);
  const [productprice, setProductprice] = useState([]);

  const handleAddToCart = product =>{
    // console.log(product.title);
    const {title, price} = product;
    const newProduct = [...handlebtn, `${title} = ${price}$`];
    const newPrice = [...productprice, price];
    
    setHandlebtn(newProduct);
    setProductprice(newPrice);
    console.log('ok');
    
  }

  return (
    <div className='p-4 bg-slate-300'>
     <Header></Header>
     <div className='flex justify-center items-center gap-4 text-center'>
        <Products handleAddToCart = {handleAddToCart}></Products>
     </div>
     <div className='flex flex-col gap-2 text-lg text-white font-bold px-4 py-8 bg-teal-400 rounded-xl border-2'>
        {handlebtn.map((title, idx) => <p className='bg-teal-700 p-2 rounded-md' key={idx}>Title: {title}</p>)}
     </div>
    </div>
  )
}

export default App
