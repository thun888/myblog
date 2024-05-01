function addCopyButtons(id) {
  if (id){
    document.querySelectorAll(`#${id} div tbody tr .code`).forEach((codeElement) => {
      const codeCopyBtn = document.createElement('div');
      codeCopyBtn.className = 'copy-btn';
      codeCopyBtn.textContent = ctx.copycode.default_text;
      codeElement.appendChild(codeCopyBtn);
    });
  }
  window.codeElements.forEach((codeElement) => {
    const codeCopyBtn = document.createElement('div');
    codeCopyBtn.className = 'copy-btn';
    codeCopyBtn.textContent = ctx.copycode.default_text;
    codeElement.appendChild(codeCopyBtn);
  });
}

addCopyButtons()

// 使用事件委托处理复制按钮点击事件
document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('copy-btn')) {
    // 找到复制按钮所在的代码块
    const codeElement = event.target.closest('.code');
    const codeToCopy = codeElement.querySelector('pre')?.innerText || '';
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(codeToCopy);
        event.target.textContent = ctx.copycode.success_text;
        event.target.classList.add('success');
        hud.toast(ctx.copycode.toast, 2500);
      } catch (error) {
        event.target.textContent = '未获得用户许可';
        event.target.classList.add('warning');
      }
    } else {
      event.target.textContent = '浏览器不支持/非HTTPS';
      event.target.classList.add('warning');
    }

    // 3秒后恢复默认文本
    setTimeout(() => {
      event.target.textContent = ctx.copycode.default_text;
      event.target.classList.remove('success', 'warning');
    }, 3000);
  }
});
