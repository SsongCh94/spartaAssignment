import React from 'react'

function Inputs({styleName, inValue, onChangeFunc, inPlaceholder}) {
  return (
    <input 
      className={styleName} 
      value={inValue}
      onChange={onChangeFunc}
      placeholder={inPlaceholder}
      required
       />
  )
}

export default Inputs