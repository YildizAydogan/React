import React from 'react'
import {Route , Routes} from "react-router-dom";






const CustomRoutes = () => {
  return (


    <Routes>
            <Route path="/">
          {/* ADMIN ROUTES */ }



            {/* USER ROUTES*/ }
            <Route index element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />



     </Route>







    </Routes>
  )
}

export default CustomRoutes