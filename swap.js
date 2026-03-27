document.addEventListener('DOMContentLoaded', () => {
    const containerSelector = document.querySelector('[data-test="timeline"]');
    containerSelector.style.touchAction = "pan-down"
    const timeline = Array.from(containerSelector.children);
    if (timeline.length > 0) {
        const swappable = new Draggable.Swappable(timeline, {
            draggable: '.Block--isDraggable',
            mirror: { constrainDimensions: true },
        });
        swappable.on('drag:stop', () => {
            requestAnimationFrame(() => {
                const currentItems = Array.from(containerSelector.children);
                currentItems.forEach((el, index) => {
                    const targetIndex = parseInt(el.getAttribute('data-index')) - 1;
                    const currentIndex = index;
                    if (currentIndex == targetIndex) {
                        setTimeout(() => {
                            el.classList.remove('Block--isDraggable');
                            el.src = `assets/timelineWithColor${currentIndex + 1}.svg`;
                        }, 0);
                    }
                });
            });
        });
    }
});
