import { Grid, Card, Typography, CardContent, TextField } from "@mui/material"

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
          <Typography>
            Create Task
          </Typography>

          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="Title"
              />
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}