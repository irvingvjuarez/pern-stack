import { tasksApiRoot } from "../globals/apis"
import { useState } from "react"
import { RequestMessageInterface, RequestMessageInterfaceInitValue } from "../types/interfaces/requestMsg.interface";

interface useCrudProps {
	method: "POST" | "DELETE" | "PUT";
	data?: any
}

export const getCrudResponse = async ({
	method,
	data
}: useCrudProps) => {
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
			...RequestMessageInterfaceInitValue,
			message: "success",
			data: response
		}
	} catch (error) {
		return {
			...RequestMessageInterfaceInitValue,
			error
		}
	}
}

export const useCrud = async ({method, data}: useCrudProps) => {
	const [crudResponse, setCrudResponse] = useState<RequestMessageInterface>(RequestMessageInterfaceInitValue)

	// const response = await getCrudResponse({method, data})
	// setCrudResponse(response)

	return crudResponse
}