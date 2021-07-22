import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ShapeApi } from '../../services/networking';
import { Square as SquareModel } from '../../models';
import { Parser } from '../../helpers/parser';
import FastImage from 'react-native-fast-image';
import { Loading } from '../loading';
import Draggable from '../draggable';
import { randomSizeWithConditions } from '../../helpers/utils';

interface Props {
    data: SquareModel;
}
const Square = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [square, setSquare] = useState<SquareModel>(props.data);

    useEffect(() => {
        handleDrawCircle();
    }, []);

    const handleDrawCircle = async () => {
        try {
            setIsLoading(true);
            let res = await ShapeApi.getInfoImage();
            setIsLoading(false);
            let data = Parser.parseInfoSquare(res?.[0]);
            let size = randomSizeWithConditions();
            setSquare(prev => ({ ...prev, imageUrl: data.imageUrl, height: size, width: size }));
        } catch (e) {
            console.log('@Get info square failed', e);
        }
    };

    return (
        <Draggable
            width={square.width}
            height={square.height}
            top={square.y - square.width / 2}
            left={square.x - square.height / 2}>
            <TouchableOpacity activeOpacity={1}>
                <FastImage
                    style={[styles.wrapper, { width: square.width, height: square.height }]}
                    source={{
                        uri: square.imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                {isLoading && <Loading />}
            </TouchableOpacity>
        </Draggable>
    );
};

export default React.memo(Square);
