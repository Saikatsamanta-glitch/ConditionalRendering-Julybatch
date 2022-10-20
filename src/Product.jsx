import React from 'react'

export default function Product(props) {
    const data = props.data;
    return (
        <div className="products">
            {
                data.map((val) => {
                    return (
                        <div className='product container'>
                            <img src={val.img} />
                            <h2> {val.name} </h2>
                        </div>
                    )
                })
            }

        </div>

    )
}

