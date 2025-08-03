document.addEventListener('DOMContentLoaded', function () {
    const coursesData = [
    {
        "id": 1,
        "title": "Curso Arduino: Aprende Electronica y Programacion",
        "description": "Domina los fundamentos de Arduino, electronica y programacion desde cero.",
        "link": "https://drive.google.com/drive/folders/1SXDAUq5T4wGty4sEpDWiaEOphD7kJSWW?usp=sharing",
        "category": "robotica"
    },
    {
        "id": 2,
        "title": "Curso Arduino y Microcontrolador PIC",
        "description": "Aprende a trabajar con Arduino y microcontroladores PIC en proyectos avanzados.",
        "link": "https://drive.google.com/drive/folders/1xu2R3qbjyoIFChbgFa031_5k_TLr27eK?usp=sharing",
        "category": "robotica"
    },
    {
        "id": 3,
        "title": "Curso Arduino Interactivo: Domina el Control, Movimiento y Comunicacion",
        "description": "Controla dispositivos, movimiento y comunicacion con Arduino.",
        "link": "https://drive.google.com/drive/folders/1-Vbcs9PErnzbInOShajPGMNezbas58dZ?usp=sharing",
        "category": "robotica"
    },
    {
        "id": 4,
        "title": "Curso Robotica con MATLAB y Arduino: Modelado y Simulacion",
        "description": "Modela y simula sistemas roboticos con MATLAB y Arduino.",
        "link": "https://drive.google.com/drive/folders/1Y2I46pmqYA_ZfhQoGETsLr4U6gXcMUr8?usp=sharing",
        "category": "robotica"
    },
    {
        "id": 5,
        "title": "Curso Robotica y Hardware",
        "description": "Fundamentos de robotica y hardware para proyectos avanzados.",
        "link": "https://drive.google.com/drive/folders/1c-ZsSp1Hd-THynaRu_mFw_Hu02KKxHdx?usp=sharing",
        "category": "robotica"
    },
    {
        "id": 6,
        "title": "Curso Sistemas Tecnicos en la Edificacion",
        "description": "Aprende sobre sistemas tecnicos aplicados a la edificacion.",
        "link": "https://drive.google.com/drive/folders/1NkRvx9b8ETgVOfQNjnvCgcdtrDBRLJHV?usp=sharing",
        "category": "domotica"
    },
    {
        "id": 7,
        "title": "Curso Domotica",
        "description": "Automatizacion del hogar con sistemas inteligentes.",
        "link": "https://drive.google.com/drive/folders/1RztLEn4XT9BkRbDPb3kcicJE8H8UoOFR?usp=sharing",
        "category": "domotica"
    },
    {
        "id": 8,
        "title": "Curso Electronica Desde Cero",
        "description": "Fundamentos de electronica para principiantes.",
        "link": "https://drive.google.com/drive/folders/1_9Jm4mD_6gEHA_EYc4GptEa7rQV-DAAU?usp=sharing",
        "category": "electronica"
    },
    {
        "id": 9,
        "title": "Curso Electronica, Robotica, Domotica",
        "description": "Combinacion de electronica, robotica y domotica en un solo curso.",
        "link": "https://drive.google.com/drive/folders/1Dfy_ndTnJFOejpks1DFCKHLTAXdW26ew?usp=sharing",
        "category": "electronica"
    },
    {
        "id": 10,
        "title": "Programacion explicada paso a paso",
        "description": "Aprende programacion desde cero con ejemplos practicos.",
        "link": "https://drive.google.com/drive/folders/111BnZrTHfLmcL_auwZNIRY4QuaJTGtST?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 11,
        "title": "Curso principal: Guia para tus primeros pasos",
        "description": "Guia completa para comenzar en el mundo de la tecnologia.",
        "link": "https://drive.google.com/drive/folders/18q7OJQ4O4vz4kHRooACI6_SPNSc8Olkx?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 12,
        "title": "Fundamentos de Windows 10 (Informatica)",
        "description": "Domina los fundamentos del sistema operativo Windows 10.",
        "link": "https://drive.google.com/drive/folders/1LZtMvcviVWH0PO9QoD3J-NGsXUA9kEJk?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 13,
        "title": "Aprende desde cero absoluto hasta trainee",
        "description": "Curso completo desde nivel principiante hasta intermedio.",
        "link": "https://drive.google.com/drive/folders/1D3UkNKEp-aMTzKSQIZa5dVAr4_G0kAd8?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 14,
        "title": "Curso de accesibilidad web",
        "description": "Aprende a crear sitios web accesibles para todos.",
        "link": "https://drive.google.com/drive/folders/1wiYVtCzOnRfKwGGkae44_FCd4c2VP91S?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 15,
        "title": "Diseno responsivo con cajas flexibles (CSS3)",
        "description": "Domina el diseno responsivo con Flexbox en CSS3.",
        "link": "https://drive.google.com/drive/folders/13Yj3LJD7bHQJhPQOa0LjQaFhJwjKnQVW?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 16,
        "title": "PrimeFaces y Spring Boot: Crea tu primera app web con Java",
        "description": "Desarrollo de aplicaciones web con PrimeFaces y Spring Boot.",
        "link": "https://drive.google.com/drive/folders/12zeH6LFYWDcvHP6qmCYI9T5NhGR_Hi7T?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 17,
        "title": "Curso de diseno web con Bootstrap",
        "description": "Crea sitios web modernos con el framework Bootstrap.",
        "link": "https://drive.google.com/drive/folders/1FhnFAELw-84__5BXIMMRVvKvcEsbGU_8?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 18,
        "title": "Crea aplicaciones iOS y Android con Angular",
        "description": "Desarrollo de aplicaciones moviles multiplataforma con Angular.",
        "link": "https://drive.google.com/drive/folders/18Fb40pfwIh8_r7cTRocKfws8xf_wuxn0?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 19,
        "title": "Aprende 5 lenguajes de programacion desde cero",
        "description": "Domina los fundamentos de 5 lenguajes de programacion populares.",
        "link": "https://drive.google.com/drive/folders/1BAwa1F_8d95IUuWtVRMa5ft5LYOvS9y9?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 20,
        "title": "Comienza a programar en Python desde cero",
        "description": "Introduccion al lenguaje de programacion Python.",
        "link": "https://drive.google.com/drive/folders/1bQw3m6W3JUWh2OAg64bOJjCc_iHpzYtJ?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 21,
        "title": "Java SE: Taller de programacion de cero a trainee",
        "description": "Aprende Java Standard Edition desde cero.",
        "link": "https://drive.google.com/drive/folders/1by9dE0Ec9HObwAL0zlW80gevmn1cUo1V?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 22,
        "title": "Coleccion de libros esenciales de programacion",
        "description": "Biblioteca digital con los mejores libros de programacion.",
        "link": "https://drive.google.com/drive/folders/1pz6cdZErEdPmwyC3PM-6DzETcoHHR1V1?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 23,
        "title": "Proceso CRUD con C# y Oracle Database",
        "description": "Implementacion de operaciones CRUD con C# y Oracle.",
        "link": "https://drive.google.com/drive/folders/1QiqV0SEIhXu8zQ-ys2DGzCY8jmlU2fEX?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 24,
        "title": "Proceso CRUD con C# y PostgreSQL",
        "description": "Implementacion de operaciones CRUD con C# y PostgreSQL.",
        "link": "https://drive.google.com/drive/folders/1olV68Opj3o69wqrbNwEQ_5N22vjwTFHH?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 25,
        "title": "Proceso CRUD con C# y Visual FoxPro",
        "description": "Implementacion de operaciones CRUD con C# y Visual FoxPro.",
        "link": "https://drive.google.com/drive/folders/1uOE14N5NJo_6KL7B1fgd7t5ASLJ8RdSQ?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 26,
        "title": "Visual FoxPro - Clases visuales (nueva version)",
        "description": "Programacion con Visual FoxPro y su interfaz visual.",
        "link": "https://drive.google.com/drive/folders/1zBOdRiUZDzpuvCZU6CJA4Gy8xCmQyCng?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 27,
        "title": "Curso completo de SolidWorks",
        "description": "Domina el diseno 3D con SolidWorks desde cero.",
        "link": "https://drive.google.com/drive/folders/1X_-ItOOJsz-Y3ophdyr8Iry7NefREZGX?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 28,
        "title": "Curso completo de AutoCAD",
        "description": "Aprende AutoCAD para diseno tecnico y arquitectonico.",
        "link": "https://drive.google.com/drive/folders/18g6GjVpwoBlb4OsguWRz67iqCjH4ukxE?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 29,
        "title": "Especializacion en AutoCAD Electrical",
        "description": "AutoCAD especializado en diseno electrico.",
        "link": "https://drive.google.com/drive/folders/1ZXDQiTfrDd-9WMcBCcBQHjhfZa3CwruU?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 30,
        "title": "Minitab para control de calidad",
        "description": "Uso de Minitab en procesos de control de calidad.",
        "link": "https://drive.google.com/drive/folders/1AmANOYFge92RE-9ME6_i6vqIxnMuoscg?usp=sharing",
        "category": "ingenieria"
    },
    {
        "id": 31,
        "title": "Control de motores con variadores de frecuencia",
        "description": "Control avanzado de motores electricos.",
        "link": "https://drive.google.com/drive/folders/1livPk80k0AKG7rjGqJnKhqEmm5-LbXJG?usp=sharing",
        "category": "ingenieria"
    },
    {
        "id": 32,
        "title": "Fundamentos de mecanica industrial",
        "description": "Principios basicos de mecanica aplicada a la industria.",
        "link": "https://drive.google.com/drive/folders/1e6-1V1HNI8piBYogBGnliwpirwu4Aksi?usp=sharing",
        "category": "ingenieria"
    },
    {
        "id": 33,
        "title": "Programacion de PLCs industriales",
        "description": "Programacion de controladores logicos programables.",
        "link": "https://drive.google.com/drive/folders/1ElAGOumeCxcJLt5jYawriQMC5AfKDICq?usp=sharing",
        "category": "ingenieria"
    },
    {
        "id": 34,
        "title": "Programacion CNC avanzada",
        "description": "Programacion de maquinas CNC para manufactura.",
        "link": "https://drive.google.com/drive/folders/16LcdRMoqxxt5DSpu8Ra8XPhGMAv5OfDL?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 35,
        "title": "Biblioteca de ingenieria",
        "description": "Recursos y materiales para estudio de ingenieria.",
        "link": "https://drive.google.com/drive/folders/10PnRHTQF9xLMrk7LTpDolJPHsym2l8z-?usp=sharing",
        "category": "ingenieria"
    },
    {
        "id": 36,
        "title": "Core Tools para gestion de calidad",
        "description": "Herramientas esenciales para gestion de calidad en manufactura.",
        "link": "https://drive.google.com/drive/folders/1JgrDnBuUd5Qa58GluUPDw1B88R8zA17l?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 37,
        "title": "Tecnicas de balanceo de lineas de produccion",
        "description": "Optimizacion de lineas de produccion industrial.",
        "link": "https://drive.google.com/drive/folders/1SLxVgQIhdTFuVAMfUd8HZ65cek9233B6?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 38,
        "title": "Introduccion a MRP (Planificacion de Requisitos de Materiales)",
        "description": "Fundamentos de sistemas MRP para manufactura.",
        "link": "https://drive.google.com/drive/folders/1Ffg78NB2Z-A3nh-uphysB_fxnPWU2Gqg?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 39,
        "title": "Learn Manufacturing",
        "description": "Curso completo sobre procesos de manufactura.",
        "link": "https://drive.google.com/drive/folders/1kT1-V0s8UtgbQgTqfKITUIHTAsyjCczU?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 40,
        "title": "Industria 4.0",
        "description": "Introduccion a la cuarta revolucion industrial.",
        "link": "https://drive.google.com/drive/folders/1fDhXC5EH-5X9sz9m5QdIhHny-9kVWZ4g?usp=sharing",
        "category": "manufactura"
    },
    {
        "id": 41,
        "title": "Programacion y control de PLC",
        "description": "Control industrial con PLCs avanzados.",
        "link": "https://drive.google.com/drive/folders/1dz51jwINMHkxPo-IMsHEiTx4OEIxBD1H?usp=sharing",
        "category": "ingenieria"
    }
    ];

    // Normaliza texto: quita acentos, convierte a minúsculas y elimina caracteres especiales
    function normalizeText(text) {
        return text.normalize("NFD")
                   .replace(/[\u0300-\u036f]/g, "") // quita tildes
                   .replace(/[^a-zA-Z0-9\s]/g, "")  // quita caracteres especiales
                   .toLowerCase();
    }

    function renderCourses(filter = 'all') {
        const container = document.getElementById('coursesContainer');
        container.innerHTML = '';

        const filteredCourses = filter === 'all'
            ? coursesData
            : coursesData.filter(course => course.category === filter);

        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';

            const cardBody = document.createElement('div');
            cardBody.className = 'course-body';

            const badge = document.createElement('span');
            badge.className = `course-badge badge-${course.category}`;
            badge.textContent = course.category;

            const title = document.createElement('h3');
            title.className = 'course-title';
            title.textContent = course.title;

            const description = document.createElement('p');
            description.className = 'course-description';
            description.textContent = course.description;

            const link = document.createElement('a');
            link.href = course.link;
            link.target = '_blank';
            link.className = 'course-link';
            link.innerHTML = 'Ver curso <i class="fas fa-external-link-alt"></i>';

            cardBody.appendChild(badge);
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(link);

            card.appendChild(cardBody);
            container.appendChild(card);
        });
    }

    // Filtro por categoría (opcional)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            renderCourses(filterValue);
        });
    });

    // Búsqueda con normalización
    const searchInput = document.getElementById('courseSearchInput');
    searchInput.addEventListener('input', function () {
        const searchTerm = normalizeText(this.value);
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(card => {
            const title = normalizeText(card.querySelector('.course-title').textContent);
            const description = normalizeText(card.querySelector('.course-description').textContent);

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    renderCourses();
});
