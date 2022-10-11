import { useNavigate } from "react-router-dom"
import { requestHttp } from "../services/requestHttp.service"
import { useSnackbar } from "./useSnackbar"

export const useHttp = () => {
	const navigate = useNavigate()
	const showSnackbar = useSnackbar()

	const handleDelete = (id: string) => {
		requestHttp({ method: "DELETE", id, navigate })
		showSnackbar()
	}

	return {
		handleDelete
	}
}