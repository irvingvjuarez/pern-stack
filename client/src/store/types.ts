export interface IAppState {
	message: string;
	status: undefined | "error" | "warning" | "info" | "success"
}