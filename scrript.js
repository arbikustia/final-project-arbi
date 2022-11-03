
let aboutImg = document.getElementById("about-img")
let aboutDesc = document.getElementById("about-desc")
window.addEventListener('scroll', function (){
    let scrol = this.window.scrollY;
    if(scrol > 300 ) {
        aboutImg.classList.add('about-img')
        aboutDesc.classList.add('aboutDesc')
    }
})