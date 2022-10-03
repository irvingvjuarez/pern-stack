import { Container } from "@mui/material"
import { useTasks } from "../hooks/useTasks"

export const TaskList = () => {
  const tasks = useTasks()
	console.log(tasks)

  return(
    <Container sx={{mt: 2}}>
      I am the task list
    </Container>
  )
}