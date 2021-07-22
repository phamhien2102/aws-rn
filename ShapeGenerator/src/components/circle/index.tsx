import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { ShapeApi } from '../../services/networking';
import { Circle as CircleModel } from '../../models';
import { Parser } from '../../helpers/parser';
import FastImage from 'react-native-fast-image';
import { Loading } from '../loading';
import { TouchableOpacity } from 'react-native';
import { randomSizeWithConditions } from '../../helpers/utils';
import Draggable from '../draggable';

interface Props {
    data: CircleModel;
}

const Circle = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [circle, setCircle] = useState<CircleModel>(props.data);

    useEffect(() => {
        handleDrawCircle();
    }, []);

    const handleDrawCircle = async () => {
        setIsLoading(true);
        let res = await ShapeApi.getInfoColor();
        setIsLoading(false);
        let data = Parser.parseInfoCircle(res?.[0]);
        let size = randomSizeWithConditions();
        data.r = size;
        setCircle(prev => ({ ...prev, imageUrl: data.imageUrl, r: data.r }));
    };

    return (
        <Draggable
            width={circle.r}
            height={circle.r}
            borderRadius={circle.r / 2}
            left={circle.x - circle.r / 2}
            top={circle.y - circle.r / 2}>
            <TouchableOpacity activeOpacity={1}>
                {!!circle.imageUrl && (
                    <FastImage
                        style={[styles.wrapper, { width: circle.r, height: circle.r, borderRadius: circle.r / 2 }]}
                        source={{
                            uri: circle.imageUrl,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                )}
                {isLoading && <Loading />}
            </TouchableOpacity>
        </Draggable>
    );
};

export default React.memo(Circle);
