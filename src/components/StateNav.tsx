import { ArrowLeft, ArrowRight } from "iconoir-react";
import { HeaderProps, NavProps } from "react-html-props";
import { Chip } from "./Chip";

export type StateNavProps = HeaderProps & {
    stateCode: string,
    stateName: string,
    prev: string,
    next: string,
}
export const StateNav = ({stateCode, stateName, prev, next, ...props}: StateNavProps) => {
    return (
        <header className="flex gap-4 items-center" {...props}>
            <div className="bg-slate-300 h-20 w-20 rounded-lg"></div>
            <span className="flex flex-col gap-2">
                <section className='flex gap-2 items-center'>
                    <h1 className='text-4xl'>{stateName}</h1>
                    <span className='text-slate-400 text-2xl'>{stateCode}</span>
                </section>
                <StateRelativeNav
                    prev={prev} prevHref="#"
                    next={next} nextHref="#" />
            </span>
        </header>
    )
}

export type StateRelativeNavProps = NavProps & {
    prev: string,
    prevHref: string,
    next: string,
    nextHref: string,
}
export const StateRelativeNav = ({
    prev,
    prevHref,
    next,
    nextHref,
    ...props
}: StateRelativeNavProps) => {
    const iconStyles = 'text-slate-500';
	const iconSize = 16;
	const iconStrokeWidth = 2;

	return (
		<nav className="flex flex-row gap-2" {...props}>
            <a href={prevHref}>
                <Chip roundKind="pill">
                    <ArrowLeft className={iconStyles} height={iconSize} width={iconSize} strokeWidth={iconStrokeWidth} />
                    {prev}
                </Chip>
            </a>
            <a href={nextHref}>
                <Chip roundKind="pill">
                        {next}
                        <ArrowRight className={iconStyles} height={iconSize} width={iconSize} strokeWidth={iconStrokeWidth} />
                </Chip>
            </a>
		</nav>
	)
}
