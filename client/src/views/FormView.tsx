import { CardContent, TextField, Button } from "@mui/material"
import { useUserInfo } from "../hooks/useUserInfo"
import { TaskInterface } from "../types/interfaces/task.interface";
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";

interface FormViewProps {
	data: UseTaskResponse
}

export const FormView: React.FC<FormViewProps> = ({ data }) => {
  const { handleInfoInput, handleSubmitForm } = useUserInfo();
	const task = data.tasks as TaskInterface

  return(
    <CardContent>
      <form style={{display: "flex", flexDirection: "column"}}>
        <TextField
          variant="filled"
          label="Title"
          name="title"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
					defaultValue={task.task_name}
        />

        <TextField
          variant="filled"
          label="Description"
          name="description"
          sx={{mb: 4}}
          onBlur={handleInfoInput}
          multiline
          rows={4}
					defaultValue={task.task_description}
        />

        <Button variant="contained" type="submit" onClick={handleSubmitForm}>
          Submit
        </Button>
      </form>
    </CardContent>
  )
}