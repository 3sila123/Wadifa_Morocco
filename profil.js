document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");

  // Explorer button functionality
  const buttons = document.querySelectorAll(".card-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardId = button.getAttribute("data-card");
      const card = document.getElementById(cardId);
      if (card) {
        card.style.display = "block";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
      }
    });
  });

  // Close button functionality
  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".carddd");
      if (card) card.style.display = "none";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
    // احصل على كل الأزرار التي سيتم الضغط عليها لتحميل PDF
    const downloadButtons = document.querySelectorAll('.download-button');

    // استمع للنقر على كل زر
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // احصل على معرف البطاقة المرتبط بالزر
            const cardId = button.getAttribute('data-card');
            const card = document.getElementById(cardId);

            // استخدم html2canvas لتحويل العنصر إلى صورة
            html2canvas(card).then(canvas => {
                // إنشاء ملف PDF باستخدام jsPDF
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();

                // تحويل الصورة إلى بيانات URL
                const imgData = canvas.toDataURL('image/png');

                // أضف الصورة إلى PDF
                doc.addImage(imgData, 'PNG', 10, 10, canvas.width / 5, canvas.height / 5);

                // حفظ PDF
                doc.save('card-content.pdf');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // استهداف الخلفية والبطاقة
  const overlay = document.getElementById("background-overlay");
  const feedbackCard = document.getElementById("feedback-card");

  // استهداف الأزرار
  const blurButtons = document.querySelectorAll(".show-blur");
  const feedbackButtons = document.getElementsByClassName("show-feedback-button");

  // وظيفة لإظهار الخلفية الضبابية مع البطاقة
  const showBlurOverlay = function () {
    feedbackCard.classList.remove('hidden1');  // إظهار البطاقة
    overlay.classList.add("visible");  // إظهار الخلفية الضبابية
  };

  // إضافة حدث النقر للأزرار التي تعرض الضبابية والبطاقة
  blurButtons.forEach(button => {
    button.addEventListener("click", showBlurOverlay);
  });

  // إضافة حدث النقر للأزرار التي تعرض البطاقة
  for (let i = 0; i < feedbackButtons.length; i++) {
    feedbackButtons[i].addEventListener('click', showBlurOverlay);
  }

  // زر إغلاق البطاقة
  const hideFeedbackButton = document.getElementById("hide-feedback-button");
  hideFeedbackButton.addEventListener('click', function () {
    feedbackCard.classList.add('hidden1');  // إخفاء البطاقة
    overlay.classList.remove("visible");  // إخفاء الخلفية الضبابية
  });
});


// تحديد الرسالة
const messageContainer = document.getElementById("msg-container");

// استهداف جميع الأزرار
const buttons = document.querySelectorAll("button[class^='save']");

// إضافة حدث النقر لجميع الأزرار
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // إضافة صنف لإظهار الرسالة مع الحركة
    messageContainer.classList.add("show");

    // الانتظار حتى تنتهي الحركة (3 ثوانٍ)، ثم إزالة الرسالة
    setTimeout(() => {
      messageContainer.classList.remove("show");
    }, 3000);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.getElementById('searchIcon');
  const cards = document.querySelectorAll('.card');

  function filterCards() {
      const searchText = searchBar.value.toLowerCase();

      cards.forEach(card => {
          const tags = card.querySelectorAll('.card-tag');
          let isMatch = false;

          tags.forEach(tag => {
              if (tag.textContent.toLowerCase().includes(searchText)) {
                  isMatch = true;
              }
          });

          if (isMatch) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }

  searchBar.addEventListener('input', filterCards);
  searchIcon.addEventListener('click', filterCards);
});
