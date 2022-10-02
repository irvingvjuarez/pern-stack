import { Padding, Title } from "@mui/icons-material"
import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material"

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

          <CardContent>
            <form style={{display: "flex", flexDirection: "column"}}>
              <TextField
                variant="filled"
                label="Title"
                sx={{mb: 4}}
              />

              <TextField 
                variant="filled"
                label="Description"
                sx={{mb: 4}}
              />

              <Button variant="contained">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>s
      </Grid>
    </Grid>
  )
}