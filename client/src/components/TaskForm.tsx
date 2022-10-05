import { Grid, Card, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useTasks } from "../hooks/useTasks"
import { FormView } from "../views/FormView"
import { ConditionalLoader } from "../components/ConditionalLoader"

interface TaskFormProps {
  mode?: "create" | "edit"
}

export const TaskForm: React.FC<TaskFormProps> = ({ mode = "create" }) => {
	const {pathname} = useLocation()
	const task = mode === "edit" ? useTasks(pathname) : { loading: false, tasks: {
		task_name: "",
		task_description: ""
	} }

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
          	<FormView data={task} />
					</ConditionalLoader>
        </Card>s
      </Grid>
    </Grid>
  )
}