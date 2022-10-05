import { TaskInterface } from "./task.interface";

export interface RequestMessageInterface {
	error: Error | unknown;
	data: null | TaskInterface;
	message: string
}

export const RequestMessageInterfaceInitValue: RequestMessageInterface = {
	message: "",
	data: null,
	error: null
}