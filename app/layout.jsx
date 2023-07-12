import Provider from "@/components/Provider"
import "@/styles/globals.css"

export const metadata = {
	title: "Listed",
	description: "Your own personalized dashboard",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
