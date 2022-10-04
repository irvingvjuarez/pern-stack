import { Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useTasks } from "../hooks/useTasks"
import { Typography } from "@mui/material"
import { TaskInterface } from "../types/interfaces/task.interface";

export const TaskList = () => {
  const tasks = useTasks<TaskInterface[]>();

  return(
    <Container sx={{mt: 2}}>
      {tasks.length === 0 ? (
				<Typography sx={{textAlign: "center", mt: 5}}>
					No tasks created
				</Typography>
			) : (
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell align="center">Title</TableCell>
								<TableCell align="center">Description</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{tasks.map(task => (
								<TableRow>
									<TableCell align="center">{task.task_name}</TableCell>
									<TableCell align="center">{task.task_description}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
    </Container>
  )
}