
// 1. دالة التنقل بين التبويبات (الكود الخاص بكِ)
function switchTab(viewId) {
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.style.display = 'none';
  });

  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
  }
}

// 2. منطق الحفظ والتعديل للبيانات
document.addEventListener('DOMContentLoaded', () => {

  // ربط فورمة الإضافة / التعديل (تأكدي من وجود <form> أو معالجة الزر مباشرة)
  const saveBtn = document.getElementById('saveBtn'); // زر الحفظ للإضافة
  const updateBtn = document.getElementById('updateBtn'); // زر الحفظ عند التعديل

  // عند الضغط على زر الحفظ (إضافة جديدة)
  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault(); // منع إعادة تحميل الصفحة
      saveData();
    });
  }

  // عند الضغط على زر حفظ التعديل
  if (updateBtn) {
    updateBtn.addEventListener('click', (e) => {
      e.preventDefault(); // منع إعادة تحميل الصفحة
      updateData();
    });
  }
});

// دالة تنفيذ الحفظ
function saveData() {
  // افترضي وجود مدخلات بـ id معين، استبدلي الأسماء حسب عناصر index.html لديكِ
  const inputName = document.getElementById('studentName')?.value;
  
  if (!inputName) {
    alert('يرجى ملء كافة الحقول المطلوبة!');
    return;
  }

  // هنا يتم حفظ البيانات (مثال باستخدام localStorage)
  console.log('تم حفظ البيانات بنجاح:', inputName);
  alert('تم الحفظ بنجاح!');
}

// دالة تنفيذ التعديل
function updateData() {
  const inputName = document.getElementById('studentName')?.value;

  console.log('تم تحديث البيانات بنجاح:', inputName);
  alert('تم حفظ التعديلات بنجاح!');
}
. 
