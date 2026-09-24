document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const btnPlay = document.getElementById('btn-play');
    const btnInfo = document.getElementById('btn-info');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    btnPlay.addEventListener('click', () => {
        alert('Memutar trailer...');
    });

    btnInfo.addEventListener('click', () => {
        alert('Menampilkan detail film...');
    });

    const movies = [
        { title: "Stranger Things", img: "assets/poster-1.jpg" },
        { title: "Wednesday", img: "assets/poster-2.jpg" },
        { title: "The Witcher", img: "assets/poster-3.jpg" },
        { title: "Money Heist", img: "assets/poster-4.jpg" },
        { title: "Squid Game", img: "assets/poster-5.jpg" },
        { title: "Dark", img: "assets/poster-6.jpg" },
        { title: "The Crown", img: "assets/poster-7.jpg" },
        { title: "Resident Evil", img: "assets/poster-8.jpg" },
        { title: "Lupin", img: "assets/poster-9.jpg" },
        { title: "Oppenheimer", img: "assets/poster-10.jpg" }
    ];

    const row1 = document.getElementById('row-1');
    const row2 = document.getElementById('row-2');
    const row3 = document.getElementById('row-3');
    const row4 = document.getElementById('row-4');

    function renderRow(container, movieList) {
        container.innerHTML = '';
        movieList.forEach(movie => {
            const poster = document.createElement('div');
            poster.classList.add('poster');

            const img = document.createElement('img');
            img.src = movie.img;
            img.alt = movie.title;
            img.loading = 'lazy';

            const title = document.createElement('span');
            title.classList.add('poster-title');
            title.textContent = movie.title;

            poster.appendChild(img);
            poster.appendChild(title);
            poster.addEventListener('click', () => {
                alert('Memutar: ' + movie.title);
            });

            container.appendChild(poster);
        });
    }

    renderRow(row1, movies);
    renderRow(row2, [...movies].reverse());
    renderRow(row3, movies.slice(0, 6));
    renderRow(row4, movies.slice(4));
});