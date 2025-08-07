// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error loading product:", err));
    }, [id]);

    if (!product) return <div className="container my-5"><p>Loading product details...</p></div>;

    return (
        <div className="container my-2">
            <button className="btn btn-secondary mb-3" onClick={() => navigate('/products')}>
                &larr; Back to Products
            </button>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 ">
                    <div className="card shadow-sm">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top p-4"
                            style={{ objectFit: 'contain', height: '200px' }}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-primary">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text fw-bold text-danger fs-5">₹{product.price}</p>
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
