import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const{_id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${_id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    
    return (
        <div>
            <h2>This is booking:{_id}</h2>
            <p>Name : {product.name}</p>
        </div>
    );
};

export default Purchase;