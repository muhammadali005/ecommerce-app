import React from 'react';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

export default function CartList({ value }) {
    const { cart } = value;
    console.log(value, cart);

    return (
        <div className="container-fluid mt-5">
            <h2 className="text-center mb-4">
                Your <span style={{ color: 'blue' }}>Cart</span>
            </h2>
            <div className="row">
            <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-8">
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="thead-light">
                                <tr>
                                    <th>Products</th>
                                    <th>Name of Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <CartItem key={item.id} item={item} value={value} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <CartTotals value={value} />
                </div>
                <div className="col-12 col-lg-1"></div>
            </div>
        </div>
    );
}
