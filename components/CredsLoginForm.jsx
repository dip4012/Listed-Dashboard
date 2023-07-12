import { Formik } from "formik"
import Link from "next/link"
import * as Yup from "yup"

export default function CredsLoginForm() {
	const CredsValidationSchema = Yup.object().shape({
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
			.min(8, "Password is too short")
			.required("Password is required"),
	})

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={CredsValidationSchema}
			onSubmit={(values) => {
				console.log(values)
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form
					onSubmit={handleSubmit}
					className="w-[385px] bg-white rounded-[20px] p-[30px] mb-[20px]"
				>
					<label>
						<p className="text-black text-base font-Lato font-normal mb-[10px]">
							Email address
						</p>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className="w-full h-[40px] rounded-[10px] bg-[#f5f5f5] mb-[20px] text-black text-base font-Lato font-normal px-[15px] py-[10px]"
						/>
						{/* {errors.email && touched.email && errors.email} */}
					</label>
					<label>
						<p className="text-black text-base font-Lato font-normal mb-[10px]">
							Password
						</p>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className="w-full h-[40px] rounded-[10px] bg-[#f5f5f5] mb-[20px] text-black text-base font-Lato font-normal px-[15px] py-[10px]"
						/>
						{/* {errors.password && touched.password && errors.password} */}
					</label>
					<Link
						href="#"
						className="text-[#346BD4] font-Lato text-base font-normal mb-[20px] block"
					>
						Forgot password?
					</Link>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full h-[40px] rounded-[10px] bg-black text text-white font-Montserrat text-base font-bold"
					>
						Sign In
					</button>
				</form>
			)}
		</Formik>
	)
}
