function banner() {
    const banner = document.getElementById("info-banner")
    const display_style = banner.style.display
    
    if (display_style == 'none' || display_style == '') {
        banner.style.display = 'block'
    }
    else {
        banner.style.display = 'none'
    }
}