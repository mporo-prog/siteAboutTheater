document.addEventListener("DOMContentLoaded", () => {
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    let ticket1Top = document.querySelector('[data-test="circles-ticket1-top"]')
    let ticket1Bottom = document.querySelector('[data-test="circles-ticket1-bottom"]')
    let ticket2Top = document.querySelector('[data-test="circles-ticket2-top"]')
    let ticket2Bottom = document.querySelector('[data-test="circles-ticket2-bottom"]')
    let framesPaintings = document.querySelector('[data-test="frames-paintings"]')
    let painting1 = document.querySelector('[data-test="painting1"]')
    let frame1 = document.querySelector('[data-test="frame1"]')
    let framePainting1 = document.querySelector('[data-test="frame-painting1"]')
    let painting2 = document.querySelector('[data-test="painting2"]')
    let painting3 = document.querySelector('[data-test="painting3"]')
    let painting4 = document.querySelector('[data-test="painting4"]')
    let draggble = false

    function AllBlobes() {
        CreateBlob(ticketNav)
        CreateBlob(ticketFooter)
        CreateBlob(ticket1Top)
        CreateBlob(ticket1Bottom)
        CreateBlob(ticket2Top)
        CreateBlob(ticket2Bottom)
    }
    function CreateBlob(ticket){
        let blobWidth = 0
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2;
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"));
        if(window.innerWidth > 1024){
            blobWidth = 50
        }
        else if(window.innerWidth < 1025 && window.innerWidth > 440){
            blobWidth = 35
        }
        else{
            blobWidth = 25
        }
        html = ``;
        for (let i = 0; i < Math.floor((window.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="blob"></div>`;
        }
        ticket.innerHTML = html;
    }
    function TouchParent(){
        let parentY = frame1.getBoundingClientRect().top + frame1.getBoundingClientRect().height / 8
        let parentX = frame1.getBoundingClientRect().left + frame1.getBoundingClientRect().width / 8
        let childY = painting1.getBoundingClientRect().top
        let childX = painting1.getBoundingClientRect().left
        if((parentX >= childX) && (parentY >= childY)){
            painting1.style.display = 'none'
            framePainting1.style.display = 'inline'
        }
    }

    AllBlobes()

    painting1.addEventListener('pointerdown', (e) => {
        painting1.style.position = 'absolute'
        draggble = true
        painting1.style.left = `${e.clientX - painting1.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
        painting1.style.top = `${e.clientY - painting1.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
    })
    window.addEventListener('pointerup', () => {
        draggble = false
    })
    painting1.addEventListener('pointermove', (e) => {
        TouchParent()
        if(draggble){
            painting1.style.left = `${e.clientX - painting1.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
            painting1.style.top = `${e.clientY - painting1.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
        }
    })

    window.addEventListener("resize", AllBlobes())
})