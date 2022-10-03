import "./totalProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import Donation from "../../pages/data/productList.json";

export default function TotalProduct() {
    return (
        <div className="totalproduct">
            <h3 className="totalTitle">Toplam Ürün Sayısı</h3>
            <div className="infoTotal">
                <div className="totalIco">
                    <FontAwesomeIcon icon={faBoxArchive} />
                </div>
                <div className="totalContent">
                    <span className="contentTotalInfo">{Donation.length}</span>
                </div>
            </div>
        </div>
    )
}
