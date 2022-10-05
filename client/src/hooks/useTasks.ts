import { useEffect, useState } from "react"
import { numberRegexp } from "../globals/regexp";
import { getPlainApi } from "../services/getPlainApi.service";
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";

export const useTasks = (pathDetail?: string): UseTaskResponse => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true)
	const idTask = pathDetail ? pathDetail.match(numberRegexp)?.[0] : "";
	const api = getPlainApi(idTask)

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller
		const queryConfig = { signal }

		fetch(api, queryConfig)
			.then(res => res.json())
			.then(data => {
				setLoading(false)
				setTasks(data)
			})

		return () => controller.abort()
	}, [])

	return {
		tasks,
		loading
	}
}