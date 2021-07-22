import { Shape } from '../models/Shape';
import { ShapeTypes } from '../constants/common';
import { Circle, Square, Triangle } from '../models';

interface IParser {
    parseInfoCircle(data: any): Circle;
    parseInfoSquare(data: any): Square;
    parseInfoTriangle(data: any): Triangle;
}
export class ParserImp implements IParser {
    parseInfoCircle(data: any): Circle {
        const circle = new Circle();
        circle.imageUrl = data.imageUrl;
        circle.hex = data.hex;
        return circle;
    }

    parseInfoSquare(data: any): Square {
        const square = new Square();
        square.imageUrl = data.imageUrl;
        square.hex = data.hex;
        return square;
    }

    parseInfoTriangle(data: any): Triangle {
        const triangle = new Triangle();
        triangle.imageUrl = data.imageUrl;
        triangle.hex = data.hex;
        return triangle;
    }
}

export const Parser: IParser = new ParserImp();
