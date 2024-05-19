import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/coverImg/orderCover.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from "../../../hooks/useProduct";
import OrderProduct from "../OrderProduct/OrderProduct";
import { useParams } from "react-router-dom";

const Order = () => {

    const categories = ['bear', 'bunnies', 'dall', 'cat', 'dog']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabindex] = useState(initialIndex)

    // Product Load
    const [products] = useProduct()
    const bears = products.filter(item => item.category === "bear")
    const bunnies = products.filter(item => item.category === "bunnies")
    const dalls = products.filter(item => item.category === "dall")
    const cats = products.filter(item => item.category === "cat")
    const dogs = products.filter(item => item.category === "dog")
    return (
        <div>
            <Cover img={orderCoverImg} title="Order Teddy"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList className="text-center">
                    <Tab >Bear</Tab>
                    <Tab>Bunnies</Tab>
                    <Tab>Dall</Tab>
                    <Tab>Cat</Tab>
                    <Tab>Dog</Tab>
                </TabList>
                <TabPanel>
                    <OrderProduct items={bears}></OrderProduct>
                </TabPanel>
                <TabPanel>
                    <OrderProduct items={bunnies}></OrderProduct>
                </TabPanel>
                <TabPanel>
                    <OrderProduct items={dalls}></OrderProduct>
                </TabPanel>
                <TabPanel>
                    <OrderProduct items={cats}></OrderProduct>
                </TabPanel>
                <TabPanel>
                    <OrderProduct items={dogs}></OrderProduct>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;