import React from 'react'

export default function Product(props) {
    const data = props.data;
    return (
        <div className="products">
            {
                data.map((val) => {
                    return (
                        <div className='product container'>
                        <div className="img">
                            <img src={val.img} />
                        </div>
                        
                            <h4> {val.name} </h4>
                        </div>
                    )
                })
            }
        </div>

    )
}

