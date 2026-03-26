document.addEventListener("DOMContentLoaded", () => {
    let maxWidthIpad = 1024
    const circlesTop = document.querySelectorAll('[data-test="circles-top"]')
    const circlesBottom = document.querySelectorAll('[data-test="circles-bottom"]')
    let framePaintingStrings = document.querySelector('[data-test="frames-painting-strings"]')
    let framesPaintings = document.querySelector('[data-test="frames-paintings"]')
    let frames = document.querySelector('[data-test="frames"]')
    let painting1 = document.querySelector('[data-test="painting1"]')
    let painting2 = document.querySelector('[data-test="painting2"]')
    let painting3 = document.querySelector('[data-test="painting3"]')
    let painting4 = document.querySelector('[data-test="painting4"]')
    let framePainting1 = document.querySelector('[data-test="frame-painting1"]')
    let framePainting2 = document.querySelector('[data-test="frame-painting2"]')
    let framePainting3 = document.querySelector('[data-test="frame-painting3"]')
    let framePainting4 = document.querySelector('[data-test="frame-painting4"]')
    let framePaintingWithoutColor1 = document.querySelector('[data-test="frame-painting-without-color1"]')
    let framePaintingWithoutColor2 = document.querySelector('[data-test="frame-painting-without-color2"]')
    let framePaintingWithoutColor3 = document.querySelector('[data-test="frame-painting-without-color3"]')
    let framePaintingWithoutColor4 = document.querySelector('[data-test="frame-painting-without-color4"]')
    let divActing = document.querySelector('[data-test="div-acting"]')
    let divActingTop = document.querySelector('[data-test="div-acting-top"]')
    let divActingBottom = document.querySelector('[data-test="div-acting-bottom"]')
    let ticket1 = document.querySelector('[data-test="ticket1"]')
    const piecesInPuzzle = document.querySelectorAll('[data-test="pieceInPuzzle"]')
    const piecesOutPuzzle = document.querySelectorAll('[data-test="pieceOutPuzzle"]')
    const systems = document.querySelectorAll('[data-test="system"]')
    let ticket2 = document.querySelector('[data-test="ticket2"]')
    let lottery = document.querySelector('[data-test="lottery"]');
    let coin = document.querySelector('[data-test="coin"]')
    let masksInfo = document.querySelector('[data-test="masks-info"]')
    let masks = document.querySelector('[data-test="masks"]')
    const lines = document.querySelectorAll('[data-test="line"]')
    let countMask = 0
    let draggable = false
    let countPainting = 0
    let countPieces = 0
    let dynamicWeight;
    function BuildAdaptivePaintingsForPhone() {
        while (framePaintingStrings.firstChild) {
            framePaintingStrings.removeChild(framePaintingStrings.firstChild);
        }
        if (window.innerWidth <= maxWidthIpad) {
            div1 = document.createElement("div")
            div2 = document.createElement("div")
            div1.className = "adaptivePhonePaintings"
            div2.className = "adaptivePhonePaintings"
            div1.appendChild(framePaintingWithoutColor1)
            div1.appendChild(framePaintingWithoutColor2)
            div2.appendChild(framePaintingWithoutColor3)
            div2.appendChild(framePaintingWithoutColor4)
            framePaintingStrings.appendChild(div1)
            framePaintingStrings.appendChild(div2)
            if (painting3.style.display != "none" || painting2.style.display != "none") {
                div3 = document.createElement("div")
                div3.dataset.test = "div3"
                div3.className = "adaptivePhonePaintings"
                div3.appendChild(painting3)
                div3.appendChild(painting2)
                framePaintingStrings.appendChild(div3)
            }
            if (painting4.style.display != "none" || painting1.style.display != "none") {
                div4 = document.createElement("div")
                div4.dataset.test = "div4"
                div4.className = "adaptivePhonePaintings"
                div4.appendChild(painting4)
                div4.appendChild(painting1)
                framePaintingStrings.appendChild(div4)
            }

            framePaintingStrings.appendChild(divActing)
            divActing.appendChild(divActingTop)
            divActing.appendChild(divActingBottom)
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }
        else {
            frames.className = "frames"
            framesPaintings.className = "frames"
            frames.appendChild(framePaintingWithoutColor1)
            frames.appendChild(framePaintingWithoutColor2)
            frames.appendChild(framePaintingWithoutColor3)
            frames.appendChild(framePaintingWithoutColor4)
            framesPaintings.appendChild(painting3)
            framesPaintings.appendChild(painting2)
            framesPaintings.appendChild(painting4)
            framesPaintings.appendChild(painting1)
            framePaintingStrings.appendChild(frames)
            framePaintingStrings.appendChild(framesPaintings)
            framePaintingStrings.appendChild(divActing)
            divActing.appendChild(divActingTop)
            divActing.appendChild(divActingBottom)
        }
    }
    function CreateBlob(ticket) {
        let blobWidth = window.innerWidth * 0.04
        let paddings = parseInt(window.getComputedStyle(ticket).getPropertyValue("padding-left")) * 2;
        let gap = parseInt(window.getComputedStyle(ticket).getPropertyValue("row-gap"));
        html = ``;
        for (let i = 0; i < Math.floor((ticket.getBoundingClientRect().width - paddings) / (blobWidth + gap)); i++) {
            html += `<div class="blob"></div>`;
        }
        ticket.innerHTML = html;
    }
    function AllBlobes() {

        circlesTop.forEach(element => {
            CreateBlob(element)
        });
        circlesBottom.forEach(element => {
            CreateBlob(element)
        });
        if (divActing.style.display == "flex") {
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }
    }
    function TouchParent(child, parent) {
        let parentYTop = Math.floor((parent.getBoundingClientRect().top + parent.getBoundingClientRect().bottom) / 2 - window.innerWidth * 0.02)
        let parentYBottom = Math.floor((parent.getBoundingClientRect().top + parent.getBoundingClientRect().bottom) / 2 + window.innerWidth * 0.02)
        let parentXLeft = Math.floor((parent.getBoundingClientRect().left + parent.getBoundingClientRect().right) / 2 - window.innerWidth * 0.02)
        let parentXRight = Math.floor((parent.getBoundingClientRect().left + parent.getBoundingClientRect().right) / 2 + window.innerWidth * 0.02)
        let childY = Math.floor((child.getBoundingClientRect().top + child.getBoundingClientRect().bottom) / 2)
        let childX = Math.floor((child.getBoundingClientRect().left + child.getBoundingClientRect().right) / 2)
        if ((childX > parentXLeft && childX < parentXRight) && (childY > parentYTop && childY < parentYBottom)) {
            child.style.display = 'none'
            parent.style.zIndex = 100

            if (child.className == "img-painting") {
                countPainting++
                CheckPaintings()
            }
            else if (child.className == "pieces") {
                countPieces++
                CheckPuzzle()
            }
        }
    }
    function MovePainting(child, parent, e) {
        child.style.left = `${e.clientX - child.getBoundingClientRect().width / 2 - parent.getBoundingClientRect().left}px`
        if (window.innerWidth <= maxWidthIpad) {
            child.style.top = `${e.clientY - child.getBoundingClientRect().height / 2 - framePaintingStrings.getBoundingClientRect().top}px`
        }
        else {
            child.style.top = `${e.clientY - child.getBoundingClientRect().height / 2 - parent.getBoundingClientRect().top}px`
        }
    }
    function MovePuzzle(child, parent, e) {
        child.style.left = `${e.clientX - child.getBoundingClientRect().width / 2 - parent.getBoundingClientRect().left}px`
        child.style.top = `${e.clientY - child.getBoundingClientRect().height / 2 - parent.getBoundingClientRect().top}px`
    }
    function Pointer(child, parent, childTo) {
        window.addEventListener('pointerup', () => {
            child.style.cursor = "grab"
            draggable = false
            child.style.zIndex = 1
        })
        child.addEventListener('pointerdown', (e) => {
            child.style.cursor = "grabbing"
            child.style.position = 'absolute'
            draggable = true
            child.style.zIndex = 1000
            if (child.className == "pieces") {
                MovePuzzle(child, parent, e)
            }
            else {
                MovePainting(child, parent, e)
            }

        })
        child.addEventListener('pointermove', (e) => {
            child.style.cursor = "grab"
            TouchParent(child, childTo)
            if (draggable) {
                child.style.cursor = "grabbing"
                if (child.className == "pieces") {
                    MovePuzzle(child, parent, e)
                }
                else {
                    MovePainting(child, parent, e)
                }
            }
        })
    }
    function CheckPaintings() {
        if (countPainting == 4) {
            if (window.innerWidth <= maxWidthIpad) {
                let div3 = document.querySelector('[data-test="div3"]')
                let div4 = document.querySelector('[data-test="div4"]')
                div3.style.display = "none"
                div4.style.display = "none"
            }
            else {
                framesPaintings.style.display = "none"
            }
            divActing.style.display = "flex"
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }
    }
    function CheckPuzzle() {
        if (countPieces == 15) {
            systems.forEach(element => {
                element.style.display = "inline"
            });
        }
    }
    window.onload = function () {
        const sketch = (canvas) => {
            canvas.setup = () => {
                let cnv = canvas.createCanvas(lottery.getBoundingClientRect().width, lottery.getBoundingClientRect().height);
                cnv.parent(lottery);
                cnv.background(255);
                cnv.elt.setAttribute('data-test', 'canvas');
                cnv.elt.addEventListener('pointerdown', (e) => {
                    draggable = true;
                    updateCoin(e);
                });
                coin.addEventListener('pointerdown', (e) => {
                    draggable = true;
                    updateCoin(e);
                });
                coin.addEventListener('pointermove', (e) => {
                    if (draggable) updateCoin(e);
                });
                cnv.elt.addEventListener('pointermove', (e) => {
                    if (draggable) updateCoin(e);
                });
                window.addEventListener('pointerup', () => {
                    draggable = false;
                });
            }
            function updateCoin(e) {
                const rect = lottery.getBoundingClientRect();
                const x = e.clientX - rect.left - coin.getBoundingClientRect().width / 2;
                const y = e.clientY - rect.top - coin.getBoundingClientRect().height / 2;
                coin.style.left = x + 'px';
                coin.style.top = y + 'px';
            }
            canvas.windowResized = () => {
                canvas.resizeCanvas(lottery.getBoundingClientRect().width, lottery.getBoundingClientRect().height);
                canvas.background(255);
            }
            if (window.innerWidth <= maxWidthIpad) {

                dynamicWeight = lottery.getBoundingClientRect().width * 0.04;
            }
            else {
                dynamicWeight = lottery.getBoundingClientRect().width * 0.06;
            }
            canvas.draw = () => {
                if (canvas.mouseIsPressed) {
                    canvas.erase();
                    canvas.strokeWeight(dynamicWeight);
                    canvas.line(canvas.pmouseX, canvas.pmouseY, canvas.mouseX, canvas.mouseY);
                    canvas.noErase();
                }
            }
        }
        new p5(sketch)
    }
    AllBlobes()
    BuildAdaptivePaintingsForPhone()
    Pointer(painting1, framesPaintings, framePainting1)
    Pointer(painting2, framesPaintings, framePainting2)
    Pointer(painting3, framesPaintings, framePainting3)
    Pointer(painting4, framesPaintings, framePainting4)
    piecesInPuzzle.forEach((element, index) => {
        Pointer(piecesOutPuzzle[index], ticket1, element)
    });
    window.addEventListener("resize", () => {
        AllBlobes()
        BuildAdaptivePaintingsForPhone()
        if (window.innerWidth <= maxWidthIpad) {
            dynamicWeight = lottery.getBoundingClientRect().width * 0.08;
        }
        else {
            dynamicWeight = lottery.getBoundingClientRect().width * 0.06;
        }
    })
    ticket2.addEventListener("pointermove", () => {
        ticket2.style.cursor = 'url("assets/coin.svg") 32 32, auto'
    })
    masks.addEventListener("pointermove", () => {
        masks.style.cursor = "pointer"
    })
    masks.addEventListener("click", (e) => {
        if (e.target != masks) {
            countMask++
            e.target.style.display = "none"
        }
        if (countMask == 6) {
            masksInfo.style.display = "flex"
            lines.forEach(element => {
                element.style.opacity = '100%'
            });
        }
    })
})