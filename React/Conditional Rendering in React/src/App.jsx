import { useState } from "react";
import "./App.css";
import LogoutBtn from "./components/LogoutBtn";
import Loginbtn from "./components/Loginbtn";

function App() {
  const [isLoggedIN, setLoggedIN] = useState(true);

  if(!isLoggedIN){
   return (
    <Loginbtn/>
   )
  }

  return (
    <div>
      <h1>Welcome Everyone to COdeHelp Web Dev Course</h1>
      <div>{isLoggedIN && <LogoutBtn />}</div>      
    </div>
  );

  // return (
  // <div>
  //   {isLoggedIN ? <LogoutBtn /> : <Loginbtn />}   //ternery operator
  // </div>
  // )

  // if (isLoggedIN) { //if-else 
  //   return <LogoutBtn />;
  // } else {
  //   return <Loginbtn />;
  // }
}

export default App;
