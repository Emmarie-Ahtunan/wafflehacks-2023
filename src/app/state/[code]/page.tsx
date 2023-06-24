import { ErrorBoundary } from 'react-error-boundary';

import usStates from '@/data/us-states.json';

import NotFound from './not-found';

type PageProps = {
    params: {
        code: string
    }
}

export default async function Page({ params }: PageProps) {
    const usStateData = fetchUsStates();
    const [usStates] = await Promise.all([usStateData]);

    return (
        <div>My Post: {params.code}</div>
    )
}



type UsState = {
    State: string,
    "WDI State": string,
    "WDI Legislature": string,
    Abbreviation: string,
    "Official Website": string,
    Legislature: string,
    Kind: string,
}

async function fetchUsStates() {
    const res = await fetch('./../../data/us-states.json');
    return res.json()
}

type StatePrimaryKeys = {
    codes: string[],
    names: string[],
}
function getUsStatePrimaryKeys(states: UsState[]): StatePrimaryKeys {
    const usStateCodes: string[] = [];
    const usStateNames: string[] = [];

    for(const usState of states) {
        usStateCodes.push(usState.Abbreviation);
        usStateNames.push(usState.State);
    }

    return {
        codes: usStateCodes,
        names: usStateNames,
    }
}
