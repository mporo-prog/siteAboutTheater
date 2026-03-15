document.addEventListener("DOMContentLoaded", () => {
    let maxWidthIpad = 1024
    let nav = document.querySelector('[data-test="nav"]')
    let ticketNav = document.querySelector('[data-test="circles-nav"]')
    let ticketFooter = document.querySelector('[data-test="circles-footer"]')
    let ticket1Top = document.querySelector('[data-test="circles-ticket1-top"]')
    let ticket1Bottom = document.querySelector('[data-test="circles-ticket1-bottom"]')
    let ticket2Top = document.querySelector('[data-test="circles-ticket2-top"]')
    let ticket2Bottom = document.querySelector('[data-test="circles-ticket2-bottom"]')
    let timelineTop = document.querySelector('[data-test="circles-timeline-top"]')
    let timelineBottom = document.querySelector('[data-test="circles-timeline-bottom"]')
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
    let divActing = document.querySelector('[data-test="div-acting"]')
    let divActingTop = document.querySelector('[data-test="div-acting-top"]')
    let divActingBottom = document.querySelector('[data-test="div-acting-bottom"]')
    let ticket1 = document.querySelector('[data-test="ticket1"]')
    let pieceInPuzzle1 = document.querySelector('[data-test="pieceInPuzzle1"]')
    let pieceInPuzzle2 = document.querySelector('[data-test="pieceInPuzzle2"]')
    let pieceInPuzzle3 = document.querySelector('[data-test="pieceInPuzzle3"]')
    let pieceInPuzzle4 = document.querySelector('[data-test="pieceInPuzzle4"]')
    let pieceInPuzzle5 = document.querySelector('[data-test="pieceInPuzzle5"]')
    let pieceInPuzzle6 = document.querySelector('[data-test="pieceInPuzzle6"]')
    let pieceInPuzzle7 = document.querySelector('[data-test="pieceInPuzzle7"]')
    let pieceInPuzzle8 = document.querySelector('[data-test="pieceInPuzzle8"]')
    let pieceInPuzzle9 = document.querySelector('[data-test="pieceInPuzzle9"]')
    let pieceInPuzzle10 = document.querySelector('[data-test="pieceInPuzzle10"]')
    let pieceInPuzzle11 = document.querySelector('[data-test="pieceInPuzzle11"]')
    let pieceInPuzzle12 = document.querySelector('[data-test="pieceInPuzzle12"]')
    let pieceInPuzzle13 = document.querySelector('[data-test="pieceInPuzzle13"]')
    let pieceInPuzzle14 = document.querySelector('[data-test="pieceInPuzzle14"]')
    let pieceInPuzzle15 = document.querySelector('[data-test="pieceInPuzzle15"]')
    let pieceOutPuzzle1 = document.querySelector('[data-test="pieceOutPuzzle1"]')
    let pieceOutPuzzle2 = document.querySelector('[data-test="pieceOutPuzzle2"]')
    let pieceOutPuzzle3 = document.querySelector('[data-test="pieceOutPuzzle3"]')
    let pieceOutPuzzle4 = document.querySelector('[data-test="pieceOutPuzzle4"]')
    let pieceOutPuzzle5 = document.querySelector('[data-test="pieceOutPuzzle5"]')
    let pieceOutPuzzle6 = document.querySelector('[data-test="pieceOutPuzzle6"]')
    let pieceOutPuzzle7 = document.querySelector('[data-test="pieceOutPuzzle7"]')
    let pieceOutPuzzle8 = document.querySelector('[data-test="pieceOutPuzzle8"]')
    let pieceOutPuzzle9 = document.querySelector('[data-test="pieceOutPuzzle9"]')
    let pieceOutPuzzle10 = document.querySelector('[data-test="pieceOutPuzzle10"]')
    let pieceOutPuzzle11 = document.querySelector('[data-test="pieceOutPuzzle11"]')
    let pieceOutPuzzle12 = document.querySelector('[data-test="pieceOutPuzzle12"]')
    let pieceOutPuzzle13 = document.querySelector('[data-test="pieceOutPuzzle13"]')
    let pieceOutPuzzle14 = document.querySelector('[data-test="pieceOutPuzzle14"]')
    let pieceOutPuzzle15 = document.querySelector('[data-test="pieceOutPuzzle15"]')
    let ticket2 = document.querySelector('[data-test="ticket2"]')
    let lottery = document.querySelector('[data-test="lottery"]');
    // let lotteryTicket = document.querySelector('[data-test="lottery-ticket"]')
    let coin = document.querySelector('[data-test="coin"]')
    let mask1 = document.querySelector('[data-test="mask1"]')
    let mask2 = document.querySelector('[data-test="mask2"]')
    let mask3 = document.querySelector('[data-test="mask3"]')
    let mask4 = document.querySelector('[data-test="mask4"]')
    let mask5 = document.querySelector('[data-test="mask5"]')
    let mask6 = document.querySelector('[data-test="mask6"]')
    let draggable = false
    let count = 0
    let countPieces = 0
    let dynamicWeight;

    


    let framePaintingWithoutColor1 = document.querySelector('[data-test="frame-painting-without-color1"]')
    let framePaintingWithoutColor2 = document.querySelector('[data-test="frame-painting-without-color2"]')
    let framePaintingWithoutColor3 = document.querySelector('[data-test="frame-painting-without-color3"]')
    let framePaintingWithoutColor4 = document.querySelector('[data-test="frame-painting-without-color4"]')

    // function CreateTextAboutActing(){

    // }

    function BuildAdaptivePaintingsForPhone(){
        while (framePaintingStrings.firstChild) {
            framePaintingStrings.removeChild(framePaintingStrings.firstChild);
        }

        if(window.innerWidth <= maxWidthIpad){
            div1 = document.createElement("div")
            div2 = document.createElement("div")
            div3 = document.createElement("div")
            div4 = document.createElement("div")
            div3.dataset.test = "div3"
            div4.dataset.test = "div4"
            div1.className = "adaptivePhonePaintings"
            div2.className = "adaptivePhonePaintings"
            div3.className = "adaptivePhonePaintings"
            div4.className = "adaptivePhonePaintings"
            div1.appendChild(framePaintingWithoutColor1)
            div1.appendChild(framePaintingWithoutColor2)
            div2.appendChild(framePaintingWithoutColor3)
            div2.appendChild(framePaintingWithoutColor4)
            div3.appendChild(painting3)
            div3.appendChild(painting2)
            div4.appendChild(painting4)
            div4.appendChild(painting1)
            framePaintingStrings.appendChild(div1)
            framePaintingStrings.appendChild(div2)
            framePaintingStrings.appendChild(div3)
            framePaintingStrings.appendChild(div4)
            framePaintingStrings.appendChild(divActing)
            divActing.appendChild(divActingTop)
            divActing.appendChild(divActingBottom)
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }
        else{
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
        CreateBlob(ticketNav)
        CreateBlob(ticketFooter)
        CreateBlob(ticket1Top)
        CreateBlob(ticket1Bottom)
        CreateBlob(ticket2Top)
        CreateBlob(ticket2Bottom)
        CreateBlob(timelineTop)
        CreateBlob(timelineBottom)
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

    function TouchParentPuzzle(pieceInPuzzle, pieceOutPuzzle) {
        let parentYTop = Math.floor((pieceInPuzzle.getBoundingClientRect().top + pieceInPuzzle.getBoundingClientRect().bottom) / 2 - window.innerWidth * 0.02)
        let parentYBottom = Math.floor((pieceInPuzzle.getBoundingClientRect().top + pieceInPuzzle.getBoundingClientRect().bottom) / 2 + window.innerWidth * 0.02)
        let parentXLeft = Math.floor((pieceInPuzzle.getBoundingClientRect().left + pieceInPuzzle.getBoundingClientRect().right) / 2 - window.innerWidth * 0.02)
        let parentXRight = Math.floor((pieceInPuzzle.getBoundingClientRect().left + pieceInPuzzle.getBoundingClientRect().right) / 2 + window.innerWidth * 0.02)
        let childY = Math.floor((pieceOutPuzzle.getBoundingClientRect().top + pieceOutPuzzle.getBoundingClientRect().bottom) / 2)
        let childX = Math.floor((pieceOutPuzzle.getBoundingClientRect().left + pieceOutPuzzle.getBoundingClientRect().right) / 2)

        if ((childX > parentXLeft && childX < parentXRight) && (childY > parentYTop && childY < parentYBottom)) {
            pieceOutPuzzle.style.display = 'none'
            pieceInPuzzle.style.zIndex = 100
            countPieces++
            CheckPuzzle()
        }
    }

    function PointerWithPaintings(frame, painting, framePainting) {
        painting.addEventListener('pointerdown', (e) => {
            painting.style.cursor = "grabbing"
            painting.style.position = 'absolute'
            draggable = true

            painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - framesPaintings.getBoundingClientRect().left}px`
            
            if(window.innerWidth <= maxWidthIpad){
                painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framePaintingStrings.getBoundingClientRect().top}px`
            }
            else{
                painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
            }
        })
        window.addEventListener('pointerup', () => {

            painting.style.cursor = "grab"
            draggable = false
        })
        painting.addEventListener('pointermove', (e) => {
            painting.style.cursor = "grab"
            TouchParent(frame, painting, framePainting)
            if (draggable) {
                painting.style.cursor = "grabbing"

                painting.style.left = `${e.clientX - painting.getBoundingClientRect().width / 2 - framesPaintings.getBoundingClientRect().left}px`

                if(window.innerWidth <= maxWidthIpad){
                    painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framePaintingStrings.getBoundingClientRect().top}px`
                }
                else{
                    painting.style.top = `${e.clientY - painting.getBoundingClientRect().height / 2 - framesPaintings.getBoundingClientRect().top}px`
                }
            }
        })
    }


    function PointerPuzzle(pieceInPuzzle, pieceOutPuzzle) {
        pieceOutPuzzle.addEventListener('pointerdown', (e) => {
            pieceOutPuzzle.style.cursor = "grabbing"
            draggable = true

            
            pieceOutPuzzle.style.left = `${e.clientX - pieceOutPuzzle.getBoundingClientRect().width / 2}px`
            pieceOutPuzzle.style.top = `${e.clientY - pieceOutPuzzle.getBoundingClientRect().height / 2 - ticket1.getBoundingClientRect().top}px`
            
        })
        window.addEventListener('pointerup', () => {

            pieceOutPuzzle.style.cursor = "grab"
            draggable = false
        })
        pieceOutPuzzle.addEventListener('pointermove', (e) => {
            pieceOutPuzzle.style.cursor = "grab"
            TouchParentPuzzle(pieceInPuzzle, pieceOutPuzzle)
            if (draggable) {
                pieceOutPuzzle.style.cursor = "grabbing"
                
                pieceOutPuzzle.style.left = `${e.clientX - pieceOutPuzzle.getBoundingClientRect().width / 2}px`
                pieceOutPuzzle.style.top = `${e.clientY - pieceOutPuzzle.getBoundingClientRect().height / 2 - ticket1.getBoundingClientRect().top}px`
            }
        })
    }

    function CheckPaintings() {
        if (count == 4) {
            if(window.innerWidth <= maxWidthIpad){
                let div3 = document.querySelector('[data-test="div3"]')
                let div4 = document.querySelector('[data-test="div4"]')
                div3.style.display = "none"
                div4.style.display = "none"
            }
            else{
                framesPaintings.style.display = "none"
            }
            divActing.style.display = "flex"
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }
    }
    function CheckPuzzle() {
        if (countPieces == 15) {

        }
    }

    window.onload = function() {
        const sketch = (canvas) => {
            canvas.setup = () => {
                let cnv = canvas.createCanvas(lottery.getBoundingClientRect().width, lottery.getBoundingClientRect().height); 
                cnv.parent(lottery);
                cnv.background(255);
                cnv.elt.setAttribute('data-test', 'canvas');


                cnv.elt.addEventListener('pointerdown', (e) => {
                draggable = true;
                // coin.style.display = 'block'; // Показываем монету
                updateCoin(e);
            });
                coin.addEventListener('pointerdown', (e) => {
                draggable = true;
                // coin.style.display = 'block'; // Показываем монету
                updateCoin(e);
            });

            // Движение (слушаем всё окно, чтобы не было рывков)
            coin.addEventListener('pointermove', (e) => {
                if (draggable) updateCoin(e);
            });
            cnv.elt.addEventListener('pointermove', (e) => {
                if (draggable) updateCoin(e);
            });

            // Отпускаем
            window.addEventListener('pointerup', () => {
                draggable = false;
                // coin.style.display = 'none'; // Можно спрятать, если нужно
            });

            }

            function updateCoin(e) {
            const rect = lottery.getBoundingClientRect();
            
            // Вычисляем позицию курсора ВНУТРИ родителя
            // clientX/Y - положение курсора в окне
            // rect.left/top - положение родителя в окне
            const x = e.clientX - rect.left - coin.getBoundingClientRect().width / 2;
            const y = e.clientY - rect.top - coin.getBoundingClientRect().height / 2;

            coin.style.left = x + 'px';
            coin.style.top = y + 'px';
        }

            canvas.windowResized = () => {
                canvas.resizeCanvas(lottery.getBoundingClientRect().width, lottery.getBoundingClientRect().height);
                canvas.background(255);
            }

            if(window.innerWidth <= maxWidthIpad){

                dynamicWeight = lottery.getBoundingClientRect().width * 0.04; 
            }
            else{
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
    PointerWithPaintings(frame1, painting1, framePainting1)
    PointerWithPaintings(frame2, painting2, framePainting2)
    PointerWithPaintings(frame3, painting3, framePainting3)
    PointerWithPaintings(frame4, painting4, framePainting4)
    PointerWithPaintings(frame4, painting4, framePainting4)
    PointerPuzzle(pieceInPuzzle1, pieceOutPuzzle1)
    PointerPuzzle(pieceInPuzzle2, pieceOutPuzzle2)
    PointerPuzzle(pieceInPuzzle3, pieceOutPuzzle3)
    PointerPuzzle(pieceInPuzzle4, pieceOutPuzzle4)
    PointerPuzzle(pieceInPuzzle5, pieceOutPuzzle5)
    PointerPuzzle(pieceInPuzzle6, pieceOutPuzzle6)
    PointerPuzzle(pieceInPuzzle7, pieceOutPuzzle7)
    PointerPuzzle(pieceInPuzzle8, pieceOutPuzzle8)
    PointerPuzzle(pieceInPuzzle9, pieceOutPuzzle9)
    PointerPuzzle(pieceInPuzzle10, pieceOutPuzzle10)
    PointerPuzzle(pieceInPuzzle11, pieceOutPuzzle11)
    PointerPuzzle(pieceInPuzzle12, pieceOutPuzzle12)
    PointerPuzzle(pieceInPuzzle13, pieceOutPuzzle13)
    PointerPuzzle(pieceInPuzzle14, pieceOutPuzzle14)
    PointerPuzzle(pieceInPuzzle15, pieceOutPuzzle15)

    window.addEventListener("resize", () => {
        AllBlobes()
        BuildAdaptivePaintingsForPhone()
        if(divActing.style.display == "flex"){
            CreateBlob(divActingTop)
            CreateBlob(divActingBottom)
        }



            if(window.innerWidth <= maxWidthIpad){

                dynamicWeight = lottery.getBoundingClientRect().width * 0.04; 
            }
            else{
                dynamicWeight = lottery.getBoundingClientRect().width * 0.06; 
        }
    })
    
    mask1.addEventListener("click", () => {
        mask1.style.display = "none"
    })
    mask2.addEventListener("click", () => {
        mask2.style.display = "none"
    })
    mask3.addEventListener("click", () => {
        mask3.style.display = "none"
    })
    mask4.addEventListener("click", () => {
        mask4.style.display = "none"
    })
    mask5.addEventListener("click", () => {
        mask5.style.display = "none"
    })
    mask6.addEventListener("click", () => {
        mask6.style.display = "none"
    })

    ticket2.addEventListener("pointermove", () => {
        ticket2.style.cursor = 'url("assets/coin.svg") 32 32, auto'
    })







})