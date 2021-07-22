import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Triangle from '../../components/triangle';
import { Triangle as TriangleModel } from '../../models';

const TriangleScreen = () => {
    const [list, setList] = useState<TriangleModel[]>([]);

    const addTriangle = async (locationX: number, locationY: number) => {
        const triangle = new TriangleModel();
        triangle.x = locationX;
        triangle.y = locationY;
        setList([...list, triangle]);
    };
    const handlePress = (evt: any) => {
        const locationX = evt.nativeEvent.locationX;
        const locationY = evt.nativeEvent.locationY;
        addTriangle(locationX, locationY);
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlePress} activeOpacity={1}>
            {list.map((item, index) => (
                <Triangle key={index} data={item} />
            ))}
        </TouchableOpacity>
    );
};

export default TriangleScreen;
