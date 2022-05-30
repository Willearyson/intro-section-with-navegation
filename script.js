let btnOpenMenu = document.querySelector('.icon-menu-mobile')
let btnCloseMenu = document.querySelector('.cross')
let menuSpace = document.querySelector('.menu-mobile-bg-space')
let liFeat = document.querySelector('.li-feature')
let listFeat = document.querySelector('.list-area-feature')
let arrowFeat = document.querySelector('.arrow-feat')
let liComp = document.querySelector('.li-company')
let listComp = document.querySelector('.list-area-company')
let arrowComp = document.querySelector('.arrow-comp')

let mobileLiFeat = document.querySelector('.mobile-li-feature')
let mobileListFeat = document.querySelector('.mobile-list-area-feature')
let mobileArrowFeat = document.querySelector('.mobile-arrow-feat')

let mobileLiComp = document.querySelector('.mobile-li-company')
let mobileListComp = document.querySelector('.mobile-list-area-company')
let mobileArrowComp = document.querySelector('.mobile-arrow-comp')
let checked = false

btnOpenMenu.addEventListener('click', ()=>{
    menuSpace.classList.add('open-menu')
    menuSpace.classList.remove('close-menu')
})

btnCloseMenu.addEventListener('click', ()=>{
    console.log('fechou')
    menuSpace.classList.add('close-menu')
    menuSpace.classList.remove('open-menu')
    checked = true
})

liFeat.addEventListener('click',()=>{
    if(!checked){
        listFeat.style.display = 'flex'
        arrowFeat.classList.add('rotate')
        arrowFeat.classList.remove('reverse-rotate')
        checked = true
    } else {
        listFeat.style.display = 'none'
        arrowFeat.classList.remove('rotate')
        arrowFeat.classList.add('reverse-rotate')
        checked = false
    }
})

liComp.addEventListener('click',()=>{
    if(!checked){
        listComp.style.display = 'flex'
        arrowComp.classList.add('rotate')
        arrowComp.classList.remove('reverse-rotate')
        checked = true
    } else {
        listComp.style.display = 'none'
        arrowComp.classList.remove('rotate')
        arrowComp.classList.add('reverse-rotate')
        checked = false
    }
})
mobileLiFeat.addEventListener('click', ()=>{
    if(!checked){
        mobileListFeat.style.display = 'flex'
        document.querySelector('.mobile-li-feature-title-arrow').style.margin = '0 0 20px 0';
        mobileArrowFeat.classList.add('rotate')
        mobileArrowFeat.classList.remove('reverse-rotate')
        checked = true
    } else{
        mobileListFeat.style.display = 'none'
        document.querySelector('.mobile-li-feature-title-arrow').style.margin = '0'
        mobileArrowFeat.classList.remove('rotate')
        mobileArrowFeat.classList.add('reverse-rotate')
        checked = false
    }
})

mobileLiComp.addEventListener('click', ()=>{
    if(!checked){
        mobileListComp.style.display = 'flex'
        document.querySelector('.mobile-li-company-title-arrow').style.margin = '0 0 20px 0'
        mobileArrowComp.classList.add('rotate')
        mobileArrowComp.classList.remove('reverse-rotate')
        checked = true
    } else{
        mobileListComp.style.display = 'none'
        document.querySelector('.mobile-li-company-title-arrow').style.margin = '0'
        mobileArrowComp.classList.add('reverse-rotate')
        mobileArrowComp.classList.remove('rotate')
        checked = false
    }
})