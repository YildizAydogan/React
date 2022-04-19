import React from 'react'

const JsxLoop = () => {

const dizi= ["Ali", "Veli", "Ayse","Fatma"];


  return (
      <>
    <div>JsxLoop</div>
    <ul>
        {dizi.forEach(item=><li>{item}</li>)}
    </ul>



 </> 
 );
};

export default JsxLoop