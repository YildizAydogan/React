import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import NoteForm from "./components/note-form";
import Notes from "./components/notes";
import axios from "axios";
 
 
 function App() {
   const [notes, setNotes] = useState([]);
    
   useEffect(() => {
    loadNotes();
   },[]);

   const loadNotes = () => {  
    axios("https://jsonplaceholder.typicode.com/posts")
     .then((resp) => setNotes(resp.data)); 
    };

   const removeNote = (id) => {
   if (!id) return;

   axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((resp) => console.log(resp));

   }
  




      return (
        <Container>
        <Row>
          <Col md={3}>
            <NoteForm />
          </Col>
          <Col md={9}>
            <Notes data={notes} removeNote={removeNote}/>
          </Col>
        </Row>
      </Container>
    );
  }
    export default App;
