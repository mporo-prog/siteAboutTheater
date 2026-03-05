document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("resize", (e) => {
        let ticket = document.querySelector('[data-test="circles"]')
        let blobWidth = 50
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2;
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"));
        html = ``;
        for (let i = 0; i < Math.floor((e.currentTarget.innerWidth - parseInt(paddings)) / (blobWidth + gap)); i++) {
            html += `<div class="blob"></div>`;
        }
        ticket.innerHTML = html;
    })
})