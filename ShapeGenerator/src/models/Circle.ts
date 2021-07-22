import { Shape } from './Shape';
import { ShapeTypes } from '../constants/common';

export class Circle extends Shape {
    r: number = 0;
    type = ShapeTypes.Circle;
}
