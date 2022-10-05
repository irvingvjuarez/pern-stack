import { tasksApiRoot } from "../globals/apis"
import { TaskInterface } from "../types/interfaces/task.interface";
import { useState } from "react"
import { RequestMessageInterface, RequestMessageInterfaceInitValue } from "../types/interfaces/requestMsg.interface";

interface useCrudProps {
	method: "POST" | "DELETE" | "PUT";
	data?: TaskInterface
}

const getCrudResponse = async (
	method: useCrudProps["method"],
	setMsg: React.Dispatch<React.SetStateAction<RequestMessageInterface>>,
	data: useCrudProps["data"]
) => {
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
		setMsg(prev => ({
			...prev,
			message: "success",
			data: response
		}))
	} catch (error) {
		setMsg(prev => ({
			...prev,
			error
		}))
	}
}

export const useCrud = async ({method, data}: useCrudProps) => {
	const [crudResponse, setCrudResponse] = useState<RequestMessageInterface>(RequestMessageInterfaceInitValue)

	await getCrudResponse(method, setCrudResponse, data)

	return crudResponse
}