import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { ShapeApi } from '../../services/networking';
import { Triangle as TriangleModel } from '../../models';
import { Parser } from '../../helpers/parser';
import { randomInt, randomSizeWithConditions } from '../../helpers/utils';
import Svg, { Image, Polygon, Defs, ClipPath } from 'react-native-svg';
import Draggable from '../draggable';
import { Loading } from '../loading';

interface Props {
    data: TriangleModel;
}
const Triangle = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [triangle, setSquare] = useState<TriangleModel>(props.data);

    useEffect(() => {
        handleDrawCircle();
    }, []);

    const handleDrawCircle = async () => {
        const random = randomInt(0, 1);
        if (random === 0) {
            await handleDrawCircleWithColor();
        } else {
            await handleDrawCircleWithImage();
        }
    };

    const handleDrawCircleWithImage = async () => {
        try {
            setIsLoading(true);
            let res = await ShapeApi.getInfoImage();
            let data = Parser.parseInfoTriangle(res?.[0]);
            let size = randomSizeWithConditions();
            setSquare(prev => ({ ...prev, height: size, width: size, imageUrl: data.imageUrl }));
        } catch (e) {
            console.log('@Get info square failed', e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDrawCircleWithColor = async () => {
        try {
            setIsLoading(true);
            let res = await ShapeApi.getInfoColor();
            let data = Parser.parseInfoTriangle(res?.[0]);
            let size = randomSizeWithConditions();
            setSquare(prev => ({ ...prev, height: size, width: size, imageUrl: data.imageUrl }));
        } catch (e) {
            console.log('@Get info square failed', e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Draggable width={triangle.width} height={triangle.height} top={triangle.y} left={triangle.x}>
            <TouchableOpacity activeOpacity={1}>
                <Svg>
                    <Defs>
                        <RandomPolygon distance={triangle.width} />
                    </Defs>

                    <Image
                        x={0}
                        y={0}
                        width={triangle.width}
                        height={triangle.height}
                        preserveAspectRatio="xMidYMid slice"
                        opacity="0.5"
                        href={{ uri: triangle.imageUrl }}
                        clipPath="url(#clip)"
                    />

                    {isLoading && <Loading />}
                </Svg>
            </TouchableOpacity>
        </Draggable>
    );
};

const RandomPolygon = ({ distance }: { distance: number }) => {
    const pointA1 = 0;
    const pointA2 = 0;
    const pointB1 = 0;
    const pointB2 = distance;
    const pointC1 = distance;
    const pointC2 = distance;

    return (
        <ClipPath id="clip">
            <Polygon
                points={`${pointA1},${pointA2} ${pointB1},${pointB2} ${pointC1},${pointC2}`}
                fill="lime"
                stroke="purple"
                strokeWidth="1"
            />
        </ClipPath>
    );
};
export default React.memo(Triangle);
