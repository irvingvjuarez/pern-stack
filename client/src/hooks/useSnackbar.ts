import { useDispatch } from "react-redux"
import { actions } from "../store"
import { EActionTypes } from "../store/actions.enum"

export const useSnackbar = () => {
	const dispatch = useDispatch()

	const showSnackbar = () => {
		dispatch(actions[EActionTypes.setMsg]({
			message: "Task event done correctly",
			status: "success"
		}))

		setTimeout(() => {
			dispatch(actions[EActionTypes.removeMsg]())
		}, 3000)
	}

	return showSnackbar
}