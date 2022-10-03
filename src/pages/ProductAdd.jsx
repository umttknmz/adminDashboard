import "./productAdd.css";
import * as React from "react";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import products from "./data/productList.json";
// import { useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Link } from "react-router-dom";

export default function ProductAdd() {
    // const [data, setData] = useState(products);

    const [visible, setVisible] = React.useState(false);
    const [dialog, setDialog] = React.useState("");

    const handleClickData = (e) => {
        e.preventDefault();
        products.push({ 'name': e.target.name.value, 'stock': e.target.stock.value, 'status': e.target.status.value, 'price': e.target.price.value });
        setDialog("Ürün Ekleme Yapılmıştır.");
        setVisible(true);
    }
    const handleChangeProduct = (e) => {
        e.preventDefault()
        console.log({ [e.target.name]: e.target.value });
    }
    return (
        <div className='productAdd'>
            <div className="newProductAdd">
                <Form onSubmit={handleClickData}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ürün Adı</Form.Label>
                        <Form.Control type="text" placeholder="iPhone 12" className="mb-2" name="name" onChange={handleChangeProduct} />
                        <Form.Label>Ürün Stok Durumu</Form.Label>
                        <Form.Control type="number" placeholder="10" className="mb-2" name="stock" onChange={handleChangeProduct} />
                        <Form.Label>Ürün Durumu</Form.Label>
                        <Form.Select className="mb-2" name="status" onChange={handleChangeProduct} defaultValue="Seçilmemiş">
                            <option>Satılabilir</option>
                            <option>Beklemede</option>
                            <option>Satılamaz</option>
                        </Form.Select>
                        <Form.Label>Ürün Fiyatı</Form.Label>
                        <Form.Control type="number" placeholder="500" className="mb-2" name="price" onChange={handleChangeProduct} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <FontAwesomeIcon icon={faTable} /> Ekle
                    </Button>
                </Form>
            </div>
            {visible && (
                <Dialog title={"Bilgi Mesajı"} onClose={false} width={300} height={200}>
                    <p style={{ margin: "20px", textAlign: "center", }}>{dialog}</p>
                    <Link to="/products">
                        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" style={{float:"right"}}>
                            Tamam
                        </button>
                    </Link>
                </Dialog>
            )
            }
        </div >
    )
}
