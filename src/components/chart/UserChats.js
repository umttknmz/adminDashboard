import React from 'react';
import "./userChats.css"
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import membersNumber from "../data/memberNum.json";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Üye Sayısı Grafiği',
        },
    }
};

const labels = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Üye Verisi',
            tension: 0.2,
            radius: 10,
            fill: true,
            data: membersNumber,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
        }
    ],
};


function userChats() {
    return (
        <div className='userChats'>
            <Chart type="line" options={options} data={data} width="500px" />
        </div>
    )
}

export default userChats;