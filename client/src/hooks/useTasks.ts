import { useEffect, useState } from "react"
import { numberRegexp } from "../globals/regexp";
import { getPlainApi } from "../services/getPlainApi.service";
import { TaskInterface } from "../types/interfaces/task.interface";
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";

export const useTasks = (pathDetail?: string): UseTaskResponse => {
	const [data, setData] = useState<TaskInterface[]>([]);
	const [loading, setLoading] = useState(true)
	const idTask = pathDetail ? pathDetail.match(numberRegexp)?.[0] : "";
	const api = getPlainApi(idTask)

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller
		const queryConfig = { signal }

		fetch(api, queryConfig)
			.then(res => res.json())
			.then(info => {
				setLoading(false)
				setData(info)
			})

		return () => controller.abort()
	}, [])

	return {
		data,
		loading
	}
}