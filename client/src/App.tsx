import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Container } from "@mui/material"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
