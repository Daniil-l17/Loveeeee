import React from 'react'

const Variant = ({el,trueClick,index}) => {
  return (
    <>
    <li key={index} onClick={() => trueClick(index)}>{el.title}</li>
<img src={el.img} alt="" /> 
</>

  )
}

export default Variant