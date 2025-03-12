import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked!");
  }
  function handleMouseOver() {
    alert("Paragraph ke upar mouse leke aye ho");
  }

  function handleInputChange(e) {
    console.log("Value till now:", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //I am writing my custom behavior
    alert("form submit kardu kya");
  }
  return (
    <>
      <button onClick={() => alert("button click hua h")}>Click me</button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form> */}
      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>I am a Paragraph</p>
     <button onClick={handleClick}>Click me</button> */}
    </>
  );
}

export default App;
