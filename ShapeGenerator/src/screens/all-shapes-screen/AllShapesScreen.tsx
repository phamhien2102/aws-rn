import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Circle as CircleModel, Triangle as TriangleModel, Square as SquareModel } from '../../models';
import { randomInt } from '../../helpers/utils';
import Square from '../../components/square';
import Circle from '../../components/circle';
import Triangle from '../../components/triangle';

const AllShapesScreen = () => {
    const [list, setList] = useState<any[]>([]);

    const addNewShape = (locationX: number, locationY: number) => {
        const random = randomInt(0, 2);
        let shape: CircleModel | SquareModel | TriangleModel;
        switch (random) {
            case 0:
                shape = new CircleModel();
                break;
            case 1:
                shape = new SquareModel();
                break;
            default:
                shape = new TriangleModel();
                break;
        }
        shape.x = locationX;
        shape.y = locationY;
        setList([...list, shape]);
    };

    const renderShape = () =>
        list.map((item, index) => {
            if (item instanceof CircleModel) {
                return <Circle key={index} data={item} />;
            } else if (item instanceof SquareModel) {
                return <Square key={index} data={item} />;
            } else {
                return <Triangle key={index} data={item} />;
            }
        });

    const handlePress = (evt: any) => {
        const locationX = evt.nativeEvent.locationX;
        const locationY = evt.nativeEvent.locationY;
        addNewShape(locationX, locationY);
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlePress} activeOpacity={1}>
            {renderShape()}
        </TouchableOpacity>
    );
};

export default AllShapesScreen;
