import imageF2 from "../../../assets/img/game3.jpg"

const Nb3 = () => {
  return (
    <div className="section">
      <h2 className="title">لعبة ماذا لو</h2>
      <p  dir="rtl" align="start">
        وهي من أساليب الإبتكار فهي تنمي التفكير والخيال للطفل . وذلك بأن تسأل
        الطفل أسئلة تبدأ (ماذا لو) ومن الأمثلة : *ماذا لو تكلم الكتاب ؟ *ماذا لو
        رأيت شجرة بالونات ؟ *ماذا لو فهمت لغة القطط ؟
      </p>
      <div className="images">
        <img src={imageF2} alt="gfdg" />
      </div>
      <p style={{border: "none"}}><a href="https://www.itadroid.net/58342.html">https://www.itadroid.net/58342.html</a></p>
    </div>
  );
};

export default Nb3;
