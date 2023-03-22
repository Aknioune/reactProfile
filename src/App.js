import React from "react";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import FullName from "./components/Profile/FullName";
import Address from "./components/Profile/Address";
import Social from "./components/Profile/socialMedia";
function App() {
  return (
    <div className="App">
    <div className="Box">
      <ProfilePhoto />
      <FullName />
      <Address />
      <Social/>
    </div>
    </div>
  );
}

export default App;

