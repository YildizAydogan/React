const Jsx = () => {
    const isAdmin=true;
  return (
    <div>
        {isAdmin ? (
         <ul>
            <li> Create User </li>
            <li> Update User </li>
            <li> Delete User </li>
        </ul>
      )  : (<><h2>User Menü</h2>
        <ul>
            <li> Create Review </li>
            <li> Update Review </li>
            <li> Delete Review </li>
        </ul>
        </>
       ) }
    {/* <h2>Admin Menü</h2>
        <ul>
            <li> Create User </li>
            <li> Update User </li>
            <li> Delete User </li>
        </ul>
    <h2>User Menü</h2>
        <ul>
            <li> Create Review </li>
            <li> Update Review </li>
            <li> Delete Review </li>
        </ul> */}
    </div>
  )
}

export default Jsx
//export {test1,test2}
//const ların başınada export const yazırılır
//import {test1,test2} app.js de yazıyoruz






/* 
Celil hocadan gelenler

import React from "react";

const Jsx = () => {
  const isAdmin = true;
  console.log("hey");
  return (
    <div>
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </>
      ) : (
        <>
          {" "}
          <h2>User Menu</h2>
          <ul>
            <li>Create Review</li> <li>Update Review</li>
          </ul>{" "}
        </>
      )}

      {/*  
        Bu bir Comment
  }
    </div>
  );
};


const test1 = () => {
return (
    <>Test1</>
)
};

const test2 = () => {
    return (
        <>Test2</>
    )
    };


export default Jsx; */ 