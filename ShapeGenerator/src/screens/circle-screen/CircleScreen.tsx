import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Circle as CircleModel } from '../../models';
import Circle from '../../components/circle';

const CircleScreen = () => {
    const [list, setList] = useState<CircleModel[]>([]);

    const addCircle = async (locationX: number, locationY: number) => {
        const circle = new CircleModel();
        circle.x = locationX;
        circle.y = locationY;
        setList(prev => [...prev, circle]);
    };

    const handlePress = (evt: any) => {
        const locationX = evt.nativeEvent.locationX;
        const locationY = evt.nativeEvent.locationY;
        addCircle(locationX, locationY);
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlePress} activeOpacity={1}>
            {list.map((item, index) => (
                <Circle key={index} data={item} />
            ))}
        </TouchableOpacity>
    );
};

export default CircleScreen;
