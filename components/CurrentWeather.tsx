import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import {useAppSelector} from '../store/hooks';
import  {IWeatherState} from '../slices/weatherSlice';
import { RootState } from "../store/store";


interface ICurrentWeatherProps {

}



export default function CurrentWeather (props:ICurrentWeatherProps)  {

    const weatherData = useAppSelector((state: RootState) => state.weather.data);

    return (  
        <>
        {!!weatherData && (
    <Card style={styles.container}>
            <Card.Content>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            
    </Card>
        )}
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
    }
})
