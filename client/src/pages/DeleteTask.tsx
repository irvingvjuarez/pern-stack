import { Container, AlertTitle, Alert, Box, Button } from "@mui/material"
import { useAppFlow } from "../hooks/useAppFlow"

export const DeleteTask = () => {
	return(
		<Container sx={{mt: 2}}>
			<Alert severity="error" variant="outlined">
				<AlertTitle>Error</AlertTitle>
				You are about to delete a Task - <strong>Are you sure you want to continue?</strong>
			</Alert>

			<Box sx={{mt: 5}}>
				<Button variant="outlined" sx={{mr: 2}} onClick={useAppFlow()}>Cancel</Button>
				<Button variant="contained" color="error">Delete</Button>
			</Box>
		</Container>
	)
}