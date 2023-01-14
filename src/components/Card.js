import React from 'react'

export default function Card(props) {
  let badgeText
  if(props.openSpots === 0) {
    badgeText= "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
     {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg}alt="" className='card-img'/>
      <div className="card-stats">
        <img src={require("../images/star.png")} alt="" className='card-star'/>
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) &bull; </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-price'> <span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}
