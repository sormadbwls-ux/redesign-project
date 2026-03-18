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
