        document.addEventListener('DOMContentLoaded', function() {
            const materialsData = [
                { name: 'Programación explicada paso a paso', icon: 'fas fa-code', url: 'https://drive.google.com/drive/folders/111BnZrTHfLmcL_auwZNIRY4QuaJTGtST?usp=sharing', category: 'programacion', description: 'Curso introductorio que enseña los conceptos fundamentales de la programación de manera clara y progresiva.' },
                { name: 'Curso principal: Guía para tus primeros pasos', icon: 'fas fa-laptop-code', url: 'https://drive.google.com/drive/folders/18q7OJQ4O4vz4kHRooACI6_SPNSc8Olkx?usp=sharing', category: 'programacion', description: 'Guía pensada para personas que inician en el mundo digital, cubriendo los conocimientos esenciales para comenzar.' },
                { name: 'Fundamentos de Windows 10 (Informática)', icon: 'fas fa-desktop', url: 'https://drive.google.com/drive/folders/1LZtMvcviVWH0PO9QoD3J-NGsXUA9kEJk?usp=sharing', category: 'programacion', description: 'Aprende a utilizar y configurar correctamente el sistema operativo Windows Diez, desde lo básico hasta funciones intermedias.' },
                { name: 'Aprende desde cero absoluto hasta trainee', icon: 'fas fa-graduation-cap', url: 'https://drive.google.com/drive/folders/1D3UkNKEp-aMTzKSQIZa5dVAr4_G0kAd8?usp=sharing', category: 'programacion', description: 'Recorrido completo desde los conceptos más elementales de la programación hasta alcanzar habilidades básicas para postular a un puesto como aprendiz en tecnología.' },
                { name: 'Curso de accesibilidad web', icon: 'fas fa-universal-access', url: 'https://drive.google.com/drive/folders/1wiYVtCzOnRfKwGGkae44_FCd4c2VP91S?usp=sharing', category: 'programacion', description: 'Aprende a diseñar sitios web accesibles que cumplan con los estándares internacionales y permitan el acceso a todos los usuarios.' },
                { name: 'Diseño responsivo con cajas flexibles (CSS3)', icon: 'fas fa-laptop-code', url: 'https://drive.google.com/drive/folders/13Yj3LJD7bHQJhPQOa0LjQaFhJwjKnQVW?usp=sharing', category: 'programacion', description: 'Aprende a crear sitios web adaptables a diferentes dispositivos utilizando el sistema de diseño flexible de las hojas de estilo en cascada versión tres.' },
                { name: 'PrimeFaces y Spring Boot: Crea tu primera app web con Java', icon: 'fab fa-java', url: 'https://drive.google.com/drive/folders/12zeH6LFYWDcvHP6qmCYI9T5NhGR_Hi7T?usp=sharing', category: 'programacion', description: 'Crea tu primera aplicación web utilizando el lenguaje Java, empleando la biblioteca PrimeFaces para el diseño visual y el marco de desarrollo Spring Boot para la lógica del servidor.' },
                { name: 'Curso de diseño web con Bootstrap', icon: 'fab fa-bootstrap', url: 'https://drive.google.com/drive/folders/1FhnFAELw-84__5BXIMMRVvKvcEsbGU_8?usp=sharing', category: 'programacion', description: 'Aprende a utilizar el marco de trabajo Bootstrap para crear sitios web modernos, responsivos y compatibles con múltiples navegadores de manera eficiente.' },
                { name: 'Crea aplicaciones iOS y Android con Angular', icon: 'fab fa-angular', url: 'https://drive.google.com/drive/folders/18Fb40pfwIh8_r7cTRocKfws8xf_wuxn0?usp=sharing', category: 'programacion', description: 'Aprende a desarrollar aplicaciones móviles multiplataforma para sistemas operativos de Apple y Google usando el marco de desarrollo Angular.' },
                { name: 'Aprende 5 lenguajes de programación desde cero', icon: 'fas fa-code', url: 'https://drive.google.com/drive/folders/1BAwa1F_8d95IUuWtVRMa5ft5LYOvS9y9?usp=sharing', category: 'programacion', description: 'Introducción práctica a cinco lenguajes populares de programación, enseñados desde los conceptos básicos hasta ejercicios funcionales.' },
                { name: 'Comienza a programar en Python desde cero', icon: 'fab fa-python', url: 'https://drive.google.com/drive/folders/1bQw3m6W3JUWh2OAg64bOJjCc_iHpzYtJ?usp=sharing', category: 'programacion', description: 'Curso completo del lenguaje Python, iniciando desde los fundamentos y avanzando a estructuras básicas de control y funciones.' },
                { name: 'Java SE: Taller de programación de cero a trainee', icon: 'fab fa-java', url: 'https://drive.google.com/drive/folders/1by9dE0Ec9HObwAL0zlW80gevmn1cUo1V?usp=sharing', category: 'programacion', description: 'Aprende a programar con el lenguaje Java en su edición estándar, desde los fundamentos hasta alcanzar un nivel principiante.' },
                { name: 'Colección de libros esenciales de programación', icon: 'fas fa-book', url: 'https://drive.google.com/drive/folders/1pz6cdZErEdPmwyC3PM-6DzETcoHHR1V1?usp=sharing', category: 'programacion', description: 'Explora una selección de libros clave para aprender programación, estructuras de datos, algoritmos, desarrollo web y mejores prácticas del código limpio.' },
                { name: 'Proceso CRUD con C# y Oracle Database', icon: 'fas fa-database', url: 'https://drive.google.com/drive/folders/1QiqV0SEIhXu8zQ-ys2DGzCY8jmlU2fEX?usp=sharing', category: 'programacion', description: 'Aprende a crear, leer, actualizar y eliminar datos en una aplicación desarrollada con el lenguaje C Sharp, conectada a una base de datos Oracle.' },
                { name: 'Proceso CRUD con C# y PostgreSQL', icon: 'fas fa-database', url: 'https://drive.google.com/drive/folders/1olV68Opj3o69wqrbNwEQ_5N22vjwTFHH?usp=sharing', category: 'programacion', description: 'Desarrolla aplicaciones con operaciones básicas de gestión de datos utilizando el lenguaje C Sharp junto con la base de datos PostgreSQL.' },
                { name: 'Proceso CRUD con C# y Visual FoxPro', icon: 'fas fa-database', url: 'https://drive.google.com/drive/folders/1uOE14N5NJo_6KL7B1fgd7t5ASLJ8RdSQ?usp=sharing', category: 'programacion', description: 'Integra el lenguaje C Sharp con el sistema Visual FoxPro para realizar operaciones básicas de gestión de información en aplicaciones de escritorio.' },
                { name: 'Visual FoxPro - Clases visuales (nueva versión)', icon: 'fas fa-desktop', url: 'https://drive.google.com/drive/folders/1zBOdRiUZDzpuvCZU6CJA4Gy8xCmQyCng?usp=sharing', category: 'programacion', description: 'Aprende a desarrollar interfaces gráficas y sistemas de base de datos con la nueva versión del entorno de desarrollo Visual FoxPro.' },
                
                { name: 'Curso completo de SolidWorks', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1X_-ItOOJsz-Y3ophdyr8Iry7NefREZGX?usp=sharing', category: 'ingenieria', description: 'Diseño mecánico y modelado 3D con SolidWorks.' },
                { name: 'Curso completo de AutoCAD', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/18g6GjVpwoBlb4OsguWRz67iqCjH4ukxE?usp=sharing', category: 'ingenieria', description: 'Dibujo técnico y diseño asistido por computadora.' },
                { name: 'Especialización en AutoCAD Electrical', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1ZXDQiTfrDd-9WMcBCcBQHjhfZa3CwruU?usp=sharing', category: 'ingenieria', description: 'Diseño de diagramas eléctricos con AutoCAD Electrical.' },
                { name: 'Minitab para control de calidad', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1AmANOYFge92RE-9ME6_i6vqIxnMuoscg?usp=sharing', category: 'ingenieria', description: 'Herramienta estadística para control de calidad y mejora de procesos.' },
                { name: 'Control de motores con variadores de frecuencia', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1livPk80k0AKG7rjGqJnKhqEmm5-LbXJG?usp=sharing', category: 'ingenieria', description: 'Control de motores eléctricos mediante variadores de frecuencia.' },
                { name: 'Fundamentos de mecánica industrial', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1e6-1V1HNI8piBYogBGnliwpirwu4Aksi?usp=sharing', category: 'ingenieria', description: 'Aplicaciones prácticas de mecánica industrial.' },
                { name: 'Programación de PLCs industriales', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1ElAGOumeCxcJLt5jYawriQMC5AfKDICq?usp=sharing', category: 'ingenieria', description: 'Programación de controladores lógicos programables para automatización.' },
                { name: 'Programación CNC avanzada', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/16LcdRMoqxxt5DSpu8Ra8XPhGMAv5OfDL?usp=sharing', category: 'ingenieria', description: 'Programación de máquinas de control numérico computarizado.' },
                { name: 'Biblioteca de ingeniería', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/10PnRHTQF9xLMrk7LTpDolJPHsym2l8z-?usp=sharing', category: 'ingenieria', description: 'Colección de libros especializados en diversas ramas de la ingeniería.' },
                { name: 'Core Tools para gestión de calidad', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1JgrDnBuUd5Qa58GluUPDw1B88R8zA17l?usp=sharing', category: 'ingenieria', description: 'Herramientas fundamentales para la gestión de calidad en la industria.' },
                { name: 'Técnicas de balanceo de líneas de producción', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1SLxVgQIhdTFuVAMfUd8HZ65cek9233B6?usp=sharing', category: 'ingenieria', description: 'Optimización del flujo de producción en líneas de manufactura.' },
                { name: 'Introducción a MRP (Planificación de Requisitos de Materiales)', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1Ffg78NB2Z-A3nh-uphysB_fxnPWU2Gqg?usp=sharing', category: 'ingenieria', description: 'Fundamentos de MRP para gestión de materiales.' },
                { name: 'Learn Manufacturing', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1kT1-V0s8UtgbQgTqfKITUIHTAsyjCczU?usp=sharing', category: 'ingenieria', description: 'Recursos para aprender sobre manufactura.' },
                { name: 'Industria 4.0', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1fDhXC5EH-5X9sz9m5QdIhHny-9kVWZ4g?usp=sharing', category: 'ingenieria', description: 'Materiales sobre la cuarta revolución industrial.' },
                { name: 'Programación y control de PLC', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1dz51jwINMHkxPo-IMsHEiTx4OEIxBD1H?usp=sharing', category: 'ingenieria', description: 'Recursos avanzados sobre controladores lógicos programables.' },
                
{ name: 'Introducción a Arduino y la Electrónica', icon: 'fas fa-robot', url: 'https://drive.google.com/drive/folders/1CRDQ9wzqHDdAT9X5yJy-_7IFGn_ZEB2M?usp=sharing', category: 'robotica', description: 'Aprende los conceptos básicos para comenzar en el mundo de Arduino y la electrónica digital.' },
{ name: 'Fundamentos de Electrónica para Principiantes', icon: 'fas fa-bolt', url: 'https://drive.google.com/drive/folders/1h8Ra5zpZn2p7HNJ5NCrRNMzvHDKBeZWP?usp=sharing', category: 'robotica', description: 'Explora cómo funcionan los componentes eléctricos y cómo se aplican en circuitos reales.' },
{ name: 'Fundamentos de Programación para Arduino', icon: 'fas fa-code', url: 'https://drive.google.com/drive/folders/1Tp0wsMFtV4uHF5qMgaihfasnMpTJlKXf?usp=sharing', category: 'robotica', description: 'Aprende a programar placas Arduino usando estructuras básicas de control y lógica.' },
{ name: 'Proyecto: Simulación de un sistema Start and Stop para automóviles', icon: 'fas fa-car', url: 'https://drive.google.com/drive/folders/1b4Uj7v3t73kAb_KA7fbwvdgJrdUMfilJ?usp=sharing', category: 'robotica', description: 'Crea un sistema que enciende y apaga automáticamente el motor de un vehículo simulado.' },
{ name: 'Proyecto: Luces Intermitentes con Arduino', icon: 'fas fa-lightbulb', url: 'https://drive.google.com/drive/folders/1B6gNnBKt3qWg08CEoZspbmb6llhir-jL?usp=sharing', category: 'robotica', description: 'Diseña un circuito que imita el parpadeo de luces direccionales en automóviles.' },
{ name: 'Proyecto: Control de LED con Potenciómetro', icon: 'fas fa-sliders-h', url: 'https://drive.google.com/drive/folders/1nZ731qJMbUfJF6e9zSaToLrjIYxeOrlL?usp=sharing', category: 'robotica', description: 'Manipula la intensidad de un LED ajustando manualmente un potenciómetro.' },
{ name: 'Proyecto: Probador de Pilas con Arduino', icon: 'fas fa-battery-half', url: 'https://drive.google.com/drive/folders/18h_nXytWCQGyWuCGx6_cMWVEXnxZOWMm?usp=sharing', category: 'robotica', description: 'Construye un dispositivo que permite medir el nivel de carga de baterías comunes.' },
{ name: 'Uso de Librerías en Arduino', icon: 'fas fa-book', url: 'https://drive.google.com/drive/folders/1V3OhK90Eo-Mbp3evOo_SPFmapsjeeCB1?usp=sharing', category: 'robotica', description: 'Aprende a utilizar e integrar librerías para facilitar el desarrollo de proyectos.' },
{ name: 'Uso de Pantallas LCD (Cristal Líquido) con Arduino', icon: 'fas fa-tv', url: 'https://drive.google.com/drive/folders/1SJTGujiEd5tggetki35H23nYmmLVGWfH?usp=sharing', category: 'robotica', description: 'Descubre cómo mostrar datos en tiempo real en pantallas LCD usando Arduino.' },
{ name: 'Control de Motores con Arduino', icon: 'fas fa-cogs', url: 'https://drive.google.com/drive/folders/1IBYGyJwheGwd_J1UsD24u3SMFR5AsKts?usp=sharing', category: 'robotica', description: 'Aprende a manejar motores DC y servos en proyectos automatizados.' },
{ name: 'Implementación de Sensores en Proyectos con Arduino', icon: 'fas fa-microchip', url: 'https://drive.google.com/drive/folders/1Ja6rHw6elF4tCdT6UIdv1yUQkKgyhMJ8?usp=sharing', category: 'robotica', description: 'Integra sensores para recopilar información del entorno y usarla en tus proyectos.' },
{ name: 'Proyecto: Medición de Temperatura Corporal con LED RGB', icon: 'fas fa-thermometer-half', url: 'https://drive.google.com/drive/folders/1KeVwFl_tMEzsZOenRRsKV16AHwxVUy_N?usp=sharing', category: 'robotica', description: 'Crea un termómetro visual que cambia de color según la temperatura detectada.' },

{ name: 'Introducción a Arduino Interactivo', icon: 'fas fa-robot', url: 'https://drive.google.com/drive/folders/1kT_delqIFJ1agI3-l1ZiRDLvd-Rmaxk7?usp=sharing', category: 'robotica', description: 'Conoce los fundamentos de Arduino para comenzar a crear proyectos interactivos que reaccionen al entorno.' },
{ name: 'Interacción Básica con Botones', icon: 'fas fa-hand-pointer', url: 'https://drive.google.com/drive/folders/1rLl5U3MY3CAvBKPDBtQrCiaWbtlhExS8?usp=sharing', category: 'robotica', description: 'Aprende a usar botones como entrada física para controlar funciones y procesos dentro de tus proyectos Arduino.' },
{ name: 'Control de Movimiento en Proyectos Arduino', icon: 'fas fa-arrows-alt', url: 'https://drive.google.com/drive/folders/1nOvIJ-kRMVyiC54Hc0fFd7K11XrPWW4C?usp=sharing', category: 'robotica', description: 'Integra motores y mecanismos para generar movimiento en tus proyectos, desde giros hasta desplazamientos.' },
{ name: 'Incorporación de Audio y Sonidos', icon: 'fas fa-volume-up', url: 'https://drive.google.com/drive/folders/18-RrpzrvqTLA3BlGL7zyM6t5u6CofCak?usp=sharing', category: 'robotica', description: 'Agrega comunicación auditiva a tus creaciones utilizando zumbadores, parlantes o efectos de sonido.' },
{ name: 'Visualización con Pantallas para Arduino', icon: 'fas fa-desktop', url: 'https://drive.google.com/drive/folders/17wI-bPgKh67mZNTkNJMi2vGEIYjQIJxk?usp=sharing', category: 'robotica', description: 'Muestra datos, estados y mensajes personalizados usando pantallas gráficas o LCD en tus proyectos.' }

            ];

            function renderMaterials(filter = 'all') {
                const container = document.getElementById('materialItemsContainer');
                container.innerHTML = '';

                const filteredMaterials = filter === 'all' 
                    ? materialsData 
                    : materialsData.filter(material => material.category === filter);

                filteredMaterials.forEach(material => {
                    const col = document.createElement('div');
                    col.className = 'col-md-6 col-lg-4 material-item';
                    col.setAttribute('data-category', material.category);

                    const card = document.createElement('div');
                    card.className = 'card material-card h-100';

                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body';

                    const badge = document.createElement('span');
                    badge.className = `badge material-badge badge-${material.category}`;
                    badge.textContent = material.category === 'programacion' ? 'Programación' : 
                                      material.category === 'ingenieria' ? 'Ingeniería' : 
                                      'Robótica';
                    cardBody.appendChild(badge);

                    const title = document.createElement('h5');
                    title.className = 'mt-3';
                    title.textContent = material.name;
                    cardBody.appendChild(title);

                    const description = document.createElement('p');
                    description.className = 'small text-muted';
                    description.textContent = material.description;
                    cardBody.appendChild(description);

                    const cardFooter = document.createElement('div');
                    cardFooter.className = 'card-footer bg-white';

                    const link = document.createElement('a');
                    link.href = material.url;
                    link.target = '_blank';
                    link.className = 'btn btn-primary btn-sm';
                    link.textContent = 'Abrir enlace';
                    cardFooter.appendChild(link);

                    card.appendChild(cardBody);
                    card.appendChild(cardFooter);
                    col.appendChild(card);
                    container.appendChild(col);
                });
            }

            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    button.classList.add('active');
                    
                    const filterValue = button.getAttribute('data-filter');
                    renderMaterials(filterValue);
                });
            });
            const searchInput = document.getElementById('materialSearchInput');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const materialItems = document.querySelectorAll('.material-item');
                
                materialItems.forEach(item => {
                    const title = item.querySelector('h5').textContent.toLowerCase();
                    const description = item.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
            renderMaterials();
        });
