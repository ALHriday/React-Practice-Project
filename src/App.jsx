
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products/Products'

function App() {
  const [handlebtn, setHandlebtn] = useState([]);
  const [productprice, setProductprice] = useState([]);
  const [productimg, setProductimg] = useState([]);
  const [eachprice, setEachprice] = useState(0);


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

  const clearTask = () =>{
      const handlebtn = [];
      const eachprice = 0;
      setHandlebtn(handlebtn);
      setEachprice(eachprice);

  }

  return (
    <div className=' bg-slate-300 mx-auto max-w-7xl'>

      <Header></Header>

      <div className='grid grid-cols-4'>
          <h1 className="col-span-4 text-left text-3xl font-bold py-2 px-4">All Products lists:</h1>
          <div className='col-span-2 md:col-span-3 flex justify-center items-center gap-4 text-center'>
            <Products handleAddToCart = {handleAddToCart}></Products>
          </div>

          <div className='col-span-2 md:col-span-1 flex flex-col gap-2 text-lg font-bold px-4 py-8 bg-teal-400 rounded-xl border-2 mt-4'>
              <h1 className='text-2xl rounded-xl bg-orange-400 p-4'>Total-Price: {eachprice.toFixed(2)}$</h1>
              <div className='p-4'>
                {handlebtn.map((title, idx) => <p className='border-b-2 py-2' key={idx}>{title}</p>)}
              </div>
              <div className='w-full flex justify-end'>
                <button className='btn text-right px-4 py-2 bg-red-400 text-slate-200 rounded-lg' onClick={clearTask}>Clear All</button>
              </div>
          </div>
      </div>
     

    </div>

  )
}

export default App
