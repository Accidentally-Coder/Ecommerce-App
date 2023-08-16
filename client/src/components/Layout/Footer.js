import React from 'react';
import { LuCopyright } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-light p-3'>
            <h5 className='text-center' >
                <Link to="/"><span className='hover-effect'>Home </span></Link>|
                <Link to="/about"><span className='hover-effect'> About </span></Link>|
                <Link to="/policy"><span className='hover-effect'> Policy </span></Link>|
                <Link to="/team"><span className='hover-effect'> Team </span></Link>|
                <Link to="/contact"><span className='hover-effect'> Contact </span></Link>|
            </h5>
            <h6 className='text-center'>
                <LuCopyright />2023 Ecommerce | All rights reserved
            </h6>

            <style>
                {`
                .hover-effect:hover{
                    color: white;
                }
            `}
            </style>
        </div>
    )
}

export default Footer