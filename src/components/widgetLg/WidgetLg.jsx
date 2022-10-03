import "./widgetLg.css";
import Donation from "../data/donation.json";

export default function WidgetLg() {

  let Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type} </button>;

  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">En Son Yapılan Bağışlar</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Müsteri İsmi</th>
            <th className="widgetLgTh">Bagıs Yaptıgı Tarih</th>
            <th className="widgetLgTh">Bagıs Ücreti</th>
            <th className="widgetLgTh">İslem Durumu</th>
          </tr>
          {
            Donation.map(donate => {
              return (
                <tr className="widgetLgTr" key={donate.id}>
                  <td className="widgetLgUser">
                    {
                      donate.Gender === "Erkek" ? <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="widgetLgImg" />
                        :
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="" className="widgetLgImg" />
                    }
                    <span className="widgetLgName">{donate.FullName}</span>
                  </td>
                  <td className="widgetLgData">{donate.Date}</td>
                  <td className="widgetLgAmount">{donate.Donate + "$"}</td>
                  <td className="widgetLgStatus">
                    <Button type={donate.Status} />
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
