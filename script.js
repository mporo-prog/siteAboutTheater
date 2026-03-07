let painting2 = document.querySelector('[data-test="painting2"]')
document.addEventListener("DOMContentLoaded", () => {let maxWidthIpad = 1024
let painting1 = document.querySelector('[data-test="painting1"]')
let painting3 = document.querySelector('[data-test="painting3"]')
let painting4 = document.querySelector('[data-test="painting4"]')
let framePaintingWithoutColor1 = document.querySelector('[data-test="frame-painting-without-color1"]')
let framePaintingWithoutColor2 = document.querySelector('[data-test="frame-painting-without-color2"]')
let framePaintingWithoutColor3 = document.querySelector('[data-test="frame-painting-without-color3"]')
let framePaintingWithoutColor4 = document.querySelector('[data-test="frame-painting-without-color4"]')
let framePaintingStrings = document.querySelector('[data-test="frames-painting-strings"]')
function BuildAdaptivePaintingsForPhone(){
    if(window.innerWidth <= maxWidthIpad){
        console.log(painting2.outerHTML)
        framePaintingStrings.innerHTML = `<div class="adaptivePhonePaintings"> ${painting3.outerHTML} ${painting2.outerHTML} </div> <div class="adaptivePhonePaintings"> ${framePaintingWithoutColor1.outerHTML} ${framePaintingWithoutColor2.outerHTML} </div> <div class="adaptivePhonePaintings"> ${framePaintingWithoutColor3.outerHTML} ${framePaintingWithoutColor4.outerHTML} </div> <div class="adaptivePhonePaintings"> ${painting4.outerHTML} ${painting1.outerHTML} </div>`
        // console.log(framePainting2)
    }
    // else{
    //     framePaintingStrings.innerHTML = outerHTMLPaintings
    // }
}



BuildAdaptivePaintingsForPhone()
// console.log(framePaintingStrings.innerHTML)
// window.addEventListener("resize", () => {
//     // BuildAdaptivePaintingsForPhone()
// };
})

document.addEventListener("DOMContentLoaded", () => {
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    let ticket1Top = document.querySelector('[data-test="circles-ticket1-top"]')
    let ticket1Bottom = document.querySelector('[data-test="circles-ticket1-bottom"]')
    let ticket2Top = document.querySelector('[data-test="circles-ticket2-top"]')
    let ticket2Bottom = document.querySelector('[data-test="circles-ticket2-bottom"]')
    let framesPaintings = document.querySelector('[data-test="frames-paintings"]')
    let frames = document.querySelector('[data-test="frames"]')
    // console.log(ti)
    // painting3.addEventListener("click", () => {
    //     console.log('yes')
    // })
    let frame1 = document.querySelector('[data-test="frame1"]')
    let frame2 = document.querySelector('[data-test="frame2"]')
    let frame3 = document.querySelector('[data-test="frame3"]')
    let frame4 = document.querySelector('[data-test="frame4"]')
    let framePainting1 = document.querySelector('[data-test="frame-painting1"]')
    let framePainting2 = document.querySelector('[data-test="frame-painting2"]')
    let framePainting3 = document.querySelector('[data-test="frame-painting3"]')
    let framePainting4 = document.querySelector('[data-test="frame-painting4"]')




    let acting = document.querySelector('[data-test="acting"]')
    let draggable = false
    let count = 0


    // let outerHTMLPaintings = `${frames.outerHTML} ${framesPaintings.outerHTML}`



    function AllBlobes() {
        CreateBlob(ticketNav)
        CreateBlob(ticketFooter)
        CreateBlob(ticket1Top)
        CreateBlob(ticket1Bottom)
        CreateBlob(ticket2Top)
        CreateBlob(ticket2Bottom)
    }

    function CreateBlob(ticket) {
        let blobWidth = window.innerWidth * 0.04
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"))
        html = ``
        for (let i = 0; i < Math.floor((window.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="blob"></div>`
        }
        ticket.innerHTML = html
    }

    function TouchParent(frame, painting, framePainting) {
        let parentYTop = Math.floor((frame.getBoundingClientRect().top + frame.getBoundingClientRect().bottom) / 2 - window.innerWidth * 0.02)
        let parentYBottom = Math.floor((frame.getBoundingClientRect().top + frame.getBoundingClientRect().bottom) / 2 + window.innerWidth * 0.02)
        let parentXLeft = Math.floor((frame.getBoundingClientRect().left + frame.getBoundingClientRect().right) / 2 - window.innerWidth * 0.02)
        let parentXRight = Math.floor((frame.getBoundingClientRect().left + frame.getBoundingClientRect().right) / 2 + window.innerWidth * 0.02)
        let childY = Math.floor((painting.getBoundingClientRect().top + painting.getBoundingClientRect().bottom) / 2)
        let childX = Math.floor((painting.getBoundingClientRect().left + painting.getBoundingClientRect().right) / 2)

        if ((childX > parentXLeft && childX < parentXRight) && (childY > parentYTop && childY < parentYBottom)) {
            painting.style.display = 'none'
            framePainting.style.display = 'inline'
            count++
            CheckPaintings()
        }
    }

    function PointerWithPaintings(frame, painting, framePainting) {
        painting.addEventListener('pointerdown', (e) => {
            console.log('yes')
            // framePaintingStrings.style.touchAction = "none"


            painting.style.position = 'absolute'
            draggable = true
            if(window.innerWidth <= maxWidthIpad){
                painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02 * 2 - frames.getBoundingClientRect().width}px`
            }
            else{
                painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
            }
            painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
        })
        window.addEventListener('pointerup', () => {


            draggable = false
        })
        painting.addEventListener('pointermove', (e) => {
            TouchParent(frame, painting, framePainting)
            if (draggable) {
                if(window.innerWidth <= maxWidthIpad){
                    painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02 * 2 - frames.getBoundingClientRect().width}px`
                }
                else{
                    painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
                }
                painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
            }
        })
    }

    function CheckPaintings() {
        if (count == 4) {
            acting.style.position = "static"
            acting.style.display = "inline"
            framesPaintings.style.display = "none"
            // framePaintingStrings.style.touchAction = "pan-y"
        }
    }


    AllBlobes()
    if(painting2){
        console.log('yes')
    }

    console.log(painting2)
    console.log(frame2)
    console.log(framePainting2)

    PointerWithPaintings(frame1, painting1, framePainting1)
    PointerWithPaintings(frame2, painting2, framePainting2)
    PointerWithPaintings(frame3, painting3, framePainting3)
    PointerWithPaintings(frame4, painting4, framePainting4)

    window.addEventListener("resize", () => {
        AllBlobes()
        // BuildAdaptivePaintingsForPhone()
    })

})