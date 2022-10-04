import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material"

import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask"
import { EditTask } from "./pages/EditTask";
import { DeleteTask } from "./pages/DeleteTask"

import { Navbar } from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/add" element={<AddTask />} />
          <Route path="/tasks/update/:id" element={<EditTask />} />
					<Route path="/tasks/delete/:id" element={<DeleteTask />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
