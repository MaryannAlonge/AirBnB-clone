import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.img}alt="" className='card-img'/>
      <div className="card-stats">
        <img src={require("../images/star.png")} alt="" className='card-star'/>
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) &bull; </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-price'> <span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}
