import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"
import { TaskInterface } from "../types/interfaces/task.interface"
import { IconButtonView } from "../views/IconButtonView"

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
						<TableCell></TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{items.map((item) => (
						<TableRow key={item.task_id}>
							{itemProps.map(prop => (
								<TableCell align="center" key={`${item.task_id}-${prop}`}>{item[prop]}</TableCell>
							))}
							<TableCell>
								<IconButtonView id={item.task_id} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}