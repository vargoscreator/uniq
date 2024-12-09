document.addEventListener('DOMContentLoaded', () => {
    const sectionContentButtons = document.querySelectorAll('.sectionContent__select-btn');
    const sectionContentContents = document.querySelectorAll('.sectionContent__content');

    sectionContentButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            sectionContentButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            sectionContentContents.forEach(content => content.classList.remove('active'));
            sectionContentContents[index].classList.add('active');
        });
    });
});
