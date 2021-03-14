import { stat, defaultState } from "../../content-utils"

export const definitions = {
    JobsAndEconomy: stat("Jobs & Economy", "GiWallet", "70%"),
    Environment: stat("Environment", "GiWheat", "70%"),
    MinerPopularity: stat("Miner Popularity", "IoIosPeople"),
    UndecidedPopularity: stat("Undecided Popularity", "GiPerson", "70%"),
    EnvironmentalistPopularity: stat(
        "Environmentalist Popularity",
        "GiLindenLeaf",
        "70%",
    ),
    Money: stat("Money", "GiMoneyStack", "70%"),
    GreenEnergy: stat("Green Energy", "GiLightBulb", "70%"),
}
export const JobsAndEconomy = definitions.JobsAndEconomy.id
export const Environment = definitions.Environment.id
export const MinerPopularity = definitions.MinerPopularity.id
export const UndecidedPopularity = definitions.UndecidedPopularity.id
export const EnvironmentalistPopularity =
    definitions.EnvironmentalistPopularity.id
export const Money = definitions.Money.id
export const GreenEnergy = definitions.GreenEnergy.id

export const defaultStates = [
    defaultState(JobsAndEconomy, 50),
    defaultState(Environment, 50),
    defaultState(MinerPopularity, 50),
    defaultState(UndecidedPopularity, 50),
    defaultState(EnvironmentalistPopularity, 50),
    defaultState(Money, 50),
    defaultState(GreenEnergy, 20),
]
