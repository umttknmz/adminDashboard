import "./donationNumber.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import DonationList from "../data/donation.json";


export default function DonationNumber() {
    return (
        <div className="donationNumber">
            <h3 className="donationTitle">Bagış yapan Kişi Sayısı</h3>
            <div className="infoDonation">
                <div className="donationIco">
                    <FontAwesomeIcon icon={faUsersRectangle} />
                </div>
                <div className="donationContent">
                    <span className="contentDonationInfo">{DonationList.length}</span>
                </div>
            </div>
        </div>
    )
}
