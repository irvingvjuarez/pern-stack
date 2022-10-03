import { CardContent, TextField, Button } from "@mui/material"
import { useUserInfo } from "../hooks/useUserInfo"

export const FormView = () => {
  const { handleInfoInput, handleSubmitForm } = useUserInfo();

  return(
    <CardContent>
      <form style={{display: "flex", flexDirection: "column"}}>
        <TextField
          variant="filled"
          label="Title"
          name="title"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
        />

        <TextField 
          variant="filled"
          label="Description"
          name="description"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
          multiline
          rows={4}
        />

        <Button variant="contained" type="submit" onClick={handleSubmitForm}>
          Submit
        </Button>
      </form>
    </CardContent>
  )
}