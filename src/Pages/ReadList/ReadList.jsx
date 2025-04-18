import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReadList = () => {
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read</h2>
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;