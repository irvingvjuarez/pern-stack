import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Menu, MenuItem} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMemo, useState } from "react"
import { TaskInterface } from "../types/interfaces/task.interface"

interface TableViewProps {
	headCells: string[],
	itemProps: Array<keyof TaskInterface>,
	items: TaskInterface[]
}

export const TableView: React.FC<TableViewProps> = ({
	headCells,
	itemProps,
	items
}) => {
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
		<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{headCells.map((cell) => (
									<TableCell key={cell} align="center">{cell}</TableCell>
								))}
								<TableCell></TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{items.map((item) => (
								<TableRow key={item.task_id}>
									{itemProps.map(prop => (
										<TableCell align="center">{item[prop]}</TableCell>
									))}
									<TableCell>
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
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
	)
}