import Header from "./Header";
import { default as EditProfile } from "./ChangeProfile";
import { default as Portofolio } from "./Portofolio";
import { Tabs, Tab } from "react-bootstrap";
import "./style.css";
import { Fragment, forwardRef, createRef } from "react";
import Pdf from "react-to-pdf";

export default function Profile() {
  let docToPrint = createRef();
  return (
    <>
      <Header />
      <Button ref={docToPrint} />
      <Tabs defaultActiveKey="Profile" id="uncontrolled-tab">
        <Tab eventKey="Portofolio" title="Portofolio">
          <div ref={docToPrint}>
            <Portofolio />
          </div>
        </Tab>
        <Tab eventKey="Profile" title="Edit Profile">
          <EditProfile />
        </Tab>
      </Tabs>
    </>
  );
}

const Button = forwardRef((props, ref) => {
  return (
    <Fragment>
      <div className="btn d-flex justify-content-end">
        <Pdf targetRef={ref} filename="Profile.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Download </button>}
        </Pdf>
      </div>
    </Fragment>
  );
});
