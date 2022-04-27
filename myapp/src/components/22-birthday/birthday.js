import React, {useState} from 'react'
import Person from './person'
import data from "../../assets/data/persons.json";
import { Button } from 'react-bootstrap';

const Birthday = () => {
  const [people, setPeople] = useState(data);
    

  
  return (
    <div>
      <h1>Bugün doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu</p>
      {people.map(item=><Person name={item.name} age={item.age} image={item.image} key={item.id}/>)}
       
       <Button variant="danger" onClick={()=>setPeople([])}>Temizle</Button>
        
      
    </div>
  )
}

export default Birthday