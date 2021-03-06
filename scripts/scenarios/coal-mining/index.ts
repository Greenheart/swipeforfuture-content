import * as Tutorial from "./tutorial"
import * as Stats from "./stats"

import {
    ScenarioBuilder,
    Scenario,
    combineDefaultEntries,
} from "../../content-utils"
export const builder: ScenarioBuilder = {
    run() {
        const scenario: Scenario = {
            id: "donuts",
            stats: Object.values(Stats.definitions),
            cards: [...Tutorial.cards],
            events: [...Tutorial.events],
            eventCards: {
                ...Tutorial.eventCards,
            },
            defaultState: {
                state: combineDefaultEntries([...Stats.defaultStates]),
                flags: combineDefaultEntries([]),
            },
            worldStateModifiers: [
                {
                    type: "round",
                },
                {
                    type: "debug",
                },
            ],
        }
        return scenario
    },
}
