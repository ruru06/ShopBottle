import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div className="list">

        {products.map(product => (

            <div key={product.id} className="item">
                <div className="img"><img src={product.image} alt="" /></div>

                <div className="content">
                    <div className="title">{product.title}</div>
                    <div className="des">{product.description}</div>
                    <div className="price">{product.num}{product.price}</div>
                    <input type="number" className="count" defaultValue="1" min="1" />

                    <button className="add" onClick={() => addToCart(product.id, 1)}>
                        Add to Cart
                    </button>

                </div>
            </div>
        ))}

        </div>
    );
}

export default ProductList;
