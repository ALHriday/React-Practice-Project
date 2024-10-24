
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products/Products'

function App() {
  const [handlebtn, setHandlebtn] = useState([]);
  const [productprice, setProductprice] = useState([]);
  const [productimg, setProductimg] = useState([]);
  const [eachprice, setEachprice] = useState(0);


  console.log(handlebtn);
  

  const handleAddToCart = product =>{
    
    const {title, price, productImg} = product;

    const newProductImg = [...productimg, productImg];
    const newPrice = [...productprice, price];

    const totalPrice = price + eachprice;
    setEachprice(totalPrice);

    const newProduct = [...handlebtn, `${title} ${price}$`];
     
    setProductimg(newProductImg);
    setProductprice(newPrice);
    setHandlebtn(newProduct);
    
  }

  return (
    <div className='p-4 bg-slate-300'>

     <Header></Header>

     <div className='flex justify-center items-center gap-4 text-center'>
        <Products handleAddToCart = {handleAddToCart}></Products>
     </div>

     <div className='flex flex-col gap-2 text-lg font-bold px-4 py-8 bg-teal-400 rounded-xl border-2'>
      <h1 className='text-4xl rounded-xl bg-orange-400 p-4'>Total-Price: {eachprice.toFixed(2)}$</h1>

       {handlebtn.map((title, idx) => <p className='' key={idx}>{title}</p>)}
     </div>

    </div>

  )
}

export default App
