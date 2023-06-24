import { DivProps } from "react-html-props"
import { twMerge } from "tailwind-merge"

export type CardProps = DivProps
export const Card = ({children, className, ...props}: CardProps) => {
	return (
		<div
			className={twMerge('inline-flex flex-col py-4 px-6 bg-slate-100 rounded-lg', className)}
			{...props}
		>
			{children}
		</div>
	)
}
