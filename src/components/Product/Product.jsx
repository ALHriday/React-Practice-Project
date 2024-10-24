import PropTypes from 'prop-types';
const Product = ({product, handleAddToCart}) => {
    const {title,description,price,productImg} = product;

    return (
        <div className='flex flex-col justify-between gap-2 border-2 rounded-xl bg-teal-400 p-4'>
            <h1 className='text-2xl font-bold'>Title: {title}</h1>
            <div className='w-40'>
                <img src={productImg} alt="" />
            </div>
            <h1 className='text-xl font-bold'>Price: {price}$</h1>
            <h1>Description: {description}</h1>
            <button onClick={()=> handleAddToCart(product)} className='btn rounded-xl px-4 py-2 bg-teal-800 text-white'>Add To Cart</button>
        </div>
    );
};

Product.propTypes = {
    product : PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func
}

export default Product;