import HelloWorld from "./components/01-hello-world";
import Comp from './components/02-comp'
import Jsx from './components/03-jsx.js'
import Jsx2 from './components/04-jsx2'

const App = () =>{
  return (
    <div className="App">
    Bu benim ilk calismam!
    <HelloWorld/>
    <Comp/>
    <Jsx/>
    <Jsx2/>
    </div>
  );
}

export default App;
