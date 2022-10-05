import { tasksApiRoot } from "../globals/apis"
import { TaskInterface } from "../types/interfaces/task.interface";

interface useCrudProps {
	method: "POST" | "DELETE" | "PUT";
	data?: TaskInterface
}

export const useCrud = async ({method, data}: useCrudProps) => {
	try {
		const request = await fetch(tasksApiRoot, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
		const response = await request.json()
		return {
			message: "success",
			data: response
		}
	} catch (error) {
		return {
			error
		}
	}
}