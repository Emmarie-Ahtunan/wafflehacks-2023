import { User } from "iconoir-react"
import { LIProps, NavProps, HeaderProps as HtmlHeaderProps } from "react-html-props"

export type SiteHeaderProps = HtmlHeaderProps
export const SiteHeader = () => {
    return (
        <header className="flex bg-white justify-between items-center px-24 py-4 border-b-2 border-slate-200">
            <HeaderGroup aria-label="Site navigation">
                <HeaderItem>Maps</HeaderItem>
                <HeaderItem>Laws</HeaderItem>
                <HeaderItem>Lorem ipsum</HeaderItem>
            </HeaderGroup>
            <HeaderGroup aria-label="User account">
                <HeaderItem>
                    <span className="flex flex-row gap-2">
                        <User />
                        <span>Username 123</span>
                    </span>
                </HeaderItem>
            </HeaderGroup>
        </header>
    )
}

export type HeaderGroupProps = NavProps
export const HeaderGroup = ({children, ...props}: HeaderGroupProps) => {
    return (
        <nav  {...props}>
            <ul className="flex flex-row gap-6">
                {children}
            </ul>
        </nav>
    )
}

export type HeaderProps = LIProps
export const HeaderItem = ({children, ...props}: HeaderProps) => {
    return (
        <li className='text-slate-900' {...props}>
            {children}
        </li>
    )
}
