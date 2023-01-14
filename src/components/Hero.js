import React from 'react'

export default function Hero() {
  return (
    <section className='hero'>
      <img src={require("../images/Group 77.png")} alt="" className='hero-photo' />
      <h1 id='heading'>Online Experiences</h1>
      <p id='para'>Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}
