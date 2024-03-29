import * as Plot from "@observablehq/plot";

import { Bill } from "@/components/Bill";
import { Card } from "@/components/Card";
import { Stat } from "@/components/Stat";
import { StateNav } from "@/components/StateNav";
import penguins from '@/data/penguins.json';

import PlotFigure from './PlotFigure';

export default function Home() {
	return (<>
		<div className='flex flex-col gap-8 py-8 px-24'>
			<StateNav stateCode="TX" stateName="Texas" prev="Tennessee" next="Utah" />
			<div className="flex flex-row gap-4">
				<Card>
					<Stat
						measure="Population"
						value={'30.0'}
						unit='m' />
				</Card>
				<Card>
					<Stat
						measure="Households"
						about="from 2021"
						value={12.1}
						unit='m'
						trending={20} />
				</Card>
				<Card>
					<Stat
						measure="People in poverty"
						about="From 2021"
						value={14.2}
						unit={'%'}
						trending={-0.5} />
				</Card>
			</div>
			<section className="flex flex-col gap-4">
				<h3 className="text-2xl">Bills</h3>
				<div className="grid grid-cols-2 gap-4">
					<Bill
						uniqueId="HR155"
						type="House Resolution"
						desc="Recognizing February 14, 2023, as Texas LGBTQ Chambers of Commerce Advocacy Day at the State Capitol."
						status={"Pass"} />
					<Bill
						uniqueId="HB428"
						type="House Bill"
						desc="Relating to the creation of a task force to evaluate the housing needs of senior citizens who are lesbian, gay, bisexual, transgender, queer, or questioning."
						status={"Intro"}
						isRecessed />
					<Bill
						uniqueId="SR3"
						type="Senate Resolution"
						desc="Recognizing Resource Center on the occasion of its 40th anniversary."
						status={"Pass"} />
					<Bill
						uniqueId="HR85"
						type="House Resolution"
						desc="Honoring Victor L. Holmes and Mark A. Phariss of Plano for their civic engagement and contributions to the LGBTQ+ community."
						status={"Intro"}
						isRecessed />
				</div>
			</section>
		</div>
	</>)
}

export const GraphPlot = () => {
	return (
		<PlotFigure
			options={{
				marks: [
					Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm"})
				]
			}}
		/>
	)
}
