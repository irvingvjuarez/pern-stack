import { useSelector } from "react-redux"
import { TaskList } from "../components/TaskList"
import { IAppState } from "../store/types"
import { Snackbar, Alert } from "@mui/material"

export const Home = () => {
	const message = useSelector((state: IAppState) => state.message)
	const status = useSelector((state: IAppState) => state.status)

  return(
		<>
    	<TaskList />

			<Snackbar open={Boolean(message)}>
				<Alert severity={status} variant="filled">
					{message}
				</Alert>
			</Snackbar>
		</>
  )
}