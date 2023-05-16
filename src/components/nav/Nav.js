import "./Nav.css"
import { Link } from "react-router-dom"
import React, { useEffect } from 'react'

const Nav = () => {
  useEffect(() => {
    const btn = document.getElementById("btn")
    const list = document.getElementById("list")
    btn.addEventListener("click", () => {
      list.classList.toggle("d-none")
    })
  })
  return (
    <div className="nav">
      <div className="container">
        <i className="fa-solid fa-bars btn d-none" id="btn"></i>
        <ul id="list" className="">
          <li><Link to="/">مرحبا</Link></li>
          <li>
            <span>بيداغوجيا ريادة الاعمال</span>
            <ul  className="nested">
              <li><Link to="/بيداغوجيا-ريادة-الاعمال">ماهي بيداغوجيا ريادة الاعمال</Link></li>
              <li><Link to='/مفهوم-بيداغوجيا-ريادة-الاعمال'>مفهوم بيداغوجيا ريادة الاعمال</Link></li>
              <li><Link to="/مبادى-بيداغوجيا-ريادة-الاعمال">مبادى بيداغوجيا ريادة الاعمال</Link></li>
              <li><Link to='/اساليب-و-الوسائل-اللازمة-لتنفيذ-بيداغوجيا-ريادة-الاعمال'>اساليب و الوسائل اللازمة لتنفيذ بيداغوجيا ريادة الاعمال</Link></li>
            </ul>
          </li>
          <li>
            <span>نماذج لألعاب تنمية التفكير الإبداعي عند الاطفال</span>
            <ul className="nested">
              <li><Link to='/دور-اللعب-التخيلي-في-تطوير-التفكير'>دور اللعب التخيلي في تطوير التفكير</Link></li>
              <li><Link to="/لعبة-الشبكة-اللفظية">لعبة الشبكة اللفظية</Link></li>
              <li><Link to="/لعبة-ماذا-لو">لعبة ماذا لو</Link></li>
              <li><Link to="/لعبة-الأجزاء-الناقصة">لعبة الأجزاء الناقصة</Link></li>
              <li><Link to="/لعبة-الصندوق-السحري">لعبة الصندوق السحري</Link></li>
              <li><Link to="/لعبة-مشكلات-وحلول">لعبة مشكلات وحلول</Link></li>
              {/* <li><Link to="/لعبة-أشياء-صحيحة-على-أشياء-خاطئة">لعبة أشياء صحيحة على أشياء خاطئة</Link></li> */}
              <li><Link to="/لعبة-التقليد">لعبة التقليد</Link></li>
              {/* <li><Link to="/لعبة-التنبؤ">لعبة التنبؤ</Link></li> */}
            </ul>
          </li>
          <li>
            <span>التنمية المستدامة</span>
            <ul className="nested">
              <li><Link to="/التربية-على-التنمية-المستدامة">التربية على التنمية المستدامة</Link></li>  
              <li><Link to="/الأهداف">الأهداف</Link></li>  
              <li><Link to="/المبادئ">المبادئ</Link></li>    
            </ul>
          </li>
          <li>
            <span>جذاذة الدرس</span>
            <ul className="nested">
              <li><Link to="/الخامسة">الخامسة ابتدائي</Link></li>
              <li><Link to="/السادسة">السادسة ابتدائي</Link></li>
            </ul>
          </li>
          <li><Link to="/الروابط">روابط مفيدة</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav