import { Container } from "@mui/material"
import { useTasks } from "../hooks/useTasks"
import { Typography, Box, CircularProgress } from "@mui/material"
import { TableView } from "../containers/Table";

export const TaskList = () => {
  const {tasks, loading} = useTasks();

	if (loading) return (
		<Box sx={{display: "flex", justifyContent: "center"}}>
			<CircularProgress sx={{mt: 5}} />
		</Box>
	)

  return(
    <Container sx={{mt: 2}}>
			{tasks.length === 0 ? (
				<Typography sx={{textAlign: "center", mt: 5}}>
					No tasks created
				</Typography>
			) : (
				<TableView
					headCells={["Title", "Description"]}
					itemProps={["task_name", "task_description"]}
					items={tasks}
				/>
			)}
    </Container>
  )
}