import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() =>{
        const fetchAPI = async () => {
            const dailyData =await fetchDailyData();
            setDailyData(dailyData);
        } 
        fetchAPI();
    });

    const lineChart = (
        <Line 

        />

    );

    return(
        <h1>Charts</h1>
    )
}

export default Chart;