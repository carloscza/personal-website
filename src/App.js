import "./App.css";

import HomeNavBar from "./containers/HomeNavBar";
import HomeBanner from "./containers/HomeBanner";

function App() {
  return (
    <main className="App">
      <section id="home-nav-bar">
        <HomeNavBar />
        <HomeBanner/>
      </section>

    </main>
  );
}

export default App;
