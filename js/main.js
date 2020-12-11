const showMenu=(toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }

}
showMenu('nav-toggle','nav-menu')

const navLink=document.querySelectorAll('.nav_link')
 
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(N => N.addEventListener('click',linkAction))


//scroll section active link 
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const selectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId= current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[herf*=' + sectionId + ']').classList.add('active')
            
        }else{
            document.querySelector('.nav_menu a[herf*=' + sectionId + ']').classList.remove('active')

        }

    })
}

//scroll reveal ani mation

const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true


})

//home



sr.reveal('.home_greeting', {})
sr.reveal('.home_name', {delay: 100})
sr.reveal('.button', {delay: 300})
//sr.reveal('.home_title', {})
//sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin:'right', delay:400})


//about
sr.reveal('.about_img', {delay:500})
sr.reveal('.about_subtitle', {delay:300})
sr.reveal('.about_profession', {delay:400})
sr.reveal('.about_text', {delay:500})
sr.reveal('.about_social-icon', {delay:600, interval:200})

//skill

sr.reveal('.skills_subtitle', {})
//sr.reveal('.skills_name', {distance:'20px', delay: 50, interval:100})

sr.reveal('.skills_img', {delay:400})
sr.reveal('.info', {delay:100})

sr.reveal('.line', {distance:'20px', delay: 50, interval:100})


//qualification

sr.reveal('.education', {})
sr.reveal('.degree', {delay: 50})
sr.reveal('.university', {delay: 100})
sr.reveal('.time', {delay: 100})

sr.reveal('.qualifications_img', {delay:400})


//portfolio
sr.reveal('.portfolio_img', {delay: 200, interval: 100})

//contact
sr.reveal('.contact_box', {interval: 200})


///mixitup

const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 0
    }
});

//active nav port

// const linkPortfolio =document.querySelectorAll('.portfolio_item')

// function activePortfolio(){
//     if(linkPortfolio){
//         linkPortfolio.forEach( L => l.classList.remove('active-portfolio'))
//         this.classList.add('active-portfolio')
//     }
// }
// linkPortfolio.forEach(L => l.addEventListener('click', activePortfolio))
