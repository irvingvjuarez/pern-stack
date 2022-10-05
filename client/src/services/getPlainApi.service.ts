import { tasksApiRoot } from "../globals/apis"

export const getPlainApi = (detail?: string) => {
	return detail ? `${tasksApiRoot}/${detail}` : tasksApiRoot;
}