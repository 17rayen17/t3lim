import './App.css';
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bienv, One, NTwo, Three, Four, Seven, Eme5, Links, Nb1, Nb2, Nb3, Nb4, Nb5, Nb6, Nb7, Nb8, Nb9, Nb10, Nb11, Ahdef, Ahdef2 } from './components/sections/main';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
            <Route path='*' element={<h1 dir='ltr'>404</h1>} />
            <Route path='/' element={<><Header /><Nav /><Bienv/></>} />
            <Route path='/بيداغوجيا-ريادة-الاعمال' element={<><Header /><Nav /><One/></>} />
            <Route path='/مفهوم-بيداغوجيا-ريادة-الاعمال' element={<><Header /><Nav /><NTwo/></>} />
            <Route path='/مبادى-بيداغوجيا-ريادة-الاعمال' element={<><Header /><Nav /><Three/></>} />
            <Route path="/المبادئ" element={<><Header /><Nav /><Seven/></>} />
            <Route path="/الخامسة" element={<><Header /><Nav /><Eme5/></>} />
            <Route path="/السادسة" element={<><Header /><Nav /></>} />
            <Route path="/الروابط" element={<><Header /><Nav /><Links/></>} />
            <Route path='/اساليب-و-الوسائل-اللازمة-لتنفيذ-بيداغوجيا-ريادة-الاعمال' element={<><Header /><Nav /><Four/></>} />
            <Route path='/دور-اللعب-التخيلي-في-تطوير-التفكير' element={<><Header /><Nav /><Nb1/></>} />
            <Route path="/لعبة-الشبكة-اللفظية" element={<><Header /><Nav /><Nb2/></>} />
            <Route path="/لعبة-ماذا-لو" element={<><Header /><Nav /><Nb3/></>} />
            <Route path="/لعبة-الأجزاء-الناقصة" element={<><Header /><Nav /><Nb4/></>} />
            <Route path="/لعبة-الصندوق-السحري" element={<><Header /><Nav /><Nb5/></>} />
            <Route path="/لعبة-المكان-الخاطىء" element={<><Header /><Nav /><Nb6/></>} />
            <Route path='/لعبة-الألغاز' element={<><Header /><Nav /><Nb7/></>} />
            <Route path="/لعبة-مشكلات-وحلول" element={<><Header /><Nav /><Nb8/></>} />
            <Route path="/لعبة-أشياء-صحيحة-على-أشياء-خاطئة" element={<><Header /><Nav /><Nb9/></>} />
            <Route path="/لعبة-التقليد" element={<><Header /><Nav /><Nb10/></>} />
            <Route path="/لعبة-التنبؤ" element={<><Header /><Nav /><Nb11/></>} />
            <Route path="/لعبة-التنبؤ" element={<><Header /><Nav /><Nb11/></>} />
            <Route path="/التربية-على-التنمية-المستدامة" element={<><Header /><Nav /><Ahdef/></>} />
            <Route path="/الأهداف" element={<><Header /><Nav /><Ahdef2/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
