export interface TaskInterface {
	task_name: string;
	task_description: string;
	task_id: number;
	created_at: string;
}

export const TaskInterfaceInitValue: TaskInterface = {
	task_name: "",
	task_description: "",
	task_id: NaN,
	created_at: ""
}