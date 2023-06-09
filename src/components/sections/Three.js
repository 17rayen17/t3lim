import image from "../../assets/img/azerty01.jpg";

const Three = () => {
  return (
    <div className="section">
      <h2 className="title">مبادى بيداغوجيا ريادة الاعمال؟</h2>
      <p dir="rtl" align="start">
        إنّ الطّريقة الحديثة في التّعلّم هي التي تستهدف إبراز رغبة التّلميذ
        الدّاخليّة في التّعلّم، دون إكراه أو تهديد، كما تهدف إلى تكوين عقليّة
        المتعلّم وتعويده على الملاحظة، البحث، الإبداع و الإبتكار، وتعليمه كيفيّة
        التّفكير واستعمال نتائج تفكيره بالطّريقة المناسبة. يقترح Kearney لكي
        نقوم بتنفيذ بيداغوجيا ريادة الأعمال في الفصول الدراسية ، Réflexion
        opérationnelle لبيداغوجيا ريادة الأعمال اربعة مبادئ أساسيّة للتلميذ
        الريادي :
        <ul>
          <li>
            لبيداغوجيا ريادة الأعمال اربعة مبادئ أساسيّة للتلميذ الريادي :
          </li>
          <li>
            التجربة: يبني التلميذ معرفته من خلال تجربته الخاصة بدلا من تجربة
            الاخرين
          </li>
          <li>
            تأملية: يسمح للطالب بالتأمل وتحليل المعرفة وبناء المعرفة الخاصة به
          </li>
          <li>
            تعاونية: يسمح العمل التعاوني لأعضاء مختلفين في الفريق بالمساهمة في
            عمليّة التعلّم{" "}
          </li>
        </ul>
        <br />
        يوضح الجدول التالي الأهداف التعليمية المستهدفة من قبل كل من هذه المبادئ
        الأربعة
      </p>
      <table>
        <tr>
          <th>مبدأ</th>
          <th>الأهداف </th>
        </tr>
        <tr>
          <td>نشاط مسؤول</td>
          <td>يشجع على الاستقلالية والشعور بالمسؤولية</td>
        </tr>
        <tr>
          <td>نشاط تجريبي</td>
          <td>
            يعزز التعلم من خلال مواقف حقيقية وذات مغزى نشاط تجريبي
            <hr />
            يسمح بتحقيق تجارب ملموسة
          </td>
        </tr>
        <tr>
          <td>نشاط تأملي</td>
          <td>
            تحفز المواقف مثل الالتزام والمثابرة والإبداع والفخر والثقة بالنفس
            <hr />
            يسمح لك ببناء الأفكار عن طريق إستغلال المعرفة بشكل منهجي	
            <hr />
            يعزز النشاط العقلي (ما وراء المعرفة) وبناء المعرفة
          </td>
        </tr>
        <tr>
          <td>نشاط التعاوني</td>
          <td>
            يطور ويقوي المهارات الإجتماعيّة
            <hr />
            يدعم التعلم من خلال التفاعلات الإجتماعيّة (الصراع الاجتماعي المعرفي)
            <hr />
            يقوي روح الفريق والتحفيز والاستماع الفعال والمشاركة والتواضع
          </td>
        </tr>
      </table>
      <div className="images">
        <img src={image} alt="image01" />
      </div>
    </div>
  );
};

export default Three;
