window.addEventListener('offline', () => {
    document.getElementById("error-banner").style.display = 'inline-block'
  });
  
  window.addEventListener('online', () => {
    document.getElementById("error-banner").style.display = 'none'
  });