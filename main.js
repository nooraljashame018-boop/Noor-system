function switchTab(tabId) {
  // 1. إخفاء جميع الشاشات والأقسام
  const allViews = document.querySelectorAll('.view-content, [id$="View"], .page-section');
  allViews.forEach(view => {
    view.style.display = 'none';
  });

  // 2. إظهار الشاشة المطلوبة فقط
  const targetView = document.getElementById(tabId);
  if (targetView) {
    targetView.style.display = 'block';
  }

  // 3. تحديث الزر النشط (Active Class)
  const allButtons = document.querySelectorAll('.nav-btn');
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}
