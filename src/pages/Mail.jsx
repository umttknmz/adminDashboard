import "./mail.css";
import * as React from "react";
// import { Editor, EditorTools } from "@progress/kendo-react-editor"; // Editör Kütüphanesi
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, TextArea, } from "@progress/kendo-react-inputs";
import emailjs from "@emailjs/browser";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Link } from "react-router-dom";


//KendoUI editörün içerik yapıları

// const { Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
//     AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent, Outdent, OrderedList, UnorderedList, Undo, Redo, FontSize,
//     FontName, FormatBlock, Link, Unlink, InsertImage, ViewHtml, InsertTable, AddRowBefore, AddRowAfter,
//     AddColumnBefore, AddColumnAfter, DeleteRow, DeleteColumn, DeleteTable, MergeCells, SplitCell, } = EditorTools;

export default function Mail() {
    const [visible, setVisible] = React.useState(false);
    const [dialog, setDialog] = React.useState("");

    const form = React.useRef();
    function sendToMail(e) {
        e.preventDefault();
        emailjs.sendForm('service_x0d6rds', 'template_qm0s73e', e.target, '0JFaawuH0iwq11jm0')
            .then((result) => {
                setVisible(true);
                setDialog("Mail başarılı bir şekilde gönderildi.");
                console.log(result.text + " Mail başarılı bir şekilde gönderildi.");
            }, (error) => {
                setVisible(true);
                setDialog("Mail gönderilirken bir hata oluştu! Lütfen log kontrol ediniz!");
                console.log(error.text + "Mail gönderilirken bir hata oluştu!");
            });
    }
    return (
        <div className="mail">
            <div className="editorMail">
                <h3 className="titleMail">E-Mail Gönder</h3>
                <form ref={form} onSubmit={sendToMail} id="formContent">
                    <div className="contentTitle d-flex">
                        <button className="sendMail" type="submit">Gönder</button>
                        <div className="sendTextTo" style={{ width: "100%" }}>
                            <Input placeholder="Gönderen Mail Adresi" name="userTo_mail" disabled className="ms-2 mb-2" value={"test.dashboard.umit@gmail.com"} />
                            <Input type="email" name="user_mail" placeholder="Gönderilecek Mail Adresi" className="ms-2 mb-2" />
                            <Input type="text" name="subject" placeholder="Mail Başlığı" className="ms-2 mb-2" />
                        </div>
                    </div>
                    <TextArea rows={10} autoSize={true} className="textAreaMessage" name="message" placeholder="Göndereceğiniz Mesajı yazınız" />

                    {/*Editorde veri gönderme hatası aldığım için şimdilik textarea ile yaptım.  */}
                    {/* <Editor
                        
                        tools={[
                            [Bold, Italic, Underline, Strikethrough], [Subscript, Superscript], [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                            [Indent, Outdent], [OrderedList, UnorderedList], FontSize, FontName, FormatBlock,
                            [Undo, Redo], [Link, Unlink, InsertImage, ViewHtml], [InsertTable],
                            [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter], [DeleteRow, DeleteColumn, DeleteTable], [MergeCells, SplitCell],]}
                        contentStyle={{ height: 400 }}
                    /> */}
                </form>
            </div>
            {visible && (
                <Dialog title={"Mail Bildirim Mesajı"} onClose={false} width={350} height={200}>
                    <p style={{ margin: "20px", textAlign: "center", }}>{dialog}</p>
                    <Link to="/">
                        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" style={{float:"right"}}>
                            Tamam
                        </button>
                    </Link>
                </Dialog>
            )}
        </div>

    )
}
