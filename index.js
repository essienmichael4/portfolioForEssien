window.addEventListener('scroll', e => {
    // if(e.scrolly == '100'){
    //     console.log('worked')
    // }
    let blog = document.querySelector('#blogList')
    let home = document.querySelector('#homeList')
    let project = document.querySelector('#projectsList')
    let about = document.querySelector('#aboutList')
    let contact = document.querySelector('#contactList')

    if(window.scrollY > 27){
        blog.style.color = "#000000"
    }else{
        blog.style.color = "#ebebeb"
    }

    if(window.scrollY > 148){
        project.style.color = "#000000"
    }else{
        project.style.color = "#ebebeb"
    }

    if(window.scrollY > 268){
        about.style.color = "#000000"
        about.classList.add('active1')
        home.classList.remove('active')
    }else{
        about.style.color = "#ebebeb"
        about.classList.remove('active1')
         home.classList.add('active')
    }

    if(window.scrollY > 398){
        home.style.color = "#000000"
        
        // home.classList.remove('active')
    }else{
        // about.classList.add('active1')
        home.style.color = "#ebebeb"
       
    }
})


let overlays = document.querySelectorAll('.overlay')
let containers = document.querySelectorAll('.projectImg')

containers.forEach(container =>{
    container.addEventListener('mouseenter', event=>{
        // console.log(container)
        // container.children.find('overlay')
        container.children[0].style.transition= "all ease .1s";
        container.children[0].style.visibility = "visible";
        
    })
})

containers.forEach(container =>{
    container.addEventListener('mouseleave', event=>{
        // console.log(container)
        // container.children.find('overlay')
        container.children[0].style.transition= "all ease .1s";
        container.children[0].style.visibility = "hidden";
        
    })
})