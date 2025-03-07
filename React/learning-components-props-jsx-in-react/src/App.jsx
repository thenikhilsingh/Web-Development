import UserCard from "./components/UserCard";
import "./App.css";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";

function App() {
  return (
    <>
      <div className="container">
        <UserCard
          name="Maharana Pratap"
          desc="desc1"
          image={pic1}
          style={{ "border-radius": "10px" }}
        />
        <UserCard
          name="Chatrapati Shivaji Maharaj"
          desc="desc2"
          image={pic2}
          style={{ "border-radius": "10px" }}
        />
        <UserCard
          name="Prithviraj Chauhan"
          desc="desc3"
          image={pic3}
          style={{ "border-radius": "10px" }}
        />
      </div>
    </>
  );
}

export default App;
