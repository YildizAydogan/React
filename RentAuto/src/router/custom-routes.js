import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehiclesPage from '../pages/users/VehiclesPage';
import HomePage  from '../pages/users/HomePage'
import AboutPage  from '../pages/users/AboutPage'
import AuthPage  from '../pages/users/AuthPage'
import ContactPage  from '../pages/users/ContactPage'
import VehicleDetailsPage  from '../pages/users/VehicleDetailsPage'



const CustomRoutes = () => {
  return (

    <BrowserRouter>
    <Routes>
     <Route path="/">
         <Route index element={<HomePage/>} />
         <Route path="about" element={<AboutPage/>} />
         <Route path="auth" element={<AuthPage/>} />
         <Route path="contact" element={<ContactPage/>} />

          <Route path="vehicles">
             <Route index element={<VehiclesPage/>} />
             <Route path=":vehicleId" element={<VehicleDetailsPage/>}/>
          </Route>


         






    </Route>
    </Routes>  
    </BrowserRouter>


  )
}

export default CustomRoutes