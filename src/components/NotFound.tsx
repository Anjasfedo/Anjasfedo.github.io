export function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-void text-mist">
			<p className="font-mono text-sm uppercase tracking-wide text-ash">
				404 — Not Found
			</p>
			<a href={import.meta.env.BASE_URL} className="underline">
				Back home
			</a>
		</div>
	);
}
