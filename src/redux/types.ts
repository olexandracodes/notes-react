export interface Note {
	id: number;
	title: string;
	content: string;
}

export interface SnackbarMessage {
	message: string;
	severity: "error" | "warning" | "info" | "success";
}
