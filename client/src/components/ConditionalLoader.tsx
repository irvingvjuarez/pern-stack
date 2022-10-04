import { Box, CircularProgress } from "@mui/material"

interface ConditionalLoaderProps {
	loading: boolean;
	children: JSX.Element
}

export const ConditionalLoader: React.FC<ConditionalLoaderProps> = ({
	loading,
	children
}) => {
	if (loading) return (
		<Box sx={{display: "flex", justifyContent: "center"}}>
			<CircularProgress sx={{mt: 5}} />
		</Box>
	)

	return <>{children}</>
}