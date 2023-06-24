import { Page } from "iconoir-react";

import { truncateString } from "@/utils";

import { Card, CardProps } from "./Card";
import { Chip } from "./Chip";

export type BillType = 
	| 'Assembly Bill'
	| 'Council Bill'
	| 'Council Resolution'
	| 'House Bill'
	| 'House Resolution'
	| 'Senate Bill'
	| 'Senate Resolution'
export type BillStatus =
	| 'Pass'
	| 'Intro'
	| 'N/A'
export type BillProps = CardProps & {
	uniqueId: string,
	type: BillType,
	desc: string,
	status: BillStatus,
	isRecessed?: boolean,
}

export const Bill = ({
	uniqueId,
	type,
	desc,
	status,
	//isRecessed = false,
	...props
}: BillProps) => {
	return (
		<Card className="flex-row gap-3 items-start px-4 bg-slate-50 border border-slate-200" {...props}>
			<div className="bg-slate-200 p-3 rounded-lg">
				<Page />
			</div>
			<div className="flex flex-col grow gap-1">
				<header className="flex flex-row gap-2 items-center">
					<span className="text-lg">{uniqueId}</span>
					<span className="text-slate-500 text-m">{type}</span>
				</header>
				<p className="text-slate-800">{truncateString(desc, 120)}</p>
				<footer className="flex pt-3">
					<Chip
						roundKind="pill"
						color="blue"
						// className={twMerge(isRecessed && 'pr-2')}
					>
						{status}
						{/* {isRecessed && <Clock />} */}
					</Chip>
				</footer>
			</div>
		</Card>
	)
}
