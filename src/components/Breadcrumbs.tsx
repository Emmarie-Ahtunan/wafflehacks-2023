import classNames from "classnames";
import { LIProps, NavProps } from "react-html-props";

export type BreadcrumbsProps = NavProps & {
    items: BreadcrumbItemProps[]
}

export const Breadcrumbs = ({items, ...props}: BreadcrumbsProps) => {
    const itemLength = items.length;
    return (
        <nav aria-label={props["aria-label"] ?? 'Breadcrumbs'} {...props}>
            <ol className="flex flex-row">
                {items.map(
                    (item, index) => (
                        <BreadcrumbItem
                            isLast={item.isLast}
                            href={item.href}
                            key={`breadcrumb-${index}`}
                        >
                                {item.children}
                        </BreadcrumbItem>
                    )
                )}
            </ol>
        </nav>
    )
}

export type BreadcrumbItemProps = LIProps & {
    isLast?: boolean,
    href?: string,
}
export const BreadcrumbItem = ({
    children,
    isLast = false,
    href = "#",
    ...props
}: BreadcrumbItemProps) => {
    const lastStyle = 'font-medium';
    const nonLastStyle = "text-slate-500 after:content-['/'] after:text-slate-300 after:px-2 after:font-normal";

    return (
        <li
            className={classNames({
                [lastStyle]: isLast,
                [nonLastStyle]: !isLast,
            })}
            aria-current={isLast ? 'page' : false}
            {...props}
        >
            <a href={href}>{children}</a>
        </li>
    )
}
