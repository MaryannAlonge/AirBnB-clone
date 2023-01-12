import React from 'react'

export default function Card() {
  return (
    <div className='card'>
      <img src={require("../images/image-12.png")} alt="" className='card-img'/>
      <div className="card-stats">
        <img src={require("../images/star.png")} alt="" className='card-star'/>
        <span>5.0</span>
        <span className='gray'>(6) &bull; </span>
        <span className='gray'>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p> <span className='bold'>From $136</span> / person</p>
    </div>
  )
}
