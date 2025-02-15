import React from 'react'

export default function Card() {
    return (

        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='container w-100'>

                    <select className='m-2 h-100 bg-success rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>

                    <select className='m-2 h-100 bg-success rounded'>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>

                    <div className='d-inline h-100 fs-5'>Total price</div>

                </div>
            </div>
        </div>
    )
}
