import { Container, AlertTitle, Alert, Box, Button } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useAppFlow } from "../hooks/useAppFlow"
import { getIdFromPath } from "../services/getIdFromPath.service";
import { requestHttp } from "../services/requestHttp.service"

export const DeleteTask = () => {
	const { pathname } = useLocation();
	let id = getIdFromPath(pathname) as string

	return(
		<Container sx={{mt: 2}}>
			<Alert severity="error" variant="outlined">
				<AlertTitle>Error</AlertTitle>
				You are about to delete a Task - <strong>Are you sure you want to continue?</strong>
			</Alert>

			<Box sx={{mt: 5}}>
				<Button variant="outlined" sx={{mr: 2}} onClick={useAppFlow()}>Cancel</Button>
				<Button variant="contained" color="error" onClick={() => requestHttp({ method: "DELETE", id })} >Delete</Button>
			</Box>
		</Container>
	)
}