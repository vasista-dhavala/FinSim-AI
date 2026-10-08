import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

import {
  Invest,
  Simulation,
  Portfolio,
  Learn,
  Lessons,
  LessonDetail,
  Save,
  Markets,
  About,
  Login,
  Signup,
  NotFound,
} from "./pages/Pages.jsx";

import {
  NewsMarkets,
  NewsCompanies,
  NewsEconomy,
  NewsGovernment,
  LiveMarketNews,
  InvestingStocks,
  InvestingBonds,
  InvestingIPOs,
  InvestingTrading,
  InvestingMutualFunds,
  Banking,
  PersonalSavings,
  FinancialPlan,
} from "./pages/FinancePages.jsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <ErrorBoundary key={pathname}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* EXISTING INVEST */}
          <Route path="/invest" element={<Invest />} />
          <Route path="/invest/simulation" element={<Simulation />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* NEWS */}
          <Route path="/news/markets" element={<NewsMarkets />} />
          <Route path="/news/companies" element={<NewsCompanies />} />
          <Route path="/news/economy" element={<NewsEconomy />} />
          <Route path="/news/government" element={<NewsGovernment />} />
          <Route path="/news/live-market-news" element={<LiveMarketNews />} />

          {/* INVESTING */}
          <Route path="/investing/stocks" element={<InvestingStocks />} />
          <Route path="/investing/bonds" element={<InvestingBonds />} />
          <Route path="/investing/ipos" element={<InvestingIPOs />} />
          <Route path="/investing/trading" element={<InvestingTrading />} />
          <Route
            path="/investing/mutual-funds"
            element={<InvestingMutualFunds />}
          />

          {/* LEARN */}
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/lessons" element={<Lessons />} />
          <Route path="/learn/lessons/:id" element={<LessonDetail />} />

          {/* PERSONAL FINANCE */}
          <Route
            path="/personal-finance/savings"
            element={<PersonalSavings />}
          />
          <Route
            path="/personal-finance/financial-plan"
            element={<FinancialPlan />}
          />

          {/* BANKING */}
          <Route path="/banking" element={<Banking />} />

          {/* EXISTING SAVE */}
          <Route path="/save" element={<Save />} />

          {/* MARKETS */}
          <Route path="/markets" element={<Markets />} />

          {/* COMPANY */}
          <Route path="/about" element={<About />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>

      {pathname !== "/" && <Footer />}
    </>
  );
}
