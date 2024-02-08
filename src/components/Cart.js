import React from 'react';

function Cart({ cartItems, removeFromCart, total, handleBuy }) {

    return (

        <div className="cart">
            <div className="name">CART</div>

            <div className="listCart">
                {Object.keys(cartItems).map(itemId => (
                    <div key={itemId} className="item">

                        <div className="img"><img src={cartItems[itemId].product.image} alt="" /></div>
                        <div className="content">
                            <div className="title">{cartItems[itemId].product.title}</div>
                            <div className="des">{cartItems[itemId].product.description}</div>
                            <div className="price">
                                {cartItems[itemId].product.num}{(cartItems[itemId].product.price * cartItems[itemId].quantity).toFixed(2)}
                            </div>

                            <input type="number" className="count" value={cartItems[itemId].quantity} min="1" onChange={(event) => {
                                const newQuantity = parseInt(event.target.value, 10);

                                if (newQuantity > 0) {
                                    cartItems[itemId].quantity = newQuantity;
                                } else {
                                    delete cartItems[itemId];
                                }
                                    removeFromCart(itemId);
                }} />

              <button className="remove" onClick={() => removeFromCart(itemId)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <div className="total-tile">Total</div>
        <div className="total-price">${total.toFixed(2)}</div>
      </div>

      <button className="btn-buy" onClick={handleBuy}>Buy Now</button>
    </div>
  );
}

export default Cart;
