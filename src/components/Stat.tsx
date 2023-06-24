import { InfoEmpty, StatDown, StatUp } from "iconoir-react"
import { SectionProps } from "react-html-props"

import { Chip, ChipColor, ChipProps } from "./Chip"

export type StatValue = number|string
export type StatProps = SectionProps & {
	measure: string,
	about?: string,
	value: StatValue,
	unit?: string,
	trending?: number,
}

export const Stat = ({
	measure,
	about = undefined,
	value,
	unit = '',
	trending = undefined,
	...props
}: StatProps) => {
	const trendColorVision: ColorVision = 'deuteranopia'

	return (
		<section className="inline-flex flex-col gap-2" {...props}>
			<header className="flex flex-row items-center gap-4 justify-between">
				<h3>{measure}</h3>
				{about && <InfoEmpty className="text-slate-500 cursor-pointer"/>}
			</header>
			<div className="flex flex-row gap-6 justify-between items-end">
				<div
					className="flex flex-row items-end gap-0.5 font-mono"
					aria-description={`${value}${unit}`}
				>
					<span className="text-3xl">{value}</span>
					{unit && <span className="text-lg text-slate-500 font-medium">{unit}</span>}
				</div>
				{trending &&
					<StatTrending
						value={trending}
						positiveTrendColor={TrendColorMap[trendColorVision]['positive']} 
						negativeTrendColor={TrendColorMap[trendColorVision]['negative']} />}
			</div>
		</section>
	)
}

export type TrendColorRecord = {negative: ChipColor, positive: ChipColor}
export type ColorVision =
	| 'regular' // trichromatic
	| 'deuteranopia' // red-green color blindness
	| 'tritanopia' // blue-yellow color blindness
export const TrendColorMap: Record<ColorVision, TrendColorRecord> = {
	regular: { positive: 'green', negative: 'red' },
	deuteranopia: { positive: 'blue', negative: 'orange' },
	tritanopia: { positive: 'blue', negative: 'red' },
}

export type StatTrendingProps = ChipProps & {
	value: number,
	positiveTrendColor?: ChipColor,
	negativeTrendColor?: ChipColor,
}
export const StatTrending = ({
	value,
	positiveTrendColor,
	negativeTrendColor,
	...props
}: StatTrendingProps
) => {
	const isPositiveValue = value > 0;
	const iconSize = 16;
	const iconStrokeWidth = 2;

	return (
		<Chip
			className="text-sm px-2 py-0 gap-0.5 font-mono"
			color={isPositiveValue ? positiveTrendColor : negativeTrendColor}
			roundKind="pill"
			{...props}
		>
			{isPositiveValue
				? <StatUp height={iconSize} strokeWidth={iconStrokeWidth} />
				: <StatDown height={iconSize} strokeWidth={iconStrokeWidth} />}
			{value}%
		</Chip>
	)
}
