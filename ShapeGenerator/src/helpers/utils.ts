import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/dimentions';

export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColor() {
    return (((Math.random() * 0xf0f0f0) << 0).toString(16) + '0').substring(0, 6);
}

export const randomSizeWithConditions = () => {
    let x = 1;
    let size: number;
    if (x === 1) {
        size = randomInt(0.1 * SCREEN_WIDTH, 0.45 * SCREEN_WIDTH);
    } else {
        size = randomInt(0.1 * SCREEN_HEIGHT, 0.45 * SCREEN_HEIGHT);
    }
    return size;
};
