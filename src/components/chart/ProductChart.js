import "./productChart.css";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import ProductCharts from "../../pages/data/productList.json";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Ürün Stok Grafiği',
        },
    },
};
const prod = [];
const stock = [];

ProductCharts.forEach((product => {
    prod.push(product.name);
    stock.push(product.stock);
}));


const dataGrid = stock;

export const data = {
    labels: prod,
    datasets: [
        {
            label: 'Ürün Stok',
            tension: 0.7,
            data: dataGrid,
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(250, 246, 246)',
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(250, 246, 246, 0.2)',
            ]

        }
    ],
};

export default function ProductChart() {
    return (
        <div className="productChart">
            <Chart type="bar" options={options} data={data} width="500" />
        </div>
    )
}
