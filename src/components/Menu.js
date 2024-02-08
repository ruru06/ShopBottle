
import React from 'react';

function Menu() {
    return (
        <div className="menu">
            <div className="logo">Bottle<span>Shop</span></div>
            <ul>
                <li className="active"><i className="fa-solid fa-house"></i>Home</li>
                <li><i className="fa-regular fa-user"></i>User</li>
                <li><i className="fa-solid fa-heart"></i>Favourite</li>
            </ul>

            <ul>
                <li><i className="fa-brands fa-tiktok"></i>Tiktok</li>
                <li><i className="fa-brands fa-facebook"></i>facebook</li>
                <li><i className="fa-brands fa-instagram"></i>Instagram</li>
            </ul>
        </div>
    );
}

export default Menu;
