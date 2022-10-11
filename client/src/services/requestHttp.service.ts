import { NavigateFunction } from "react-router-dom";
import { MethodType } from "../types/customTypes/methods.type";
import { RequestMessageInterfaceInitValue } from "../types/interfaces/requestMsg.interface";
import { getPlainApi } from "./getPlainApi.service";

interface requestHttpProps {
	method: MethodType;
	data?: any;
	id: number | string
	navigate?: NavigateFunction
}

export const requestHttp = async ({ method, data, id, navigate }: requestHttpProps) => {
	const res = RequestMessageInterfaceInitValue
	const api = getPlainApi(id?.toString())

	try {
		const request = await fetch(api, {
			method,
			body: JSON.stringify(data || {}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
		const response = await request.json()

		if(navigate) {
			navigate("/")
		}

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