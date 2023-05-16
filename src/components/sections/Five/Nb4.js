import imageF2 from "../../../assets/img/game4.jpg"

const Nb4 = () => {
  return (
    <div className="section">
      <h2 className="title">لعبة الأجزاء الناقصة</h2>
      <p  dir="rtl" align="start">
        أن يطلب من الطفل إعطاء أمثلة لأجزاء بعض الأشياء لا يمكن الإستغناء عنها
        مثل : *ساعة بلا عقارب . *مظلة من غير عصا . *قلم من غير حبر . *باب من غير
        يد .
      </p>
      <div className="images">
        <img src={imageF2} alt="gfdg" />
      </div>
      <p style={{border: "none"}}><a href="https://www.liveworksheets.com/ay1218989he">https://www.liveworksheets.com/ay1218989he</a></p>
    </div>
  );
};

export default Nb4;
