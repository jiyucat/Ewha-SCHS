document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");
    const filterContainer = document.getElementById("filter-container");

    // 날짜별 폴더와 이미지 개수를 설정 (이 부분은 서버에서 동적으로 생성 가능)
    const dateFolders = {
        "20250201": 50,   
        "20250202": 50,  
        "20250203": 50,
        "20250205": 50
    };

    // 날짜별 필터 버튼 생성
    Object.keys(dateFolders).forEach(date => {
        const btn = document.createElement("button");
        btn.classList.add("filter-btn");
        btn.setAttribute("data-filter", date);
        btn.textContent = date; // 버튼에 날짜 표시
        filterContainer.appendChild(btn);
    });

    // 이미지 로딩 함수
    function loadImages() {
        galleryContainer.innerHTML = "";  // 기존 이미지 초기화

        Object.entries(dateFolders).forEach(([date, count]) => {
            // 날짜별 제목 추가
            const dateTitle = document.createElement("h2");
            dateTitle.textContent = date;
            dateTitle.classList.add("gallery-date");
            galleryContainer.appendChild(dateTitle);

            for (let i = 1; i <= count; i++) {
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("gallery-item", date);

                const img = document.createElement("img");
                img.src = `images/${date}/${date}_${i}.jpg`;  // 날짜별 폴더에서 이미지 가져오기
                img.alt = `${date} Image ${i}`;

                imgDiv.appendChild(img);
                galleryContainer.appendChild(imgDiv);
            }
        });

        // 🚀 이미지가 추가된 후에 모달 이벤트 적용
        setupModal();
    }

    // 필터링 기능
    filterContainer.addEventListener("click", (event) => {
        if (!event.target.classList.contains("filter-btn")) return;
        const filter = event.target.getAttribute("data-filter");
        const images = document.querySelectorAll(".gallery-item");
        const titles = document.querySelectorAll(".gallery-date");

        images.forEach(img => {
            if (filter === "all" || img.classList.contains(filter)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });

        titles.forEach(title => {
            if (filter === "all" || title.textContent === filter) {
                title.style.display = "block";
            } else {
                title.style.display = "none";
            }
        });
    });

    //모달 창 기능을 설정하는 함수
    function setupModal() {
        const galleryItems = document.querySelectorAll(".gallery-item img");

        // 모달 요소 생성 (한 번만 추가)
        let modal = document.querySelector(".modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.classList.add("modal");
            document.body.appendChild(modal);

            const modalImg = document.createElement("img");
            modal.appendChild(modalImg);

            // 닫기 버튼 추가
            const closeButton = document.createElement("button");
            closeButton.classList.add("modal-close");
            closeButton.innerHTML = "&times;";
            modal.appendChild(closeButton);

            // 닫기 버튼 클릭 시 모달 닫기
            closeButton.addEventListener("click", () => {
                modal.classList.remove("active");
            });

            // 모달 바깥 배경 클릭 시 닫기
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.remove("active");
                }
            });
        }

        const modalImg = modal.querySelector("img");

        //갤러리 이미지 클릭 시 모달 열기
        galleryItems.forEach(img => {
            img.addEventListener("click", () => {
                modalImg.src = img.src; // 원본 이미지 표시
                modal.classList.add("active");
            });
        });
    }

    //페이지 로드 시 이미지 추가
    loadImages();
});
