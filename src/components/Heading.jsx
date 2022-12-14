import React from 'react'

const Heading = ({ title, className }) => {
  return (
    <p
      className={`text-lg font-semibold capitalize text-headingColor relative  transition-all ease-in-out duration-100 before:absolute before:rounded-lg before:countent  before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tl before:w-1/2 from-orange-300 to-orange-500 ${className}`}>
      {title}
    </p>
  )
}

export default Heading
