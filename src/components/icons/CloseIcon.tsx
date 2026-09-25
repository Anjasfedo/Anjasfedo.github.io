export function CloseIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M4 4l8 8M12 4l-8 8" />
		</svg>
	);
}
