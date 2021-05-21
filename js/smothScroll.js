const smothScroll = document.querySelectorAll('a[href^="#"]:not(a[href = "#"])');

smothScroll.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();

        const id = link.getAttribute('href').substring(1);
        console.log(document.getElementById(id));
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    })
})