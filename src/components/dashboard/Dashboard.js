import React from 'react';
import '../styles/dashboard.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
// import Academics from './Academics';
import Management from './Management';
import Payment from './Payment';
// import Placement from './Placement';
import { Route, Routes } from 'react-router-dom';
import D_from from './D_from';
import Table from './Table/Table';


function Dashboard() {

    return (
        <div className="dashboard_main_container">
            {/* SideBar component  */}
            <div >
                <Sidebar />
            </div>
            {/* Sidebar end here  */}

            {/* Header and main container components */}
            <div className="dashboard_section_container">
                <div className="dashboard_sidebar">
                    <Header />
                </div>
                <div className="dashboard_content_container">
                    <Routes>
                        <Route path="" element={<Content />} />
                        <Route path="from" element={<D_from />} />
                        {/* <Route path="academic" element={<Academics />} /> */}
                        <Route path="management" element={<Management />} />
                        <Route path="payment" element={<Payment />} />
                        {/* <Route path="placement" element={<Placement />} /> */}
                        <Route path="table" element={<Table/>} />
                    </Routes>
                </div>
            </div>
            {/* Header and main container components end here  */}
        </div>
    );
}


export default Dashboard;
