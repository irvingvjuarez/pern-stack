import { useEffect, useState } from "react"

export const useTasks = () => {
	const [tasks, setTasks] = useState();

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller
		const queryConfig = { signal }

		fetch("http://localhost:3000/api/v1/tasks", queryConfig)
			.then(res => res.json())
			.then(data => setTasks(data))

		return () => controller.abort()
	}, [])

	return tasks
}