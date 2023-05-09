import { Container } from "react-bootstrap";
import "./App.css"
import Header from "./companents/Header"
import Card from "./companents/Card"

function App() {
  return (
    <Container className="text-center mt-4 p-4">
      <Header/>
      <Card/>
    </Container>
  )
}

export default App
