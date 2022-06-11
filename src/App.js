import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function App() {
  const [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Navbar </Navbar.Brand>{" "}
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>{" "}
            <Nav.Link href="#features"> Features </Nav.Link>{" "}
            <Nav.Link href="#pricing"> Pricing </Nav.Link>{" "}
          </Nav>{" "}
        </Container>{" "}
      </Navbar>{" "}
      <div className="shoesInfoImg"></div>
      <div className="shoesList">
        {shoes.map((name, i) => {
          return (
            <div className="container">
              <div className="row">
                  <img className="shoesImg" src={name.source} alt="img" />
                <div className="col-md-4">
                  <h4>{data[i].title}</h4>
                  <p>{data[i].content}</p>
                  <p>{data[i].price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
