import { Snackbar, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

interface SnackbarViewProps {
	isOpen: boolean;
	msg: string
}

export const SnackbarView: React.FC<SnackbarViewProps> = ({ isOpen, msg }) => {
	const [open, setOpen] = useState(false)

	const handleClose = (evt: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false)
	}

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		>
			<CloseIcon fontSize="small" />
		</IconButton>
	)

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={6000}
			message={msg}
			action={action}
			onClose={handleClose}
		/>
	)
}