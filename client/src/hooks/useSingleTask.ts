import { useState, useEffect } from "react"
import { getPlainApi } from "../services/getPlainApi.service";
import { TaskInterface, TaskInterfaceInitValue } from "../types/interfaces/task.interface";
import { UseTaskResponse, UseTaskResponseInitValue } from "../types/interfaces/useTasksResponse.interface";

export const useSingleTask = (id?: string): UseTaskResponse => {
	if (!id) return UseTaskResponseInitValue

	const [data, setData] = useState<TaskInterface>(TaskInterfaceInitValue);
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