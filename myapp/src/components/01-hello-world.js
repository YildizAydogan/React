import Comp from "./02-comp";

const HelloWorld = ()=> {

const isim="Ali";

const user={
    userName:"Alice",
    passwordHint: "veli"
}




return (
<>
<div id="d1" className="ilkHarfKücük"> 
Hello World 
<Comp/>
<b>User name : {user.userName}</b>


 </div>

<div id="d2">{isim}</div>
</>
);
};

  

export default HelloWorld;