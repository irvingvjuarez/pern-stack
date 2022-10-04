import { useMemo, useState } from "react"

interface useButtonIconProps {
	btnOptions: string[]
}

export const useButtonIcon = ({ btnOptions }: useButtonIconProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const config = useMemo(() => ({
		options: btnOptions,
		itemHeight: 48
	}), [])

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
	const handleClose = () => {
    setAnchorEl(null);
  };

	return {
		open,
		config,
		handleClick,
		handleClose,
		anchorEl
	}
}