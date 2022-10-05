import { Container } from "@mui/material"
import { useTasks } from "../hooks/useTasks"
import { Typography } from "@mui/material"
import { TableView } from "../containers/Table";
import { ConditionalLoader } from "./ConditionalLoader";
import { TaskInterface } from "../types/interfaces/task.interface";

export const TaskList = () => {
  const tasks = useTasks();
	const data = tasks.data as TaskInterface[]
	const loading = tasks.loading

  return(
		<ConditionalLoader loading={loading}>
			<Container sx={{mt: 2}}>
				{data.length === 0 ? (
					<Typography sx={{textAlign: "center", mt: 5}}>
						No tasks created
					</Typography>
				) : (
					<TableView
						headCells={["Title", "Description"]}
						itemProps={["task_name", "task_description"]}
						items={data}
					/>
				)}
			</Container>
		</ConditionalLoader>
  )
}