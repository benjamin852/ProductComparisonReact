import React from 'react';

import Product from '../Product/Product';

const ProductList = props => {
    return (
        <div className="row mt-3">
            {props.products.map(product => {
                return <Product key={product.id} product={product} compare={props.compare}/>
            })}
        </div>
    )
}

export default ProductList