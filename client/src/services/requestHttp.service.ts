import { tasksApiRoot } from "../globals/apis";
import { RequestMessageInterfaceInitValue } from "../types/interfaces/requestMsg.interface";

interface requestHttpProps {
	method: "POST" | "DELETE" | "PUT";
	data?: any
}

export const requestHttp = async ({ method, data }: requestHttpProps) => {
	const res = RequestMessageInterfaceInitValue

	try {
		const request = await fetch(tasksApiRoot, {
			method,
			body: JSON.stringify(data),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
		const response = await request.json()
		return {
			...res,
			message: "Task successfully created",
			data: response
		}
	} catch (error) {
		return {
			...res,
			error
		}
	}
}