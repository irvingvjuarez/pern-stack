interface ConditionalNodeProps {
	conditional: boolean;
	children: JSX.Element;
}

export const ConditionalNode: React.FC<ConditionalNodeProps> = ({ conditional, children }) => {
	if (conditional) return (
		<>{children}</>
	)

	return null
}