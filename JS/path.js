
// ==================Start-Logo Download================== 
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // إضافة تأخير بسيط (ثانية واحدة) لضمان رؤية اللوجو بشكل جيد
    setTimeout(() => {
        preloader.classList.add("preloader-hidden");

        // حذف العنصر تماماً من الـ DOM بعد الاختفاء للحفاظ على الأداء
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }, 1500);
});
// ==================End-Logo Download================== 
// ====================Scroll===============================
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
let btn = document.getElementById("scrollTopBtn");

// يظهر لما تنزل لتحت
window.onscroll = function () {
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// لما تضغط عليه
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // حركة ناعمة
    });
};
// ====================Scroll===============================
let category_nav_list = document.querySelector('.category_nav_list');
function Open_Categ_List() {
    category_nav_list.classList.toggle('active')

}

// ======================
// const toggle = document.getElementById("themeToggle");
// const logoImg = document.getElementById("logoImg");
const icon = document.getElementById("modeIcon");

/* تحميل الثيم */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

/* تحديث اللوجو */
// function updateLogo() {
//     if (document.body.classList.contains("dark")) {
//         logoImg.src = "logo-dark.png";
//     } else {
//         logoImg.src = "logo-light.png";
//     }
// }

/* تحديث الأيقونة */
function updateIcon() {
    icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

/* تشغيل أول مرة */
// updateLogo();
updateIcon();

/* toggle theme */
icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );

    // updateLogo();
    updateIcon();
});

const header = document.getElementById("Navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// ======================
// Start Bg-Animated
const bgContainer = document.getElementById('floatingBg');

// العناصر البرمجية اللي حاببها تظهر
const codeElements = ['</>', '{}','&&', '!=',';', 'if()', 'const', '01', '[]', 'function', 'SQL', 'API', 'Server', 'Client', 'Debug', 'Compile', 'Run', 'Code', 'Git', 'Push', 'Pull', 'Merge', 'Branch'];

// دالة لتوليد عنصر متحرك
function createFloatingItem() {
    const item = document.createElement('div');
    item.classList.add('floating-item');

    item.innerText = codeElements[Math.floor(Math.random() * codeElements.length)];

    const randomLeft = Math.random() * 100; 
    const randomSize = Math.random() * (40 - 15) + 15; 
    const randomDuration = Math.random() * (25 - 12) + 12; 
    const randomDelay = Math.random() * 5; 

    // تطبيق الستاينس العشوائي
    item.style.left = `${randomLeft}%`;
    item.style.fontSize = `${randomSize}px`;
    item.style.animationDuration = `${randomDuration}s`;
    item.style.animationDelay = `${randomDelay}s`;

    // ضيف العنصر للحاوية
    bgContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, (randomDuration + randomDelay) * 1000);
}

// توليد عناصر بشكل مستمر بدون توقف
setInterval(createFloatingItem, 800);

for (let i = 0; i < 15; i++) {
    createFloatingItem();
}

// End Bg-Animated