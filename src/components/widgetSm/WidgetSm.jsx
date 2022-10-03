import "./widgetSm.css";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Users from "../data/users.json";

export default function WidgetSm() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Yeni Katılan Üyeler</span>
            <ul className="widgetSmList">
                {
                    Users.map(post => {
                        return (
                            <li className="widgetSmListItem" key={post.id}>
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetSmImg" />
                                <div className="widgetSmUser">
                                    <span className="widgerSmUsername">{post.fullName}</span>
                                    <span className="widgerSmUserTitle">{post.Job}</span>
                                </div>
                                <button className="widgetSmButton" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                                    Display
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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
                        Kullanıcı Bilgileri
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        Users.map(modalPost => {
                            return (
                                <div key={modalPost.id}>
                                    <h4>{modalPost.fullName}</h4>
                                    <p>
                                        Meslek: {modalPost.Job}<br />
                                        Doğum Tarihi: {modalPost.Date}<br />
                                        Doğum Yeri: {modalPost.birthPlace}
                                    </p>
                                </div>
                            )
                        })
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Çıkış</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
