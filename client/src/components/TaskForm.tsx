import { Grid, Card, Typography } from "@mui/material"
import { FormView } from "../views/FormView"

export const TaskForm = () => {
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
            Create Task
          </Typography>

          <FormView />
        </Card>s
      </Grid>
    </Grid>
  )
}