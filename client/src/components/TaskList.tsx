import { Container } from "@mui/material"
import { useTasks } from "../hooks/useTasks"
import { Typography } from "@mui/material"
import { TableView } from "../containers/Table";
import { ConditionalLoader } from "./ConditionalLoader";

export const TaskList = () => {
  const {tasks, loading} = useTasks();

  return(
		<ConditionalLoader loading={loading}>
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
		</ConditionalLoader>
  )
}