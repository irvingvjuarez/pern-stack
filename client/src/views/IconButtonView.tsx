import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMemo, useState } from "react"

export const IconButtonView = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const config = useMemo(() => ({
		options: [
			"Update",
			"Delete"
		],
		itemHeight: 48
	}), [])

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
	const handleClose = () => {
    setAnchorEl(null);
  };

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
						maxHeight: config.itemHeight * 4.5,
						width: '20ch',
					},
				}}
			>
				{config.options.map(option => (
					<MenuItem key={option} onClick={handleClose}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}