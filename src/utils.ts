export function truncateString(value: string, maxLength: number): string {
    if (value.length <= maxLength) { return value; }
	return value.slice(0, maxLength - 1) + '\u2026';
}

export const HorizontalEllipsis = '\u2026';
export function truncateStringMiddle(
	value: string,
	maxLength: number,
	separator: string = HorizontalEllipsis
): string {
	if (value.length <= maxLength) { return value; }

	const charsToShow = maxLength - separator.length;
	const frontChars = Math.ceil(charsToShow/2);
	const backChars = Math.floor(charsToShow/2);

	return value.substring(0, frontChars) +
		separator +
		value.substring(value.length - backChars);
}
