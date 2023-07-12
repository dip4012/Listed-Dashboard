import "@/styles/globals.css"

export const metadata = {
	title: "Listed",
	description: "Your own personalized dashboard",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
