/**
 * A function to filter and join multiple `className`s
 *
 * @param { (string | undefined | null)[] } names
 */
export function classNames(...names) {
	return names.filter(Boolean).join(' ');
}
