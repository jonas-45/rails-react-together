import React from "react";
import Greeting from "./components/greetings";

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10%"

}

function App() {
  return (
    <div style={styles}>
      <Greeting />
    </div>
  )
}

export default App;