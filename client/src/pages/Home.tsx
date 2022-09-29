import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TaskList"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return(
    <div>
      <Navbar />
      <TaskForm />
      <TaskList />
    </div>
  )
}