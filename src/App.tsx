import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./compontent/header/Header.tsx";
import Footer from "./compontent/footer/Footer.tsx";
import Home from "./view/Home.tsx";

// 기타 필요한 페이지 컴포넌트 (선택 사항)
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;