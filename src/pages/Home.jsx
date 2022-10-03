import Charts from "../components/chart/Charts"
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo"
import WidgetLg from "../components/widgetLg/WidgetLg"
import WidgetSm from "../components/widgetSm/WidgetSm"
import UserChats from "../components/chart/UserChats"
import "./home.css"
import ProductChart from "../components/chart/ProductChart"

export default function Home() {
  return (
    <div className="home">
      <ProductChart />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <Charts />
      <FeaturedInfo />
      <div className="chartsGraphic">
        <UserChats />
      </div>
    </div>
  )
}
