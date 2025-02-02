function redirectToPage(page) {
  window.location.href = page;
}

function DownloadMp3(FilePath){
  fetch(FilePath).then(res => res.blob()).then(blob =>{
    const a = document.createElement('a');
    document.body.appendChild(a)
    a.style.display = 'none'
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'xxxx.mp3';
    a.click();
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url); 
  })
}

function Download(){
  this.DownloadMp3('http://127.0.0.1:8001/music_generation_web_server/web_server')
}

function showTooltip() {
  // 获取要显示的文本框
  var tooltip = document.getElementById('tooltip');
  // 设置文本框的显示位置为鼠标悬停的位置
  tooltip.style.left = event.clientX + 'px';
  tooltip.style.top = (event.clientY + 1) + 'px'; // 这里加10是为了稍微偏移一些，避免覆盖鼠标
  // 显示文本框
  tooltip.style.display = 'block';
  }

  function hideTooltip() {
  // 隐藏文本框
  var tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}