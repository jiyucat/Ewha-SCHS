document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    const body = document.body;

    if (header) {
        const headerHeight = header.offsetHeight; // header의 실제 높이 계산
        body.style.paddingTop = `${headerHeight}px`; // body에 padding-top 적용
    }
});
