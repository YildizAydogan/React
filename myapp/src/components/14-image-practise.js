import React from 'react'



const ImagePractise = () => {
  const data = [
     "image1.jpg",
     "image2.jpg",
     "image3.jpg",
     "image4.jpg",
     "image5.jpg",
     "image6.jpg"
            ];
  
    return (
   <>
   {
    data.map(image=> <img src={require(`../assets/img/${image}`)}/>)
   }
   
   
   </>
  )
}

export default ImagePractise