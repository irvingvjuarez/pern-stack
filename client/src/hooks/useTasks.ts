import { useEffect, useState } from "react"
import { tasksApiRoot } from "../globals/apis";
import { TaskInterface } from "../types/interfaces/task.interface";
import { UseTaskResponse } from "../types/interfaces/useTasksResponse.interface";

export const useTasks = (): UseTaskResponse => {
	const [data, setData] = useState<TaskInterface[]>([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller
		const queryConfig = { signal }

		fetch(tasksApiRoot, queryConfig)
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