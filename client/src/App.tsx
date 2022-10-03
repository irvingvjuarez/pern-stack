import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material"

import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask"

import { Navbar } from "./components/Navbar"
import { EditTask } from "./pages/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update-task" element={<EditTask />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
