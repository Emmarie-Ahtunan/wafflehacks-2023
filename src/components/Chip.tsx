import classNames from "classnames"
import { SpanProps } from "react-html-props"
import { twMerge } from "tailwind-merge"

export type ChipSize = 'small' | 'normal'
export type ChipColor = 
    | 'slate'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'green'
    | 'emerald'
    | 'cyan'
    | 'blue'
    | 'indigo'
export type ChipRoundKind = 'round' | 'pill'
export type ChipProps = SpanProps & {
    size?: ChipSize,
    color?: ChipColor,
    withCircle?: boolean,
    roundKind?: ChipRoundKind
}

// NOTE: **don't** try to write a function to generate this table!
// tailwind needs fully static strings since it does static-analysis
// to find where they're used
// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export type ChipColorRecord = { border: string, bg: string, bg2: string, text: string }
export const ChipColorMap: Record<ChipColor, ChipColorRecord> = {
    slate:   { border: 'border-slate-200',   bg: 'bg-slate-100',   bg2: 'bg-slate-500',   text: 'text-slate-600',  },
    red:     { border: 'border-red-200',     bg: 'bg-red-100',     bg2: 'bg-red-500',     text: 'text-red-600' },
    orange:  { border: 'border-orange-200',  bg: 'bg-orange-100',  bg2: 'bg-orange-500',  text: 'text-orange-600' },
    amber:   { border: 'border-amber-200',   bg: 'bg-amber-100',   bg2: 'bg-amber-500',   text: 'text-amber-600' },
    yellow:  { border: 'border-yellow-200',  bg: 'bg-yellow-100',  bg2: 'bg-amber-500',   text: 'text-yellow-600' },
    green:   { border: 'border-green-200',   bg: 'bg-green-100',   bg2: 'bg-green-500',   text: 'text-green-600' },
    emerald: { border: 'border-emerald-200', bg: 'bg-emerald-100', bg2: 'bg-emerald-500', text: 'text-emerald-600' },
    cyan:    { border: 'border-cyan-200',    bg: 'bg-cyan-100',    bg2: 'bg-cyan-500',    text: 'text-cyan-600' },
    blue:    { border: 'border-blue-200',    bg: 'bg-blue-100',    bg2: 'bg-blue-500',    text: 'text-blue-600' },
    indigo:  { border: 'border-indigo-200',  bg: 'bg-indigo-100',  bg2: 'bg-indigo-500',  text: 'text-indigo-600' },
}

export const Chip = ({
    children,
    className,
    size = 'normal',
    color = 'slate',
    withCircle = false,
    roundKind = 'round',
    ...props
}: ChipProps) => {
    return (
        <span className={twMerge(
            "inline-flex flex-row items-center justify-center gap-2 px-3 py-1 font-medium border",
            roundKind == 'round' && 'rounded-sm',
            roundKind == 'pill' && 'rounded-full',
            ChipColorMap[color]['border'],
            ChipColorMap[color]['bg'],
            ChipColorMap[color]['text'],
            className,
        )} {...props}>
            {withCircle && <ChipCircle color={color} />}
            {children}
        </span>
    )
}

export type ChipCircleProps = SpanProps & {
    color?: ChipColor
}
export const ChipCircle = ({color = 'slate', ...props}: ChipCircleProps) => {
    return (
        <span
            role='presentation'
            aria-hidden
            className={classNames("h-4 w-4 rounded-full", ChipColorMap[color]['bg2'])}
            {...props}
        ></span>
    )
}
