import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Square from '../../components/square';
import { Square as SquareModel } from '../../models';

const SquareScreen = () => {
    const [list, setList] = useState<SquareModel[]>([]);

    const addSquare = (locationX: number, locationY: number) => {
        const square = new SquareModel();
        square.x = locationX;
        square.y = locationY;
        setList(prev => [...prev, square]);
    };

    const handlePress = (evt: any) => {
        const locationX = evt.nativeEvent.locationX;
        const locationY = evt.nativeEvent.locationY;
        addSquare(locationX, locationY);
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlePress} activeOpacity={1}>
            {list.map((item, index) => (
                <Square key={index} data={item} />
            ))}
        </TouchableOpacity>
    );
};

export default SquareScreen;
