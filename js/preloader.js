const preloader = () => {
    const preloader = document.querySelector('.preloder')
    const swiper = 1
    preloader.classList.add('active')

    setTimeout(() => {
        preloader.classList.remove('active')
    }, 1000)
}

preloader()