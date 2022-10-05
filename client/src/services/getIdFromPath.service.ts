import { numberRegexp } from "../globals/regexp"

export const getIdFromPath = (path: string) => {
	// The ID is a number
	return path.match(numberRegexp)?.[0]
}