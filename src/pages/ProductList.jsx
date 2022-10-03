import "./productList.css";
import { React, useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./data/productList.json";
import { Button } from "@progress/kendo-react-buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductChart from "../components/chart/ProductChart";
import { Link } from "react-router-dom";

// import ButtonBootstrap from 'react-bootstrap/Button';
// import Modal from "react-bootstrap/Modal"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

// const productData = [{ id: 1 }];

// products.map(product => {
//     productData.push(product);
//     console.log(productData);
// })

export default function ProductList() {
    const [data, setData] = useState(products);
    // const [form, setForm] = useState({ name: "", stock: "", status: "", price: "" });

    // const deneme = (e) => {
    //     e.preventDefault();
    //     // productData.push({ 'id': data.length + 1, 'name': name.value, 'stock': stock.value, 'status': status.value, 'price': price.value });
    //     // setData(productData);
    //     console.log(form);
    // }

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setForm({ id: productData.length + 1, [e.target.name]: e.target.value });
    // }

    return (
        <div className="productList">
            <div className="boxProductGrid">
                <div className="titleProduct">
                    <h3 className="productTitle">Ürünler</h3>
                    <Link to="/productAdd">
                        <Button themeColor={"primary"}><FontAwesomeIcon icon={faSquarePlus} /> Ürün Ekle</Button>
                    </Link>
                </div>
                <Grid style={{ height: "400px", }} data={data}>
                    <Column field="name" title="Ürün Adı" width="250px" />
                    <Column field="stock" title="Stok Durumu" />
                    <Column field="status" title="Satış Durumu" />
                    <Column field="price" title="Fiyat($)" />
                </Grid>
            </div>
            <ProductChart />
        </div>
    )
}






// const [modalShow, setModalShow] = useState(false);
// <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    // function MyVerticallyCenteredModal(props) {
    //     return (
    //         <Modal
    //             {...props}
    //             size="lg"
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered >
    //             <Modal.Header closeButton>
    //                 <Modal.Title id="contained-modal-title-vcenter">
    //                     Ürün Ekle
    //                 </Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <Form id="productAdd" >
    //                     <Form.Group className="mb-3">
    //                         <Form.Label>Ürün Adı</Form.Label>
    //                         <Form.Control type="text" placeholder="Ürün Adı" id="formName" name="name" onChange={handleChange} />
    //                     </Form.Group>
    //                     <Form.Group className="mb-3">
    //                         <Form.Label>Stok</Form.Label>
    //                         <Form.Control type="text" placeholder="Stok" id="formStock" name="stock" onChange={handleChange} />
    //                     </Form.Group>
    //                     <label className="mb-3">Durum</label>
    //                     <Form.Select className="mb-3" id="formStatus" name="status" onChange={handleChange} >
    //                         <option>Satılabilir</option>
    //                         <option>Beklemede</option>
    //                         <option>Satılamaz</option>
    //                     </Form.Select>
    //                     <Form.Label>Fiyat</Form.Label>
    //                     <InputGroup className="mb-3" >
    //                         <Form.Control aria-label="Amount (to the nearest dollar)" id="formPrice" name="price" onChange={handleChange} />
    //                         <InputGroup.Text>.00</InputGroup.Text>
    //                         <InputGroup.Text>$</InputGroup.Text>
    //                     </InputGroup>
    //                     <ButtonBootstrap variant="primary" onClick={deneme}>
    //                         <FontAwesomeIcon icon={faTable} /> Ekle
    //                     </ButtonBootstrap>
    //                 </Form>
    //             </Modal.Body>
    //             <Modal.Footer>
    //                 <ButtonBootstrap onClick={props.onHide}>
    //                     <FontAwesomeIcon icon={faRightFromBracket} /> Çıkış
    //                 </ButtonBootstrap>
    //             </Modal.Footer>
    //         </Modal>
    //     );
    // }
