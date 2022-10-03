import { Grid, Card, Typography } from "@mui/material"
import { FormView } from "../views/FormView"

interface TaskFormProps {
  mode?: "create" | "edit"
}

export const TaskForm: React.FC<TaskFormProps> = ({ mode = "create" }) => {
  if (mode === "edit") {
    // TODO: fetch data
  }

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

          <FormView />
        </Card>s
      </Grid>
    </Grid>
  )
}