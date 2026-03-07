document.addEventListener("DOMContentLoaded", () => {
    let maxWidthIpad = 1024
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    let ticket1Top = document.querySelector('[data-test="circles-ticket1-top"]')
    let ticket1Bottom = document.querySelector('[data-test="circles-ticket1-bottom"]')
    let ticket2Top = document.querySelector('[data-test="circles-ticket2-top"]')
    let ticket2Bottom = document.querySelector('[data-test="circles-ticket2-bottom"]')
    let divActingTop = document.querySelector('[data-test="div-acting-top"]')
    let divActingBottom = document.querySelector('[data-test="div-acting-bottom"]')
    let divActing = document.querySelector('[data-test="div-acting"]')
    let divBigArt = document.querySelector('[data-test="div-Bigart"]')
    let framePaintingStrings = document.querySelector('[data-test="frames-painting-strings"]')
    let framesPaintings = document.querySelector('[data-test="frames-paintings"]')
    let frames = document.querySelector('[data-test="frames"]')
    let painting1 = document.querySelector('[data-test="painting1"]')
    let painting2 = document.querySelector('[data-test="painting2"]')
    let painting3 = document.querySelector('[data-test="painting3"]')
    let painting4 = document.querySelector('[data-test="painting4"]')
    let frame1 = document.querySelector('[data-test="frame1"]')
    let frame2 = document.querySelector('[data-test="frame2"]')
    let frame3 = document.querySelector('[data-test="frame3"]')
    let frame4 = document.querySelector('[data-test="frame4"]')
    let framePainting1 = document.querySelector('[data-test="frame-painting1"]')
    let framePainting2 = document.querySelector('[data-test="frame-painting2"]')
    let framePainting3 = document.querySelector('[data-test="frame-painting3"]')
    let framePainting4 = document.querySelector('[data-test="frame-painting4"]')
    let draggable = false
    let acting = document.querySelector('[data-test="acting"]')
    let count = 0



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
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2;
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"));
        html = ``;
        for (let i = 0; i < Math.floor((window.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="blob"></div>`;
        }
        ticket.innerHTML = html;
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
            // framePaintingStrings.style.touchAction = "none"


            painting.style.position = 'absolute'
            draggable = true
            painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
            painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
        })
        window.addEventListener('pointerup', () => {


            draggable = false
        })
        painting.addEventListener('pointermove', (e) => {
            TouchParent(frame, painting, framePainting)
            if (draggable) {
                painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - window.innerWidth * 0.02}px`
                painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
            }
        })
    }

    function CheckPaintings() {
        if (count == 4) {
            framesPaintings.style.display = "none"
            divActing.style.display = "flex"
            divBigArt.style.display = "inline"
            // framePaintingStrings.style.touchAction = "pan-y"
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)


        }
    }


    AllBlobes()
    PointerWithPaintings(frame1, painting1, framePainting1)
    PointerWithPaintings(frame2, painting2, framePainting2)
    PointerWithPaintings(frame3, painting3, framePainting3)
    PointerWithPaintings(frame4, painting4, framePainting4)

    window.addEventListener("resize", () => {
        AllBlobes()
    })

})