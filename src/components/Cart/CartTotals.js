import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 mx-auto text-capitalize text-end">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => clearCart()}
                            >
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-muted">Subtotal: </span>
                            <strong>${cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-muted">Tax: </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-muted">Total: </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
