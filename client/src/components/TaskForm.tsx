import { Grid, Card, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useTasks } from "../hooks/useTasks"
import { FormView } from "../views/FormView"
import { ConditionalLoader } from "../components/ConditionalLoader"
import { getIdFromPath } from "../services/getIdFromPath.service"
import { useSingleTask } from "../hooks/useSingleTask"

interface TaskFormProps {
  mode?: "create" | "edit"
}

export const TaskForm: React.FC<TaskFormProps> = ({ mode = "create" }) => {
	const {pathname} = useLocation()
	const id = mode === "edit" ? getIdFromPath(pathname) : undefined;
	const task = useSingleTask(id);

  return(
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{mt: 5}}>
          <Typography variant="h5" sx={{padding: 1}}>
            {mode === "create" ? "Create Task" : "Update Task"}
          </Typography>

					<ConditionalLoader loading={task.loading}>
          	<FormView info={task} />
					</ConditionalLoader>
        </Card>
      </Grid>
    </Grid>
  )
}