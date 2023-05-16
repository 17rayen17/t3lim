import imageF2 from "../../../assets/img/game2.jpg"

const Nb2 = () => {
  return (
    <div className="section">
      <h2 className="title">لعبة الشبكة اللفظية</h2>
      <p  dir="rtl" align="start">
        تقوم المعلمة برسم شبكة على السبورة مكونة من خمسة خانات . الحرف أسماء
        حيوانات فواكه بلدان ثم تختار حرفا للخانة الأولى ثم نطلب من الأطفال ملء
        الفراغات بحيث تبدأ الكلمات بالحرف نفسه.وهي لعبة تساعد على تنمية التفكير
        لدى الطفل وزيادة معلوماته وحصيلته اللغوية .
      </p>
      <div className="images">
        <img src={imageF2} alt="gfdg" />
      </div>
      <p style={{border: "none"}}><a href="https://nbdsaudi.com/2020/12/20/ا%D">https://nbdsaudi.com/2020/12/20/ا%D</a></p>
    </div>
  );
};

export default Nb2;
