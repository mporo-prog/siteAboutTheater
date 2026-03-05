document.addEventListener("DOMContentLoaded", () => {
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    let ticket1Top = document.querySelector('[data-test="circles-ticket1-top"]')
    let ticket1Bottom = document.querySelector('[data-test="circles-ticket1-bottom"]')
    let ticket2Top = document.querySelector('[data-test="circles-ticket2-top"]')
    let ticket2Bottom = document.querySelector('[data-test="circles-ticket2-bottom"]')

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
        let classBlob = ""
        if(window.innerWidth > 1024){
            blobWidth = 50
            classBlob = "blob-laptop"
        }
        else if(window.innerWidth < 1025 && window.innerWidth > 440){
            blobWidth = 35
            classBlob = "blob-ipad"
        }
        else{
            blobWidth = 25
            classBlob = "blob-phone"
        }
        html = ``;
        for (let i = 0; i < Math.floor((window.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="${classBlob}"></div>`;
        }
        ticket.innerHTML = html;
    }

    AllBlobes()

    window.addEventListener("resize", () => {
        AllBlobes()
    })
})