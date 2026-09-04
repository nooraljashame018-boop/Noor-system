document.addEventListener('DOMContentLoaded', function() {
  // تحديد جميع أزرار القائمة الجانبية
  const navButtons = document.querySelectorAll('.sidebar-btn, [data-tab]');
  
  // تحديد جميع الأقسام والشاشات
  const sections = document.querySelectorAll('.page-section, .tab-content');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      // إخفاء كافة الأقسام
      sections.forEach(sec => sec.style.display = 'none');
      
      // إزالة التنسيق النشط عن جميع الأزرار
      navButtons.forEach(btn => btn.classList.remove('active'));

      // إظهار القسم المطلوب بناءً على السمة
      const targetId = this.getAttribute('data-tab') || this.id.replace('-btn', '');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.style.display = 'block';
      }
      
      this.classList.add('active');
    });
  });
});
