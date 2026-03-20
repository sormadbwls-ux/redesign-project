const topBtn = document.getElementById("backToTop");

// 스크롤이 300px 이상 내려가면 버튼 보이기
window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// 버튼 클릭 시 부드럽게 맨 위로 이동
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 편도 왕복 버튼 클릭스 버튼 전환 js //
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("active")); // 모든 버튼에서 주황색 뺌
    this.classList.add("active"); // 클릭한 버튼에만 주황색 넣음
  });
});
