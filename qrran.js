// qrran.js

// مصفوفة الختمة السباعية
const khatmaSteps = [
    "اليوم 1: من الفاتحةء",
    "اليوم 2: من المائدة إلى التوبة",
    "اليوم 3: من يونس إلى النحل",
    "اليوم 4: من الإسراء إلى الفرقان",
    "اليوم 5: من الشعراء إلى يس",
    "اليوم 6: من الصافات إلى الحجرات",
    "اليوم 7: من ق إلى الناس"
];

// استرجاع البيانات المحفوظة
let currentDay = localStorage.getItem('khatmaDay') ? parseInt(localStorage.getItem('khatmaDay')) : 0;
let tasbihCount = localStorage.getItem('tasbihCount') ? parseInt(localStorage.getItem('tasbihCount')) : 0;

// تحديث الشاشة عند التحميل
window.onload = function() {
    updateUI();
};

function updateUI() {
    document.getElementById('quran-day').innerText = `أنت في: اليوم ${currentDay + 1}`;
    document.getElementById('quran-part').innerText = khatmaSteps[currentDay];
    document.getElementById('counter').innerText = tasbihCount;
}

// وظيفة الختمة
function nextDay() {
    currentDay = (currentDay + 1) % 7;
    localStorage.setItem('khatmaDay', currentDay);
    updateUI();
}

// وظيفة التسبيح
function pressTasbih() {
    tasbihCount++;
    localStorage.setItem('tasbihCount', tasbihCount);
    updateUI();
    
    if (navigator.vibrate) navigator.vibrate(40);
}

// تصفير العداد
function resetTasbih() {
    if(confirm("هل تريد تصفير العداد؟")) {
        tasbihCount = 0;
        localStorage.setItem('tasbihCount', 0);
        updateUI();
    }
}