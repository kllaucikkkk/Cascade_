import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/MainSite/Hero';
import Section1 from './components/MainSite/Section1';
import Section2 from './components/MainSite/Section2';
import Section3 from './components/MainSite/Section3';
import Section4 from './components/MainSite/Section4';
import Footer from './components/MainSite/Footer';
import Login from './components/LoginForm/Login';
import Register from './components/RegisterForm/Register';
import Overview from './components/Dashboard/Overview/Overview';
import TransactionOverview from './components/Dashboard/TransactionOverview/TransactionOverview';
import AccountOverview from './components/Dashboard/AccountOverview/AccountOverview';
import Goals from './components/Dashboard/Goals/Goals';
import Recipients from './components/Dashboard/Recipients/Recipients';
import Cards from './components/Dashboard/Cards/Cards';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import './index.css';


function MainSite() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          } />
          <Route path="/transactions" element={
            <DashboardLayout>
              <TransactionOverview />
            </DashboardLayout>
          } />
          <Route path="/accounts" element={
            <DashboardLayout>
              <AccountOverview />
            </DashboardLayout>
          } />
          <Route path="/goals" element={
            <DashboardLayout>
              <Goals />
            </DashboardLayout>
          } />
          <Route path="/account/recipients" element={
            <DashboardLayout>
              <Recipients />
            </DashboardLayout>
          } />
          <Route path="/cards" element={
            <DashboardLayout>
              <Cards />
            </DashboardLayout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
