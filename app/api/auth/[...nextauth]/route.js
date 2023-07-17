import User from "@/models/User"
import { connectToDB } from "@/utils/database"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
	],
	callbacks: {
		async signIn({ profile }) {
			try {
				await connectToDB()

				const user = await User.findOne({
					email: profile.email,
				})

				if (!user) {
					await User.create({
						name: profile.name,
						email: profile.email,
						username: profile.email.split("@")[0],
						image: profile.picture,
					})
				}

				return true
			} catch (error) {
				console.log(error)
				return false
			}
		},
		async session({ session }) {
			try {
				await connectToDB()

				const sessionUser = await User.findOne({
					email: session.user.email,
				})

				session.user.id = sessionUser && sessionUser._id.toString()

				return session
			} catch (error) {
				console.log(error)
				return
			}
		},
	},
	pages: {
		signIn: "/login",
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
