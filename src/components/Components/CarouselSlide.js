import React from 'react'

function CarouselSlide(props) {
  const { id, slideTitle, slideDescription, slideBg } = props
  return (

    <div className='slideWrap' style={{ backgroundImage: 'url(${slideBg})' }}>
      <div className='textWrap'>
        <h2> {slideTitle} </h2>
        <p> {slideDescription} </p>
      </div>
    </div>

  )
}

export default CarouselSlide