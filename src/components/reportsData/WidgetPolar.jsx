import "./widgetPolar.css";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import productData from "../../pages/data/productList.json"

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const pData = [];
const pSold = [];
productData.map(proData => {
    pData.push(proData.name);
    pSold.push(proData.sold);
});

const data = {
    labels: pData,
    datasets: [
        {
            label: "'# of Votes'",
            data: pSold,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(35, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(25, 159, 64, 0.5)',
                'rgba(150, 250, 75, 0.5)',
                'rgba(25, 250, 75, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function WidgetPolar() {
    return (
        <div className='widgetPolar'>
            <h3 className="polarTitle">Satılan Ürünler</h3>
            <PolarArea data={data} />
        </div>
    )
}
