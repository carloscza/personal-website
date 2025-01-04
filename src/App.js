import "./App.css";

import HomeBanner from "./containers/HomeBanner";
import NavBar from "./containers/NavBar";

function App() 
{
  return (
    <div className="App">
      <header>
        <NavBar/>
        <HomeBanner/>
      </header>
    </div>
  );
}

export default App;