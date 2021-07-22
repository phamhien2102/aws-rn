import React from 'react';
import { randomInt } from '../../helpers/utils';
import Circle from '../circle';
import Square from '../square';
import Triangle from '../triangle';

const ShapeRandom = () => {
    const random = randomInt(0, 2);
    switch (random) {
        case 0:
            return <Circle />;
        case 1:
            return <Square />;
        default:
            return <Triangle />;
    }
};

export default React.memo(ShapeRandom);
