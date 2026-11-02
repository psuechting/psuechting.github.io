const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

/** "2025-10" -> "Oct 2025"; "2022" -> "2022" */
export function formatMonth(date: string): string {
	const [year, month] = date.split('-').map(Number);
	return month ? `${MONTHS[month - 1]} ${year}` : `${year}`;
}

/** "Oct 2025 – Present", "Sept 2019 – Aug 2026", or just "Feb 2017" when the end is unknown. */
export function formatRange(start: string, end?: string): string {
	if (!end) return formatMonth(start);
	return `${formatMonth(start)} – ${end === 'present' ? 'Present' : formatMonth(end)}`;
}
