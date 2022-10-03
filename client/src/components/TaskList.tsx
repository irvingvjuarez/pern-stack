import { Container } from "@mui/material"
import { useTasks } from "../hooks/useTasks"
import { Typography } from "@mui/material"

export const TaskList = () => {
  const tasks = useTasks();

  return(
    <Container sx={{mt: 2}}>
      {tasks.length === 0 ? (
				<Typography sx={{textAlign: "center", mt: 5}}>
					No tasks created
				</Typography>
			) : (
				<div>
					I am the tasks list
					{/* TODO: Create items for the tasks */}
				</div>
			)}
    </Container>
  )
}