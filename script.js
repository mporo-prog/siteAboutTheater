document.addEventListener("DOMContentLoaded", () => {
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    function CreateBlob(ticket){
        let blobWidth = 0
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2;
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"));
        let classBlob = ""
        if(window.innerWidth > 1024){
            blobWidth = 50
            classBlob = "blob-laptop"
            // ticket.style.bottom = "-28px"
        }
        else if(window.innerWidth < 1025 && window.innerWidth > 440){
            blobWidth = 35
            classBlob = "blob-ipad"
            // ticket.style.bottom = "-25px"
        }
        else{
            blobWidth = 25
            classBlob = "blob-phone"
            // ticket.style.bottom = "-13px"
        }
        html = ``;
        for (let i = 0; i < Math.floor((window.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="${classBlob}"></div>`;
        }
        ticket.innerHTML = html;
    }
    CreateBlob(ticketNav)
    CreateBlob(ticketFooter)
    window.addEventListener("resize", () => {
        CreateBlob(ticketNav)
        CreateBlob(ticketFooter)
    })
})