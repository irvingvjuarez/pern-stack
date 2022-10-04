import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useButtonIcon } from "../hooks/useButtonIcon";
import { Link } from "react-router-dom"

interface IconButtonViewProps {
	id: number
}

export const IconButtonView: React.FC<IconButtonViewProps> = ({ id }) => {
	const useBtnIconConfig = {
		btnOptions: [ "Update", "Delete" ]
	}
	const { open, handleClick, anchorEl, handleClose, config } = useButtonIcon(useBtnIconConfig)
	const { options, itemHeight } = config

	return (
		<>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>

			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: itemHeight * 4.5,
						width: '20ch',
					},
				}}
			>
				{options.map(option => (
					<MenuItem key={option} onClick={handleClose}>
						<Link
							to={`/tasks/${option.toLowerCase()}/${id}`}
							style={{textDecoration: "none", color: "black"}}
						>
							{option}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</>
	)
}