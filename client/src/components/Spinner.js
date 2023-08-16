import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => { setCount((prev) => --prev) }, 1000)
        count === 0 && navigate('/login');
        return () => clearInterval(interval);
    }, [count, navigate]);
    return (
        <>
            <div className="d-flex flex-col justify-content-center align-item-center" style={{ height: '100vh', marginTop: '300px' }}>
                <h1 className='text-center'>Redirecting to Login in {count} second...</h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default Spinner