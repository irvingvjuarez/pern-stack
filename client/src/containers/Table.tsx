import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"
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
	return (
		<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{headCells.map((cell) => (
									<TableCell key={cell} align="center">{cell}</TableCell>
								))}
							</TableRow>
						</TableHead>

						<TableBody>
							{items.map((item) => (
								<TableRow>
									{itemProps.map(prop => (
										<TableCell align="center">{item[prop]}</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
	)
}