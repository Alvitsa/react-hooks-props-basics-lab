import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass name, city, and color to Home */}
      <Home name={user.name} city={user.city} color={user.color} />
      {/* Pass bio, github, and linkedin to About */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;