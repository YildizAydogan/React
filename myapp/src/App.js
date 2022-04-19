import HelloWorld from "./components/01-hello-world";
import Comp from './components/02-comp'
import Jsx from './components/03-jsx.js'
import Jsx2 from './components/04-jsx2'
import JsxLoop from "./components/05-jsx-loop";
import JsxPractise from "./components/06-jsx-practise";
import StyleInline from "./components/07-style-inline";
import StyleInternal from "./components/08-style-internal";
const App = () =>{
  return (
    <div className="App">
   
    {/* <HelloWorld/>
    <Comp/>
    <Jsx/>
    <Jsx2/>
    <JsxLoopp/> 
    <JsxPractise/>
    <StyleInline/>*/}
    <StyleInternal/>
    </div>
  );
}

export default App;
