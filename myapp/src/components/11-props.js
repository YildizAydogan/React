import React from 'react'

const Props = (props) => {
    console.log(props);
  return (
    <div>Merhaba benim adim {props.ad}, {props.yas} yasindayim.</div>
  )
}

export default Props