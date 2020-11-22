import Header from "./Header";
import {default as EditProfile} from "./ChangeProfile";
import {default as Portofolio} from "./Portofolio";
import {Tabs, Tab} from 'react-bootstrap'
import "./style.css";

export default function Profile() {
  
  return (
    <>
      <Header />
      <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
  <Tab eventKey="Portofolio" title="Portofolio">
    <Portofolio />
  </Tab>
  <Tab eventKey="Profile" title="Edit Profile">
    <EditProfile/>
  </Tab>
</Tabs>
    </>
  );
}
