import { getRandomInt} from "./getRandomInt";

export const getSeveralRandomInt = (numberCount: number, maxNumber: number): number[] => {
    const randomNumbers = new Set<number>();

    while (randomNumbers.size < numberCount) {
        const randomNumber = getRandomInt(maxNumber);
        randomNumbers.add(randomNumber)
    }

    return [...randomNumbers];
}