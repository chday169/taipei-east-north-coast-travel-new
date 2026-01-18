// 在原有代碼後添加

// 頁面載入時顯示歡迎訊息
document.addEventListener("DOMContentLoaded", () => {
  // 顯示歡迎訊息（僅在首頁）
  if (window.location.pathname.includes("index.html") || 
      window.location.pathname === "/") {
    console.log("歡迎來到台北北海岸旅遊指南！");
  }
  
  // 為所有外部連結添加標記
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});

// 分享功能
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: '看看這個北海岸旅遊攻略！',
      url: window.location.href
    });
  } else {
    alert('分享連結已複製到剪貼簿：' + window.location.href);
    navigator.clipboard.writeText(window.location.href);
  }
}

// 計算行程時間（用於美食交通頁面）
function calculateTravelTime(mode) {
  const times = {
    'drive': '約1.5-2小時車程',
    'bus': '約2-3小時（含等車時間）'
  };
  alert(`北海岸一日遊${mode === 'drive' ? '自駕' : '搭公車'}，建議預留${times[mode]}。`);
}