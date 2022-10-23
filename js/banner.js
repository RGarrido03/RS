function banner() {
    const banner = document.getElementById("info-banner")
    const display_style = banner.style.display

    const icon = document.getElementById("icon")
    const icon_color = icon.style.color
    
    if (display_style == 'none' || display_style == '') {
        banner.style.display = 'block'
    }
    else {
        banner.style.display = 'none'
    }
}