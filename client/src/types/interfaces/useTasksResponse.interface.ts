import { TaskInterface } from "./task.interface";

export interface UseTaskResponse {
	loading: boolean;
	data: TaskInterface | TaskInterface[];
}

export const UseTaskResponseInitValue: UseTaskResponse = {
	loading: false,
	data: {
		task_name: "",
		task_description: ""
	} as TaskInterface
}