import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
import categories from "./data/categories.json";

const minValueValidator = value => value >= 0 ? "" : "The value must be 0 or higher";

const NonNegativeNumericInput = fieldRenderProps => {
    const {
        validationMessage,
        visited,
        ...others
    } = fieldRenderProps;
    return <div>
        <NumericTextBox {...others} />
        {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>;
};

const EditForm = props => {
    return <Dialog title={"Kullanıcıyı Düzenle"} onClose={props.cancelEdit}>
        <Form onSubmit={props.onSubmit} initialValues={props.item} render={formRenderProps => <FormElement style={{
            minWidth: 500
        }}>
            <fieldset className={"k-form-fieldset"}>
                <div className="mb-3">
                    <Field name={"UserFullName"} component={Input} label={"Adı Soyadı"} />
                </div>
                <div className="mb-3">
                    <Field name={"Job"} component={DropDownList} data={categories} textField={"JobName"} label={"Meslek"} />
                </div>
                <div className="mb-3">
                    <Field name={"Donate"} component={NonNegativeNumericInput} label={"Toplam Yaptığı Bağış Ücreti"} validator={minValueValidator} />
                </div>
            </fieldset>
            <div className="k-form-buttons">
                <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" disabled={!formRenderProps.allowSubmit}>
                    Güncelle
                </button>
                <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={props.cancelEdit}>
                    Çıkış
                </button>
            </div>
        </FormElement>} />
    </Dialog>;
};

export default EditForm;