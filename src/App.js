
import "./index.css"
import Home from "./Home";
import TopNav from './TopNav';

const App = () => {
  return (
    <div className="App">
      <TopNav/>
      <div className="App-header">
       <Home/>
      </div>
    </div>
  );
}

export default App;
