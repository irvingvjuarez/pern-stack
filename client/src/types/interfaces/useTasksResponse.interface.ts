import { TaskInterface } from "./task.interface";

export interface UseTaskResponse {
	loading: boolean;
	tasks: TaskInterface | TaskInterface[];
}