import { CardContent, TextField, Button } from "@mui/material"

export const FormView = () => {
  return(
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
  )
}