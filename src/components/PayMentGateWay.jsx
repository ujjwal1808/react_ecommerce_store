import React from 'react'
import { Link } from 'react-router-dom'

const PayMentGateWay = () => {
    return (
        <>

            <div className="m-12 h-fit">
                <div className="text-sm mb-4">
                    <Link to="/" className='opacity-50 hover:opacity-100'>Home</Link><span>/</span><a href="">Payment Gateway</a>
                </div>
                <h1 className="text-6xl text-center">Payment Gateway Here</h1>
            </div>

        </>
    )
}

export default PayMentGateWay