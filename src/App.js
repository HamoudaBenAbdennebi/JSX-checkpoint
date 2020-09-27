import React from "react";
import "./component/profile/ProfilPhoto";
import "./component/profile/FullName";
import "./component/profile/Address";
import Profile from "./component/profile/ProfilPhoto";
import Name from "./component/profile/FullName";
import Adr from "./component/profile/Address";
function App() {
  return (
    <div className="Full">
      <Profile />
      <Name />
      <Adr />
    </div>
  );
}

export default App;
