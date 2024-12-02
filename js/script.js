// 마우스 효과
        const menuItems = document.querySelectorAll('#menu a');

        menuItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                const img = item.querySelector('img');
                const span = item.querySelector('span');
                img.style.transform = 'translateY(40px)';
                span.style.transform = 'translateY(40px)';
            });

            item.addEventListener('mouseout', () => {
                const img = item.querySelector('img');
                const span = item.querySelector('span');
                img.style.transform = 'translateY(0px)';
                span.style.transform = 'translateY(0px)';
            });
        });

        // 페이지 확인 후 각 메뉴 이미지 변경
        const currentPage = window.location.pathname; // 현재 페이지 경로

        // 각 아이콘의 요소
        const homeIcon = document.getElementById('home-icon');
        const profileIcon = document.getElementById('profile-icon');
        const detailIcon = document.getElementById('detail-icon');
        const locationIcon = document.getElementById('location-icon');
        const contactIcon = document.getElementById('contact-icon');

        // 각 페이지에 따라 다른 이미지로 교체
        if (currentPage.endsWith('/') || currentPage.includes('index.html')) {
            // index.html이 있거나 '/'인 경우
            homeIcon.src = 'img/rect_icon01_on.png';
        } else if (currentPage.includes('profile.html')) {
            profileIcon.src = 'img/rect_icon02_on.png';
        } else if (currentPage.includes('detail.html')) {
            detailIcon.src = 'img/rect_icon03_on.png';
        } else if (currentPage.includes('location.html')) {
            locationIcon.src = 'img/rect_icon04_on.png';
        } else if (currentPage.includes('contact.html')) {
            contactIcon.src = 'img/rect_icon05_on.png';
        }