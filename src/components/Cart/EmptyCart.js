import React from 'react';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-muted">
                        Your cart is currently empty
                    </h1>
                </div>
            </div>
        </div>
    );
}
