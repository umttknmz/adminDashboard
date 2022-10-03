import "./totalDonation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import Donation from "../data/donation.json";

const dnt = [];
const col = (a, b) => a + b;

Donation.map(donate => {
    dnt.push(donate.Donate);
})
export default function TotalDonation() {
    return (
        <div className="totalDonation">
            <h3 className="totalTitle">Toplam Bağış Ücreti</h3>
            <div className="infoTotal">
                <div className="totalIco">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                </div>
                <div className="totalContent">
                    <span className="contentTotalInfo">{dnt.reduce(col) + "$"}</span>
                </div>
            </div>
        </div>
    )
}
