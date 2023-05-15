import image from "../../assets/img/azerty01.jpg"

const Three = () => {
  return (
    <div className="section">
      <h2 className="title">مبادى بيداغوجيا ريادة الاعمال؟</h2>
      <p dir="ltr" align="end">
        إنّ الطّريقة الحديثة في التّعلّم هي التي تستهدف إبراز رغبة التّلميذ
        الدّاخليّة في التّعلّم، دون إكراه أو تهديد، كما تهدف إلى تكوين عقليّة
        المتعلّم وتعويده على الملاحظة، البحث، الإبداع و الإبتكار، وتعليمه كيفيّة
        التّفكير واستعمال نتائج تفكيره بالطّريقة المناسبة. يقترح Kearney لكي
        نقوم بتنفيذ بيداغوجيا ريادة الأعمال في الفصول الدراسية ، Réflexion
        opérationnelle لبيداغوجيا ريادة الأعمال اربعة مبادئ أساسيّة للتلميذ
        الريادي : المسؤولية: تشجيع التلاميذ على تولي مسؤوليّة عمليّة التعلّم
        الخاصة بهم التجربة: يبني التلميذ معرفته من خلال تجربته الخاصة بدلا من
        تجربة الاخرين تأملية: يسمح للطالب بالتأمل وتحليل المعرفة وبناء المعرفة
        الخاصة به تعاونية: يسمح العمل التعاوني لأعضاء مختلفين في الفريق
        بالمساهمة في عمليّة التعلّم
      </p>
      <div className="images">
        <img src={image} alt="image01"/>
      </div>
    </div>
  );
};

export default Three;