import { useState, useEffect } from "react"
import { getPlainApi } from "../services/getPlainApi.service";
import { TaskInterface } from "../types/interfaces/task.interface";

export const useSingleTask = (id?: string) => {
	if (!id) return {
		loading: false,
		tasks: {
			task_name: "",
			task_description: ""
		}
	}

	const [data, setData] = useState<TaskInterface | null>(null);
	const [loading, setLoading] = useState(true)
	const api = getPlainApi(id)

	useEffect(() => {
		fetch(api)
			.then(res => res.json())
			.then(info => {
				setLoading(false)
				setData(info)
			})
	}, [])

	return {
		loading,
		data
	}
}