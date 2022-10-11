import { useLocation, useNavigate } from "react-router-dom"
import { getIdFromPath } from "../services/getIdFromPath.service";
import { requestHttp } from "../services/requestHttp.service"
import { useSnackbar } from "./useSnackbar"

export const useHttp = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate()
	const showSnackbar = useSnackbar()

	let id = getIdFromPath(pathname) as string

	const handleDelete = () => {
		requestHttp({ method: "DELETE", id, navigate })
		showSnackbar()
	}

	return {
		handleDelete
	}
}