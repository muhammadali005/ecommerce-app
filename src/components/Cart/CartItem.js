import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <tr>
            <td>
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className="img-fluid"
                    alt="product"
                />
            </td>
            <td>{title}</td>
            <td>${price}</td>
            <td>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        className="btn btn-outline-dark mx-1"
                        onClick={() => decrement(id)}
                    >
                        -
                    </button>
                    <span className="mx-2">{count}</span>
                    <button
                        className="btn btn-outline-dark mx-1"
                        onClick={() => increment(id)}
                    >
                        +
                    </button>
                </div>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => removeItem(id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </td>
            <td>
                <strong>${total}</strong>
            </td>
        </tr>
    );
}