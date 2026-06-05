let tabs = document.querySelectorAll(".tab");
let boxes = document.querySelectorAll(".box");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // نشيل active من الكل
        tabs.forEach(t => t.classList.remove("active"));
        boxes.forEach(b => b.classList.remove("active"));

        // نضيفه للعنصر اللي اتضغط عليه
        tab.classList.add("active");

        // نجيب المحتوى المناسب
        let contentId = tab.getAttribute("data-content");
        document.getElementById(contentId).classList.add("active");

    });
});
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