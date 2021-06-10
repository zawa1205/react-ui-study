import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TabPage() {
 
  return (
      <div className="slider-wrapper">
  <Tabs>
    <TabList>
      <Tab>ペンギン</Tab>
      <Tab>イルカ</Tab>
      <Tab>サメ</Tab>
    </TabList>

    <TabPanel>
      <h2>コウテイペンギン</h2>
      <h2>オウサマペンギン</h2>
      <h2>アデリーペンギン</h2>
      <h2>ジェンツーペンギン</h2>
      <h2>ヒゲペンギン</h2>
      <h2>マカロニペンギン</h2>
      <h2>キタイワトビペンギン</h2>
      <h2>ミナミイワトビペンギン</h2>
      <h2>フンボルトペンギン</h2>
      <h2>ケープペンギン</h2>
      <h2>マゼランペンギン</h2>
      <h2>コガタペンギン</h2>
    </TabPanel>
    <TabPanel>
      <h2>イルカ１</h2>
      <h2>イルカ２</h2>
      <h2>イルカ３</h2>
      <h2>イルカ４</h2>
      <h2>イルカ５</h2>
    </TabPanel>
    <TabPanel>
    <h2>サメ１</h2>
    <h2>サメ２</h2>
    <h2>サメ３</h2>
    <h2>サメ４</h2>
    <h2>サメ５</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
}