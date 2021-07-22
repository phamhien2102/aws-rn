import { Shape } from './Shape';
import { ShapeTypes } from '../constants/common';

export class Square extends Shape {
    width: number = 0;
    height: number = 0;
    type = ShapeTypes.Square;
}
