import "./userList.css";
import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { sampleProducts } from "./data/sample-products";
import EditForm from "./EditForm";
import WidgetLg from "../components/widgetLg/WidgetLg";
import UserChats from "../components/chart/UserChats";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { filterBy } from "@progress/kendo-data-query";
import { RangeFilterCell } from "./rangeFilterCell";
import { DropdownFilterCell } from "./dropdownFilterCell";

const categories = Array.from(
    new Set(
        sampleProducts.map((p) => (p.Job ? p.Job.JobName : ""))
    )
);

const CategoryFilterCell = (props) => (
    <DropdownFilterCell
        {...props}
        data={categories}
        defaultItem={"Meslek Seçiniz"}
    />
);

const EditCommandCell = (props) => {
    return (
        <td>
            <button className="btnEditGrid" onClick={() => props.enterEdit(props.dataItem)}>
                <FontAwesomeIcon icon={faPenToSquare} /> Edit
            </button>
        </td>
    );
}

export default function UserList() {
    const [data, setData] = React.useState(sampleProducts);
    const [filter, setFilter] = React.useState();

    const filterChange = (event) => {
        setData(filterBy(sampleProducts, event.filter));
        setFilter(event.filter);
    };

    const [openForm, setOpenForm] = React.useState(false);
    const [editItem, setEditItem] = React.useState({
        UserID: 1,
    });

    const enterEdit = (item) => {
        setOpenForm(true);
        setEditItem(item);
    };

    const handleSubmit = (event) => {
        let newData = data.map((item) => {
            if (event.UserID === item.UserID) {
                item = { ...event };
            }

            return item;
        });
        setData(newData);
        setOpenForm(false);
    };

    const handleCancelEdit = () => {
        setOpenForm(false);
    };

    const MyEditCommandCell = (props) => (
        <EditCommandCell {...props} enterEdit={enterEdit} />
    );

    return (
        <div className='userList' >
            <UserChats />
            <div className="boxTableGrid">
                <h3 className="usersTitle">Kullanıcılar</h3>
                <Grid
                    style={{
                        height: "400px",
                    }}
                    data={data}
                    filterable={true}
                    filter={filter}
                    onFilterChange={filterChange}
                >
                    <Column field="UserFullName" title="Adı Soyadı" width={"auto"} />
                    <Column
                        field="Job.JobName"
                        title="Meslek"
                        filterCell={CategoryFilterCell}
                    />
                    <Column
                        field="Donate"
                        title="Toplam Yaptığı Bağış Ücreti"
                        format="{0:c}"
                        filterCell={RangeFilterCell}
                    />
                    <Column cell={MyEditCommandCell} filterable={false} title="İşlem Seçenekleri" width={200}/>
                </Grid>
                {openForm && (<EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} />)}
            </div>
            <div className="userWidget ">
                <WidgetLg />
            </div>
        </div>
    );
}