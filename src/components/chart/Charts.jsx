import "./chart.css";
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, } from "@progress/kendo-react-charts";
import data from "../data/power.json";

export default function Charts() {
    const categories = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz","Agustos","Eylül","Ekim","Kasım","Aralık"];
    return (
        <div className="chart">
            <h3 className="chartTitle">Yıllık Bagış Durumu</h3>
            <Chart>
                <ChartTitle text="Yapılan Bagış" />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        title={{
                            text: "Aylar",
                        }}
                        categories={categories}
                    />
                </ChartCategoryAxis>
                <ChartSeries>
                    <ChartSeriesItem type="line" data={data} />
                </ChartSeries>
            </Chart>

        </div>
    )
}

