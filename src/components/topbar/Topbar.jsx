import React from 'react';
import './topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGlobe, faGear } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { TextBox } from "@progress/kendo-react-inputs";
import Admin from "../data/admin.json";
import { Link } from 'react-router-dom';

export default function Topbar() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <Link to="/" className='logoImageSrc'>
                        <span className='logo'><img src="https://cdn-icons-png.flaticon.com/512/7404/7404038.png" alt="" className="adminLogo" /> Yönetim Paneli</span>
                    </Link>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <FontAwesomeIcon icon={faBell} size="lg" />
                        <span className='topIconBadge'>8</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <FontAwesomeIcon icon={faGlobe} size="lg" />
                    </div>
                    <div className='topbarIconContainer'>
                        <FontAwesomeIcon icon={faGear} size="lg" onClick={() => setModalShow(true)} />
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2919/2919863.png" alt="" className="topAvatar" />
                </div>
            </div>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ayarlar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        Admin.map(adm => {
                            return (
                                <div key={adm.id}>
                                    <h4>Kullanıcı Bilgileri</h4>
                                    <p>
                                        <label>Kullanıcı Adı</label>
                                        <TextBox style={{ width: "100%", marginBottom: "5px" }} disabled="true" name="username" value={adm.username} />
                                        <label>Adı</label>
                                        <TextBox style={{ width: "100%", marginBottom: "5px" }} disabled="true" name="name" value={adm.name} />
                                        <label>Soyadı</label>
                                        <TextBox style={{ width: "100%", marginBottom: "5px" }} disabled="true" name="surname" value={adm.surname} />
                                        <label>E-Mail</label>
                                        <TextBox style={{ width: "100%", marginBottom: "5px" }} disabled="true" name="email" value={adm.email} />
                                        <label>Şifre</label>
                                        <TextBox style={{ width: "100%", marginBottom: "5px" }} type="password" disabled="true" name="password" value={adm.password} />
                                    </p>
                                </div>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <span className="titleInfo">
                        Yönetici izni olmadan bilgiler güncellenemez.
                        İzin isteyiniz!
                    </span>
                    <div className="contentData">
                        <Button>Yöneticiden izni iste</Button>
                        <Button onClick={props.onHide} className="mx-2">Çıkış</Button>
                    </div>
                </Modal.Footer>
            </Modal >
        );
    }
}
