import { CardContent, TextField, Button, Alert } from "@mui/material"
import { useUserInfo } from "../hooks/useUserInfo"
import { TaskInterface } from "../types/interfaces/task.interface";
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";
import { ConditionalNode } from "../components/ConditionalNode"

interface FormViewProps {
	info: UseTaskResponse
}

export const FormView: React.FC<FormViewProps> = ({ info }) => {
  const { handleInfoInput, handleSubmitForm, isTitle, method } = useUserInfo(info);
	const task = info.data as TaskInterface
	const { task_id } = task

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

				<ConditionalNode conditional={!isTitle}>
					<Alert severity="error" sx={{mb: 2}} variant="outlined">The title is compulsory</Alert>
				</ConditionalNode>

        <Button variant="contained" type="submit" onClick={(e) => handleSubmitForm(e, method, task_id)}>
          Submit
        </Button>
      </form>
    </CardContent>
  )
}