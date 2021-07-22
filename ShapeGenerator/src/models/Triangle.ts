import { Shape } from './Shape';
import { ShapeTypes } from '../constants/common';

export class Triangle extends Shape {
    width: number = 0;
    height: number = 0;
    type = ShapeTypes.Triangle;
}
