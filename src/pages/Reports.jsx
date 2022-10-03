import DonationNumber from "../components/reportsData/DonationNumber"
import TotalDonation from "../components/reportsData/TotalDonation"
import WidgetBar from "../components/reportsData/WidgetBar"
import WidgetPolar from "../components/reportsData/WidgetPolar"
import UserChats from "../components/chart/UserChats"
import "bootstrap/dist/css/bootstrap.min.css";

import "./reports.css"
import Charts from "../components/chart/Charts";
import ProductChart from "../components/chart/ProductChart"
import TotalProduct from "../components/reportsData/TotalProduct"

export default function Reports() {
    return (
        <div className="reports">
            <div className="col-12">
                <div className="reportsWidgets">
                    <WidgetBar />
                    <WidgetPolar />
                    <div className="reportsInfo">
                        <TotalDonation />
                        <DonationNumber />
                        <TotalProduct />
                    </div>
                </div>
            </div>
            <UserChats />
            <Charts />
            <ProductChart />
        </div>
    )
}
