import classNames from "classnames"
import { ButtonProps, DivProps } from "react-html-props"

export type ToggleSwitchGroupProps = DivProps
export const ToggleSwitchGroup = ({children, ...props}: ToggleSwitchGroupProps) => {
    return (
        <div className="inline-flex gap-2 p-1 bg-slate-100 rounded-lg shadow-inner" {...props}>
            {children}
        </div>
    )
}

export type ToggleSwitchItemProps = ButtonProps & {
    isChecked?: boolean
}
export const ToggleSwitchItem = ({children, isChecked, ...props}: ToggleSwitchItemProps) => {
    return (
        <button
            role="switch"
            aria-checked={isChecked}
            className={classNames(
                "appearance-none py-1 px-2 rounded-md",
                {"bg-white border border-slate-200": isChecked}
            )}
            {...props}
        >
            {children}
        </button>
    )
}
