import "./featuredInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Maliyet</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,41</span>
                    <span className="featuredMoneyRate">-11.4
                        <FontAwesomeIcon icon={faArrowDown} className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Geçen Ay</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Satış</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,41</span>
                    <span className="featuredMoneyRate">-1.4
                        <FontAwesomeIcon icon={faArrowDown} className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Geçen Ay</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Bağış</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,221</span>
                    <span className="featuredMoneyRate">+2.4
                        <FontAwesomeIcon icon={faArrowUp} className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Geçen Ay</span>
            </div>
        </div>
    )
}
