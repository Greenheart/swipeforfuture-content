import {
    CardData,
    worldQuery,
    addAction,
    createCardFromTemplate,
    unsplashImage,
    createCardTemplate,
} from "../../content-utils"
import { statIds } from "./stats"

export const catTemplate = createCardTemplate({
    image: unsplashImage("1548247416-ec66f4900b2e"),
    location: "",
    weight: 1,
})

export const catastrophicCards = statIds.map<CardData>((stat) => {
    const partial: Partial<CardData> = {
        title: `Look at me! I'm ${stat.toUpperCase()} Cat`,
        text:
            "Your cat needs some love and tenderness. Try to make time in your busy schedule",
        isAvailableWhen: [
            worldQuery({
                [stat]: [0, 100],
            }),
        ],
        actions: {
            left: addAction({ [stat]: -10 }),
            right: addAction({ [stat]: 10 }),
        },
    }
    return createCardFromTemplate(catTemplate, partial)
})
