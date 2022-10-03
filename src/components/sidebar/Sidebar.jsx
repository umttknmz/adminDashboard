import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse, faTimeline, faArrowTrendUp, faUser, faStore,
    faDollarSign, faChartSimple, faEnvelope, faWindowRestore, faMessage, faSuitcase, faBug
} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Panel</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="linkMenu">
                            <li className="sidebarListItem active">
                                <FontAwesomeIcon icon={faHouse} className="sidebarIcon" /> Ana Sayfa
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faTimeline} className="sidebarIcon" />Analitik
                        </li>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faArrowTrendUp} className="sidebarIcon" /> Satışlar
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Hızlı Menü</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="linkMenu">
                            <li className="sidebarListItem ">
                                <FontAwesomeIcon icon={faUser} className="sidebarIcon" /> Kullanıcılar
                            </li>
                        </Link>
                        <Link to="/products" className="linkMenu">
                            <li className="sidebarListItem">
                                <FontAwesomeIcon icon={faStore} className="sidebarIcon" />Ürünler
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faDollarSign} className="sidebarIcon" /> İşlemler
                        </li>
                        <Link to={"/reports"} className="linkMenu">
                            <li className="sidebarListItem">
                                <FontAwesomeIcon icon={faChartSimple} className="sidebarIcon" /> Raporlar
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Bildirimler & Gönderim işlermleri</h3>
                    <ul className="sidebarList">
                        <Link to="/mail" className="linkMenu">
                            <li className="sidebarListItem ">
                                <FontAwesomeIcon icon={faEnvelope} className="sidebarIcon" /> Mail
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faWindowRestore} className="sidebarIcon" />Geri Bildirim
                        </li>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faMessage} className="sidebarIcon" /> Mesajlar
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Personel İşlemleri</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <FontAwesomeIcon icon={faSuitcase} className="sidebarIcon" /> Yönetim Merkezi
                        </li>
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faBug} className="sidebarIcon" />Hata Raporları
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar