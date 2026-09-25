import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "theme-color", content: "#ffffff" },
            {
                name: "description",
                content:
                    "Anjasfedo — Software Engineer from Bengkulu, Indonesia. Scalable, efficient software systems.",
            },
            { title: "Anjasfedo — Software Engineer" },
        ],
        links: [
            {
                rel: "icon",
                type: "image/webp",
                href: `${import.meta.env.BASE_URL}profile-circle.webp`,
            },
            { rel: "stylesheet", href: appCss },
        ],
    }),
    shellComponent: RootDocument,
    notFoundComponent: NotFound,
});

function NotFound() {
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

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body className="bg-void text-mist antialiased">
                {children}
                <TanStackDevtools
                    config={{ position: "bottom-right" }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    );
}