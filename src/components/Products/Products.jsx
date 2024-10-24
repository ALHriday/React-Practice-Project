import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";


const Products = ({handleAddToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data)
        )
    },[])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <h1 className="col-span-2 md:col-span-3 text-left text-4xl font-bold">All Products lists:</h1>
            {products.map(product =>
                <Product product = {product} key={product.id} handleAddToCart = {handleAddToCart}>{product.title}</Product>)}
        </div>
    );
};

Products.propTypes = {
    handleAddToCart : PropTypes.func
}

export default Products;