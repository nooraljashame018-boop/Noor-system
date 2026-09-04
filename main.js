function switchTab(viewId) {
  // إخفاء كل العناصر التي تمتلك كلاس tab-content بغض النظر عن نوع الوسم (section أو div)
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // إظهار القسم المطلوبة
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
  }
}
