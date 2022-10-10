import React from "react"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Content from '../Content/Content';
import SelectButtton from '../SelectButton/SelectButtton';


function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="vote">
        <Content/>
      </Tab>
      <Tab eventKey="profile" title="Breeds">
        <SelectButtton/>
        
      </Tab>
      
     
    </Tabs>
  );
}

export default FillExample;