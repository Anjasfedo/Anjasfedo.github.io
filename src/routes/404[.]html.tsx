import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "../components/NotFound";

// Prerendered to /404.html so GitHub Pages serves it for unknown paths.
export const Route = createFileRoute("/404.html")({
	head: () => ({ meta: [{ name: "robots", content: "noindex" }] }),
	component: NotFound,
});
