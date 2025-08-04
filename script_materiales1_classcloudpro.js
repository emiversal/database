    document.addEventListener('DOMContentLoaded', function() {
        const coursesData = [
    {
        "id": 42,
        "title": "Diseno Grafico",
        "description": "Aprende los fundamentos del diseno grafico y herramientas profesionales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/42.png",
        "link": "https://drive.google.com/drive/folders/1WzVLVcfKO199H18YuLtc0gSOAGWtw7HA?direction=a",
        "category": "diseno"
    },
    {
        "id": 43,
        "title": "Office",
        "description": "Domina las herramientas de Microsoft Office para productividad.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/43.png",
        "link": "https://drive.google.com/drive/folders/1hjGMrTWu746SYZ4Yd5Olb4GyGju_vzS1",
        "category": "programacion"
    },
    {
        "id": 44,
        "title": "Ingles",
        "description": "Curso completo de ingles desde nivel basico hasta avanzado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/44.png",
        "link": "https://drive.google.com/drive/folders/1VH1Abk6-371kKpCKwOlhE8kRA-bYwwni",
        "category": "idiomas"
    },
    {
        "id": 45,
        "title": "Curso Excel Completo",
        "description": "Aprende Excel desde cero hasta nivel avanzado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/45.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FrUdUwBCQ%23EwSM4heDhNFig4L-XWz_QQ&sa=D&sntz=1&usg=AOvVaw0AAPL-IzXQXZgzoK5obTSA",
        "category": "programacion"
    },
    {
        "id": 46,
        "title": "Aula Virtual",
        "description": "Recursos para crear y gestionar aulas virtuales educativas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/46.png",
        "link": "https://drive.google.com/drive/folders/11Jtp6Tkcz5p1nHSE2WE4yzPTQPcXbsrl",
        "category": "programacion"
    },
    {
        "id": 47,
        "title": "Hacking Etico",
        "description": "Aprende tecnicas de hacking etico y seguridad informatica.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/47.png",
        "link": "https://drive.google.com/drive/folders/1ryvm6yUA7xZa-aWKH0f_70YKJ1B33TpW",
        "category": "programacion"
    },
    {
        "id": 48,
        "title": "Marketing Digital",
        "description": "Estrategias de marketing digital para redes sociales y web.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/48.png",
        "link": "https://drive.google.com/drive/folders/1Bs65PGYQJu33CW2MCdVdmAnXe4kI23k4",
        "category": "negocios"
    },
    {
        "id": 49,
        "title": "Gastronomia",
        "description": "Curso completo de cocina y tecnicas gastronomicas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/49.png",
        "link": "https://drive.google.com/drive/folders/1GHdANHZFXrtDYtIX1SDzfOuvFVzCdSje",
        "category": "desarrollo-personal"
    },
    {
        "id": 50,
        "title": "Super Memoria",
        "description": "Tecnicas para mejorar la memoria y el aprendizaje acelerado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/50.png",
        "link": "https://drive.google.com/drive/folders/1GwojI4d_O6pcZqIVzcIZdDlv1URone1j",
        "category": "desarrollo-personal"
    },
    {
        "id": 51,
        "title": "Produccion Musical",
        "description": "Aprende a producir musica con herramientas digitales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/51.png",
        "link": "https://drive.google.com/drive/folders/1jMGwA5st-Z1X498a5gtR__AQoVNJpnHa",
        "category": "musica"
    },
    {
        "id": 52,
        "title": "Ingenieria",
        "description": "Recursos y cursos varios sobre ingenieria.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/52.png",
        "link": "https://drive.google.com/drive/folders/1jB7_1zjEt_2_h1qpB44OH9YfozS4axMB",
        "category": "ingenieria"
    },
    {
        "id": 53,
        "title": "Cursos De Hacking Y Programacion",
        "description": "Coleccion de cursos sobre hacking y programacion.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/53.png",
        "link": "https://drive.google.com/drive/folders/1ALUuI9f3-EH9gBG15gCdWyBxS8qhMb9L",
        "category": "programacion"
    },
    {
        "id": 54,
        "title": "Autocad Desde Cero - Proyectos",
        "description": "Aprende AutoCAD desde cero con proyectos practicos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/54.png",
        "link": "https://drive.google.com/drive/folders/1FusnOPIg9kq77a4VeuAh-mrQx0DTj7dH",
        "category": "diseno"
    },
    {
        "id": 55,
        "title": "Arquitectura",
        "description": "Curso completo sobre fundamentos de arquitectura.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/55.png",
        "link": "https://drive.google.com/drive/folders/1O8Jt_XkdDhdvf4i7ZjPDmz1fRWFvJkYY",
        "category": "diseno"
    },
    {
        "id": 56,
        "title": "Consola Movil",
        "description": "Curso sobre desarrollo de aplicaciones para consolas moviles.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/56.png",
        "link": "https://drive.google.com/drive/folders/1rap1MmWNzvO16nZAmbpoq-c-4VARDRE6",
        "category": "programacion"
    },
    {
        "id": 57,
        "title": "Desarrollo Web",
        "description": "Aprende desarrollo web frontend y backend.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/57.png",
        "link": "https://drive.google.com/drive/folders/1C8SWhakZITTD55FIBufmXZgwtplmxmA8",
        "category": "programacion"
    },
    {
        "id": 58,
        "title": "Psicologia",
        "description": "Curso introductorio a la psicologia.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/58.png",
        "link": "https://drive.google.com/drive/folders/1NKLDY7-BGNBGE26CCzx28Wm6mKQfDyzQ",
        "category": "desarrollo-personal"
    },
    {
        "id": 59,
        "title": "Canva De 0 A Pro",
        "description": "Domina Canva para crear disenos profesionales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/59.png",
        "link": "https://drive.google.com/drive/folders/1RzdEYeK1T7ljrtrNJRvhcuJj4iosu2NS?usp=sharing",
        "category": "diseno"
    },
    {
        "id": 60,
        "title": "Armado De Pc",
        "description": "Aprende a armar y reparar computadoras.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/60.png",
        "link": "https://drive.google.com/drive/folders/1KsmDSpCejs6MU4yimuPLVXLoFCDhcX7C",
        "category": "electronica"
    },
    {
        "id": 61,
        "title": "Guitarra Acustica",
        "description": "Curso completo para aprender a tocar guitarra acustica.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/61.png",
        "link": "https://drive.google.com/drive/folders/1jmrD-e0QZUQ9RSNXnIcucBY32FnDNJzw?fbclid=IwAR3QvL21szDOdeRCpF-MUSigQvqH2pWaNdm2NMXnsrW-k3ZPaSLMCb1El3E",
        "category": "musica"
    },
    {
        "id": 62,
        "title": "Pre Universitario",
        "description": "Preparacion para examenes universitarios.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/62.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2F8Fs1lT6J%233leNMvWbFV8cbSCrPI2w0g&sa=D&sntz=1&usg=AOvVaw1qSRL2XTdZ0y-m1Hl6yznC",
        "category": "desarrollo-personal"
    },
    {
        "id": 63,
        "title": "Fotografia",
        "description": "Curso completo de fotografia digital.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/63.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2Fa9xyCZaR%23A75XK1Jju7s4rKMjWod79g&sa=D&sntz=1&usg=AOvVaw2mNQYhZmSnDxKp1ToH5b-0",
        "category": "diseno"
    },
    {
        "id": 64,
        "title": "Curso De Dibujo Completo",
        "description": "Aprende tecnicas de dibujo desde cero.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/64.png",
        "link": "https://drive.google.com/drive/folders/12hHAYRYangVF5pVrVfrJi3C-R_SYFsfz?fbclid=IwY2xjawJMEThleHRuA2FlbQIxMAABHXPUFtMsc5_pLR7ebSG1vuCCmUY9gB4ZafBKNIosEIJ5emsOdaXs8tuenA_aem_IYrwz9zgUFZUtIFoJJdgmw",
        "category": "diseno"
    },
    {
        "id": 65,
        "title": "Lectura Rapida",
        "description": "Tecnicas para aumentar la velocidad de lectura.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/65.png",
        "link": "https://drive.google.com/drive/folders/16iCYyStyJGQObIwtmU9u9SDkC4eSiAnf?usp=sharing",
        "category": "desarrollo-personal"
    },
    {
        "id": 66,
        "title": "Curso De Argis",
        "description": "Aprende a usar Argis para sistemas de informacion geografica.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/66.png",
        "link": "https://drive.google.com/drive/folders/162_08ElD58zu5Adu3qywakKCjGH_NFnF",
        "category": "diseno"
    },
    {
        "id": 67,
        "title": "Dibujo A Lapiz De Principiante A Experto",
        "description": "Domina el dibujo a lapiz con tecnicas profesionales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/67.png",
        "link": "https://drive.google.com/drive/folders/1kTLO3LGHwFpXy3Ncl4YDkjNp6Geaza49",
        "category": "diseno"
    },
    {
        "id": 68,
        "title": "Dibujo E Ilustracion",
        "description": "Curso completo de dibujo e ilustracion digital.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/68.png",
        "link": "https://drive.google.com/drive/folders/1-TX0yk1Fdji4f44JESTC5HPfMoitgLB2",
        "category": "diseno"
    },
    {
        "id": 69,
        "title": "Como Crear Tu Iman De Prospecto",
        "description": "Tecnicas de marketing y atraccion de clientes.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/69.png",
        "link": "https://drive.google.com/drive/u/0/mobile/folders/1MBLSw9MsnY2UTReMUD3irtshuf-idt0t",
        "category": "negocios"
    },
    {
        "id": 70,
        "title": "Inteligencia Artificial",
        "description": "Introduccion a la inteligencia artificial y machine learning.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/70.png",
        "link": "https://drive.google.com/drive/folders/1DDX0-pdhKtBGTA84trDT1yfZpzfr5Jo8",
        "category": "programacion"
    },
    {
        "id": 71,
        "title": "Curso De Adiestramiento Canino",
        "description": "Aprende tecnicas profesionales para adiestrar perros.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/71.png",
        "link": "https://drive.google.com/drive/u/0/folders/1hRxlN5jilbgphOlNFzgOEN1AVgqLFkNz",
        "category": "desarrollo-personal"
    },
    {
        "id": 72,
        "title": "Programacion En Java",
        "description": "Curso completo de programacion en Java.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/72.png",
        "link": "https://drive.google.com/drive/folders/1IZRxm6pbSnBzVy3A0ZWxNdz4DNJnXeAu",
        "category": "programacion"
    },
    {
        "id": 73,
        "title": "Exploring Jazz - Piano Vol I Y II",
        "description": "Curso de piano jazz para principiantes y avanzados.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/73.png",
        "link": "https://drive.google.com/drive/folders/1k-hOeIh00tgwlHTl7vrkoZHcC83ibE95",
        "category": "musica"
    },
    {
        "id": 74,
        "title": "Cursos De Corte Y Confeccion 1",
        "description": "Aprende tecnicas de costura y confeccion de ropa.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/74.png",
        "link": "https://drive.google.com/drive/folders/1rPkkjhEUEYKekq47YvDz_cuWj0xb7MdS",
        "category": "desarrollo-personal"
    },
    {
        "id": 75,
        "title": "Curso De Barista",
        "description": "Aprende el arte de preparar cafe como un profesional.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/75.png",
        "link": "https://drive.google.com/drive/u/0/folders/1JWAK7dayq59d0LlI69nQD6rmoXQjKRyN",
        "category": "desarrollo-personal"
    },
    {
        "id": 76,
        "title": "Reparacion De Aires Acondicionados",
        "description": "Aprende a reparar y mantener sistemas de aire acondicionado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/76.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fwww.1024tera.com%2Fspanish%2Fsharing%2Flink%3Fsurl%3DTPKi1LY-MLnzDPK3Aa769w&sa=D&sntz=1&usg=AOvVaw1HlJVjMqPmLONER9JQjjm1",
        "category": "electronica"
    },
    {
        "id": 77,
        "title": "Masterclass Oratoria",
        "description": "Mejora tus habilidades de hablar en publico.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/77.png",
        "link": "https://drive.google.com/drive/u/0/folders/1bjD8CQUcVJo-LR5x1qcJyaZlZZJ3i53G",
        "category": "desarrollo-personal"
    },
    {
        "id": 78,
        "title": "Cursos De Hacking Y Programacion 2",
        "description": "Mas cursos avanzados sobre hacking y programacion.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/78.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FS8xxnarD%23bAu0mZkgHfGGVDczwLUVcA&sa=D&sntz=1&usg=AOvVaw34UWR8SybdyYTciJYhuYis",
        "category": "programacion"
    },
    {
        "id": 79,
        "title": "Curso De Hacking De Frecuencias - S4Vitar",
        "description": "Curso especializado en hacking de frecuencias.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/79.png",
        "link": "https://drive.google.com/drive/u/0/folders/1j8xrwA-PRcRxmJum_NOrNtNbTEJIarVq",
        "category": "programacion"
    },
    {
        "id": 80,
        "title": "Training Hacking Offensive",
        "description": "Entrenamiento en hacking ofensivo y seguridad.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/80.png",
        "link": "https://drive.google.com/drive/folders/1nH7Ahtob4D4gh_waDO_mlPqNLNinbGHS",
        "category": "programacion"
    },
    {
        "id": 81,
        "title": "Maestro De La Seduccion",
        "description": "Tecnicas de seduccion y relaciones interpersonales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/81.png",
        "link": "https://drive.google.com/drive/folders/1YVERVJB8RpNy_byssT3CK1u2U_uW91vN",
        "category": "desarrollo-personal"
    },
    {
        "id": 82,
        "title": "Lenguaje De Programacion",
        "description": "Curso sobre diversos lenguajes de programacion.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/82.png",
        "link": "https://drive.google.com/drive/folders/1uIfEmx1nbZxE0NXFjCRK86doWl2GLMzW?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 83,
        "title": "Curso De Computacion",
        "description": "Fundamentos de computacion para principiantes.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/83.png",
        "link": "https://sites.google.com/maxzimedia.net/maxzimedia/curso-computacion-basica",
        "category": "programacion"
    },
    {
        "id": 84,
        "title": "Estetica Canina",
        "description": "Aprende tecnicas de peluqueria y estetica para perros.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/84.png",
        "link": "https://drive.google.com/drive/folders/1zHniIJ5ymOgSuDCiLe-e3vyAKB7M4-Iy",
        "category": "desarrollo-personal"
    },
    {
        "id": 85,
        "title": "Escuela Masterchef",
        "description": "Curso de cocina al estilo Masterchef.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/85.png",
        "link": "https://drive.google.com/drive/u/0/folders/1ggu1q5ToX1IsyKo93y0cp25cFg6S4KSF",
        "category": "desarrollo-personal"
    },
    {
        "id": 86,
        "title": "Como Crear Cursos (John Dani)",
        "description": "Aprende a crear y vender cursos online.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/86.png",
        "link": "https://drive.google.com/drive/u/0/folders/18TsI_hy7tfrO_1EL-4nOpXmiYYmAH6sM",
        "category": "negocios"
    },
    {
        "id": 87,
        "title": "Daygame Mastery (Seduccion)",
        "description": "Tecnicas avanzadas de seduccion durante el dia.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/87.png",
        "link": "https://drive.google.com/drive/folders/1JYaCFtF2aQqOlZKTRB6nmjXe3ZQyQjFS",
        "category": "desarrollo-personal"
    },
    {
        "id": 88,
        "title": "Reparacion De Impresoras",
        "description": "Aprende a reparar impresoras de diferentes marcas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/88.png",
        "link": "https://drive.google.com/drive/u/0/folders/1BCf4FzjqGuIGvr7vioETyXzVWH6_ejfO?fbclid=IwAR3Kx3GuQShgm0aM600wzwOnBzwzj9pzHL0FFQW7yfY0362HIu7IwUKjWjk",
        "category": "electronica"
    },
    {
        "id": 89,
        "title": "Curso De Programacion",
        "description": "Curso general de programacion para principiantes.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/89.png",
        "link": "https://drive.google.com/drive/folders/1o_njE2B908GSrGNvrQ_I89qnadm_RkIc",
        "category": "programacion"
    },
    {
        "id": 90,
        "title": "Curso De Administracion De Restaurantes",
        "description": "Aprende a gestionar y administrar un restaurante.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/90.png",
        "link": "https://drive.google.com/drive/mobile/folders/1Unv5IO868b9_bmYzDema4pTcc9aOgtk8?usp=share_link",
        "category": "negocios"
    },
    {
        "id": 91,
        "title": "Hablar Para Vender Alvaro Mendoza",
        "description": "Tecnicas de venta y persuasion verbal.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/91.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FUnZXFazT%23Zwnz256vmIzPR0KHYFohfQ&sa=D&sntz=1&usg=AOvVaw3cxbeNCWk8b29iNVIszaXG",
        "category": "negocios"
    },
    {
        "id": 92,
        "title": "Master Ventas Luis Eduardo Varon",
        "description": "Curso avanzado de tecnicas de ventas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/92.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiGpSTDBL%23u62EYZXb7KUy9w3HX1qMaw%2Ffolder%2F3DY0nDDD&sa=D&sntz=1&usg=AOvVaw2CHNk19MjnPfPjFJBGolJn",
        "category": "negocios"
    },
    {
        "id": 93,
        "title": "Mecanica Automotriz Para Principiantes",
        "description": "Aprende los fundamentos de mecanica automotriz.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/93.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FvgAjmKyI%23KHuWY_5tcwEK02xM28Dz4A%2Ffolder%2F21pXQAIJ&sa=D&sntz=1&usg=AOvVaw0uxA3fcnoB_vFHpeqCeO8j",
        "category": "ingenieria"
    },
    {
        "id": 94,
        "title": "Coleccion Robert Kiyosaki",
        "description": "Libros y cursos sobre finanzas personales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/94.png",
        "link": "https://drive.google.com/drive/u/0/folders/1Zi_AFE1vrXZ8NUe71pQzENevBaWVo4p3",
        "category": "negocios"
    },
    {
        "id": 95,
        "title": "Como Entender Contabilidad Sin Ser Contador",
        "description": "Fundamentos de contabilidad para no especialistas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/95.png",
        "link": "https://drive.google.com/drive/folders/1c6w4FcG00AL1m9buGFzQjJW9wJqIoYRi",
        "category": "negocios"
    },
    {
        "id": 96,
        "title": "Curso De Ingles Vaughan Basico",
        "description": "Curso de ingles nivel basico con metodo Vaughan.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/96.png",
        "link": "https://drive.google.com/drive/folders/1EnWJZ3lRPVHOzV1sl0meeIp5gJxuCFzn?usp=sharing",
        "category": "idiomas"
    },
    {
        "id": 97,
        "title": "Curso De Ingles Vaughan Intermedio",
        "description": "Curso de ingles nivel intermedio con metodo Vaughan.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/97.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2Frx9CRKxZ%23BfByY0iorh5TMXCeChWvdA&sa=D&sntz=1&usg=AOvVaw0BxTjDdRTbkI-SCPhk-b1-",
        "category": "idiomas"
    },
    {
        "id": 98,
        "title": "Curso De Ingles Vaughan Avanzado",
        "description": "Curso de ingles nivel avanzado con metodo Vaughan.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/98.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FQY1CCJiL%23bH_cxPBDfL9jWbCpe9ms0Q&sa=D&sntz=1&usg=AOvVaw3XhTdy9q0fFj9YGCnnepJb",
        "category": "idiomas"
    },
    {
        "id": 99,
        "title": "Curso Manejo De La Frustracion",
        "description": "Tecnicas para manejar la frustracion y el estres.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/99.png",
        "link": "https://drive.google.com/file/d/1F7gY5Ur6-BJcr8yROIXBIxOcqvDicII2/view?usp=sharing",
        "category": "desarrollo-personal"
    },
    {
        "id": 100,
        "title": "Mi Primera Pagina Web",
        "description": "Aprende a crear tu primera pagina web desde cero.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/100.png",
        "link": "https://drive.google.com/drive/folders/16ux1FpQxAsvhf4Hkx_N8g_6lyijLCIlC?usp=sharing",
        "category": "programacion"
    },
    {
        "id": 101,
        "title": "Reparacion Y Mantenimiento De Herramientas Electricas",
        "description": "Aprende a reparar herramientas electricas comunes.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/101.png",
        "link": "https://drive.google.com/drive/folders/1y22mDMvDzitnZWUHvKNRAbxknoYymkmn",
        "category": "electronica"
    },
    {
        "id": 102,
        "title": "Especialista En Publicidad Digital",
        "description": "Curso avanzado de publicidad en redes sociales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/102.png",
        "link": "https://drive.google.com/drive/u/0/folders/1WEl5DbT1MBsBVIJBWQWXoQKU0EPBjr6P",
        "category": "negocios"
    },
    {
        "id": 103,
        "title": "Curso De Jardineria",
        "description": "Aprende tecnicas de jardineria y paisajismo.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/103.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2Fot4BFZJZ%23lMQV-A5ud_TpZd-7uEaExw&sa=D&sntz=1&usg=AOvVaw1XSZ9oGQzPObZnpkiX1Yht",
        "category": "desarrollo-personal"
    },
    {
        "id": 104,
        "title": "Curso De Adobe Suit",
        "description": "Domina las herramientas de Adobe para diseno grafico.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/104.png",
        "link": "https://drive.google.com/drive/u/0/folders/1h6GyxArDv2y_3iTshgJYikrStjDOuG-T",
        "category": "diseno"
    },
    {
        "id": 105,
        "title": "Carpinteria En Aluminio",
        "description": "Tecnicas de carpinteria especializada en aluminio.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/105.png",
        "link": "https://drive.google.com/drive/folders/1lizfqRwlx0vVfez8M2P5i_3nPsKEEwQC",
        "category": "manufactura"
    },
    {
        "id": 106,
        "title": "Curso Completo De Instalaciones Electricas Residenciales",
        "description": "Aprende a instalar sistemas electricos en viviendas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/106.png",
        "link": "https://drive.google.com/drive/u/0/folders/1-g_sTzcK5nxzP2UIgdPtRUuINAsCi8cw",
        "category": "electronica"
    },
    {
        "id": 107,
        "title": "Tarjetas De Credito Con Inteligencia",
        "description": "Aprende a manejar tarjetas de credito de forma inteligente.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/107.png",
        "link": "https://drive.google.com/drive/folders/1IXrDPBfo4JpMq_1Geg6qYlm5Mj2u6QWc",
        "category": "negocios"
    },
    {
        "id": 108,
        "title": "Master Class Habla Con Poder",
        "description": "Tecnicas para hablar en publico con confianza.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/108.png",
        "link": "https://drive.google.com/drive/folders/197zdDuZaM4ZhaJWAEpeJTUO4ZPs9_f40",
        "category": "desarrollo-personal"
    },
    {
        "id": 109,
        "title": "Curso De Confeccion (Crehana)",
        "description": "Tecnicas de costura y confeccion de ropa.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/109.png",
        "link": "https://drive.google.com/drive/folders/1RTJGUu9a7tfq4ENzQV5AJlw62SAxb9iy",
        "category": "desarrollo-personal"
    },
    {
        "id": 110,
        "title": "Curso De Artesania",
        "description": "Aprende diversas tecnicas artesanales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/110.png",
        "link": "https://drive.google.com/drive/folders/1jEDcLfV_O7tMJ_3t6pSPU5Ne-QfhIaxc",
        "category": "desarrollo-personal"
    },
    {
        "id": 111,
        "title": "Como Tener Mas Seguidores En Tiktok",
        "description": "Estrategias para crecer en la plataforma TikTok.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/111.png",
        "link": "https://drive.google.com/drive/u/0/folders/1gV7Zx9NSbyimrfvB70q55aUqKsNfpZhf",
        "category": "negocios"
    },
    {
        "id": 112,
        "title": "Presentaciones De Alto Impacto En Power Point [Udemy]",
        "description": "Crea presentaciones profesionales en PowerPoint.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/112.png",
        "link": "https://drive.google.com/drive/folders/19Ys77gAE8arazK90jRcWxnB_HUjZm7Ih",
        "category": "programacion"
    },
    {
        "id": 113,
        "title": "Bienes Raices",
        "description": "Curso sobre inversion en bienes raices.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/113.png",
        "link": "https://drive.google.com/drive/folders/1nfMA72hL1PHFTWVkzjlSBAmfPyBg89dx",
        "category": "negocios"
    },
    {
        "id": 114,
        "title": "Curso Habla Koreano",
        "description": "Aprende coreano desde nivel basico.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/114.png",
        "link": "https://drive.google.com/drive/folders/17JlL2Xo-LMvodyiJFMEQXQCbcmVhguNc",
        "category": "idiomas"
    },
    {
        "id": 115,
        "title": "En Mantenimiento",
        "description": "Curso actualmente en mantenimiento.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/115.png",
        "link": "SIN ENLACE",
        "category": "programacion"
    },
    {
        "id": 116,
        "title": "Tiktok Ads",
        "description": "Curso sobre publicidad en TikTok.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/116.png",
        "link": "https://drive.google.com/drive/folders/1oPbJu2trhzP98Bdy50-1A-cfAAZCREUt?usp=sharing",
        "category": "negocios"
    },
    {
        "id": 117,
        "title": "Cursos Musicales",
        "description": "Coleccion de cursos sobre teoria y practica musical.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/117.png",
        "link": "https://drive.google.com/drive/u/0/folders/1dY_bUwQIgXbDD8I3w2JIP_udmHbdGdGR",
        "category": "musica"
    },
    {
        "id": 118,
        "title": "Curso Revit 2025",
        "description": "Aprende a usar Revit para modelado BIM.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/118.png",
        "link": "https://sites.google.com/maxzimedia.net/maxzimedia/curso-revit-2025",
        "category": "diseno"
    },
    {
        "id": 119,
        "title": "Master En Publicidad",
        "description": "Curso avanzado de estrategias publicitarias.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/119.png",
        "link": "https://sites.google.com/maxzimedia.net/maxzimedia/master-en-publicidad",
        "category": "negocios"
    },
    {
        "id": 120,
        "title": "Hacking Android",
        "description": "Tecnicas de hacking y seguridad para dispositivos Android.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/120.png",
        "link": "https://drive.google.com/drive/folders/1c-4Uffy3hK8w8bbyhaJ9MlP8eeDWL144",
        "category": "programacion"
    },
    {
        "id": 121,
        "title": "Hipnosis Rapida Para El Desarrollo Personal",
        "description": "Tecnicas de hipnosis para crecimiento personal.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/121.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FzUkREIYQ%23eHO_IweiBkajpNOpoRZIhA%2Ffolder%2FiEFUBDAZ&sa=D&sntz=1&usg=AOvVaw0utM9PXVBcScXaB9lFCw-K",
        "category": "desarrollo-personal"
    },
    {
        "id": 122,
        "title": "Curso Melamina Y Planos 1",
        "description": "Tecnicas de trabajo con melamina y diseno de planos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/122.png",
        "link": "https://drive.google.com/drive/folders/1xWhI6l4U8YPxu705LINOVDnDdw8K8Vzh?direction=a",
        "category": "diseno"
    },
    {
        "id": 123,
        "title": "Curso Melamina Y Planos 2",
        "description": "Segunda parte del curso de melamina y planos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/123.png",
        "link": "https://drive.google.com/drive/folders/1FvcQEThIA1ExV40gRvMHiXtP-8KEIa5c",
        "category": "diseno"
    },
    {
        "id": 124,
        "title": "47 Lecciones De Ingles",
        "description": "Curso completo de ingles con 47 lecciones.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/124.png",
        "link": "https://drive.google.com/drive/folders/1EFtviBTWEok_tN-GGMC027MKJCOUYjw0",
        "category": "idiomas"
    },
    {
        "id": 125,
        "title": "Curso Melamina Y Planos 3",
        "description": "Tercera parte del curso de melamina y planos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/125.png",
        "link": "https://drive.google.com/drive/mobile/folders/1clcHLS2XY2U-7yxjH1ODGY3nd_F-EjlO?usp=sharing&fbclid=IwAR1HqJdvjun7593kQDBAw4MfCZ06hReTxpGP9eL-Qa6PTL8Wp44vbkyJPDM",
        "category": "diseno"
    },
    {
        "id": 126,
        "title": "Deep Web Y Dark Web Curso Completo",
        "description": "Introduccion a la deep web y dark web con medidas de seguridad.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/126.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FAlVFyIST%23lIrIDErdjmQ3D_zKYkvE5g&sa=D&sntz=1&usg=AOvVaw0Ex3wQDbqsakT6Czn5W0Aj",
        "category": "programacion"
    },
    {
        "id": 127,
        "title": "Mecanica De Motos",
        "description": "Aprende a reparar y mantener motocicletas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/127.png",
        "link": "https://drive.google.com/drive/folders/1XMkt74zXJZwy4WFMiYUOXQaGv8qUtbl7",
        "category": "ingenieria"
    },
    {
        "id": 128,
        "title": "Pintura De Paises Urbanos En Acuarela",
        "description": "Tecnicas de pintura en acuarela de paisajes urbanos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/128.png",
        "link": "https://drive.google.com/drive/folders/1r-p9LTlsrkqlFd5t9AxD3GR8kUFkYZPq",
        "category": "diseno"
    },
    {
        "id": 129,
        "title": "Curso Chat GPT Sessions",
        "description": "Aprende a usar ChatGPT para diversos propositos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/129.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FbNVUAS5T%23maoWnzK_HTiTUOluw8Auyg&sa=D&sntz=1&usg=AOvVaw1IdpqcGppHQTGoOO1FdkaM",
        "category": "programacion"
    },
    {
        "id": 130,
        "title": "Curso De Manejo De Herramientas Electricas",
        "description": "Aprende a usar herramientas electricas de forma segura.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/130.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fwww.terabox.best%2Fspanish%2Fsharing%2Flink%3Fsurl%3DkoJriHlx2eYW10a9_bUkTQ&sa=D&sntz=1&usg=AOvVaw1NcBEt9VolUBeg5AQjMcwC",
        "category": "electronica"
    },
    {
        "id": 131,
        "title": "Curso De Nutricion Para Ganar Masa Muscular",
        "description": "Planificacion nutricional para aumento de masa muscular.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/131.png",
        "link": "https://drive.google.com/drive/folders/1-xARy8NTqit486qbqorfFcNClzyAe5Oz",
        "category": "desarrollo-personal"
    },
    {
        "id": 132,
        "title": "Curso De Matematica Financiera",
        "description": "Fundamentos de matematicas aplicadas a las finanzas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/132.png",
        "link": "https://drive.google.com/drive/folders/1x8Z0V-v8j-GvOVph-59I5Zuq2zbAnUQ1?fbclid=IwZXh0bgNhZW0CMTAAAR1tdwh0zKdYZImVFGFI7jOuUvB0pGK1f4ZHiivx84vLM3giouJqiIyb1OA_aem_AZN_xoDPSC0mfOtgtC63bBoMEheiIBwvDULc9aMTGKvzxuIRKOCe617C08MI1oTxUiYvxtk-s1ViTONJLr3YA4S7",
        "category": "negocios"
    },
    {
        "id": 133,
        "title": "Curso De Inmobiliario Facil",
        "description": "Aprende los fundamentos del negocio inmobiliario de forma sencilla.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/133.png",
        "link": "https://drive.google.com/drive/folders/1WxpSorsSt3OroQoa0Rm1pHANaqsVvWKi?fbclid=IwZXh0bgNhZW0CMTAAAR1Ifj9eBcIahrjY-jJVdSfockT0YioWPVhqb5lFnUXgInDwIFSGoIs9zOY_aem_AZM9csr0G9VwPEb5umnwpaf3hGJ70F0WKHWljw4ce6vH4CI1d3npqpbWN3bvX8DEeWultNmHUd4L_ZRswnQNM-2U",
        "category": "negocios"
    },
    {
        "id": 134,
        "title": "Curso De Finanzas En 20S",
        "description": "Domina las finanzas personales en solo 20 sesiones.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/134.png",
        "link": "https://drive.google.com/drive/folders/14peZfkZVTRdVcZPulAQlTYguuYipKzpX?fbclid=IwZXh0bgNhZW0CMTAAAR059WIiqOV8yCbukY1AZ5Ri60s6nFXBoXRcvrp6Rt6ovyQ4AD8fWNIDeCQ_aem_AZOH0Z0rhEwlF3YCfmZmQWc5_d-J6reLWj2Lp6WW9U71tzIwZ9t4vZ_Uk-aJAaH2ZhOQUiyJGHi7tlVOcTbx-MAR",
        "category": "negocios"
    },
    {
        "id": 135,
        "title": "Curso De Reparacion De Play 3, Play4, Xbox",
        "description": "Aprende a reparar consolas de videojuegos populares.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/135.png",
        "link": "https://drive.google.com/drive/folders/13K5nbde79mrB7P6wGa4cXnup33Ou75QA?fbclid=IwZXh0bgNhZW0CMTAAAR1MU6H6oshlQh5b4MiDHnBVGNqkIf8AIF5ukC1RQRNCZs8ANdvgG7rGRQ0_aem_AZPDaudK2UKu-GDkopgNlE-bCNEwZXUtlxUGgiVevx0xaXzIzcLFT-odNqCL51hSdS10Ryd17oMl_2627Qjp4fZ_",
        "category": "electronica"
    },
    {
        "id": 136,
        "title": "Curso De Recortes Digital Para Fotografos",
        "description": "Tecnicas profesionales de recorte digital para fotografos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/136.png",
        "link": "https://drive.google.com/drive/folders/1pCErJ9Q0Nw431zOJpGOnClfn4DpG5s4U?fbclid=IwZXh0bgNhZW0CMTAAAR2z8F36Y5N5LIuZuQHIo83Vtg-FHWHGVnLXhZGlx4eDCQGJStH2u5hlbrE_aem_AZMURveOQ4I0fp80od5LjNFfIsZP53aleSUD7JJuGYbK9Ib78dobkBQbh9D_wkVHzgLAmtd3mfy87uE4ShUN90P_",
        "category": "diseno"
    },
    {
        "id": 137,
        "title": "Curso De Implementacion De La Marca",
        "description": "Estrategias efectivas para implementar tu marca personal o empresarial.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/137.png",
        "link": "https://drive.google.com/drive/folders/1znUaeIwjblFFBmwVb7QIFwtkF6YmrBbL?fbclid=IwZXh0bgNhZW0CMTAAAR34SE2A1hVQkHKkEgD3ILlaLAJI2i97mjBLLrd-9g_ugVmW2ieSJpc4J1U_aem_AZOCto7zOam0Vt3VaUfoGtnra0UnmhMrE084e4Y2J8N_mSuU90iJBNb4jGpNzqmcYNLOpWI2pQO6g14HLQs2_3K4",
        "category": "negocios"
    },
    {
        "id": 138,
        "title": "Curso De Diseno Grafico En Canva",
        "description": "Domina el diseno grafico utilizando la plataforma Canva.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/138.png",
        "link": "https://drive.google.com/drive/folders/1z_APYQtZ-mWE3mNkyAc1AaoYcDYb1ojJ?fbclid=IwZXh0bgNhZW0CMTAAAR3XwfRa_SE2Bi5XJEPRFBRCPsVrtNSAcKlUtHduH5E3VSiHYFakXliSZBI_aem_AZNNqWCuSO_4QEviDzI7APPwt3tjuu6xZJ_w5V0pILMy0yJjYeLrlP-jf1wvs9B0fqyZ6CkeFhQ0wzm_WuhXDFce",
        "category": "diseno"
    },
    {
        "id": 139,
        "title": "Como Mejorar El Comportamiento De Tus Hijos",
        "description": "Estrategias efectivas para la educacion y manejo del comportamiento infantil.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/139.png",
        "link": "https://drive.google.com/drive/folders/10JuazjqxH6RU4RpQp8eX87mPGnvq4XPu?fbclid=IwZXh0bgNhZW0CMTAAAR3pV65wXoe97bI7UEpQWo-8FAGCAy_Gy9rylOHfUH6fI69AjFywj_rReGs_aem_AZO3_JKJyMQgLGWUKpeAUAk-0bOlpiKxipkiJHiZPFiahWD6X71acny5dkoYJ32I0HjSwO83TjhwSZ4Mz2psQbGT",
        "category": "desarrollo-personal"
    },
    {
        "id": 140,
        "title": "Curso De Barista Training Online",
        "description": "Conviertete en un experto barista con este curso completo en linea.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/140.png",
        "link": "https://drive.google.com/drive/folders/1xtVCHnaAcZVP3fAyWcOo9F1t5mTzHOPs?fbclid=IwZXh0bgNhZW0CMTAAAR3iO1BGCzWRizjfWhY_Qwb6nnKMXAzMwwWFW675J-KfpUk313PCNSVTIDU_aem_AZMBfW0qr0IKwSFUb_RdJWdf407j2YuPqR6Gm8-pHSxziDYTsHhRoXcq0s4lSurQ89M6SDmEDphCEVv6uFJY39l7",
        "category": "hogar"
    },
    {
        "id": 141,
        "title": "Curso De Culturismo Sin Fronteras",
        "description": "Entrenamiento completo de culturismo para todos los niveles.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/141.png",
        "link": "https://drive.google.com/drive/folders/1SsHKnQhz5U2EUfSY2uiX0s-pJRgrCxBg?fbclid=IwZXh0bgNhZW0CMTAAAR3hFBhFH1cI7__smQO8w4hfj-yiCULbBZ2M9p1sYhzYb0lGpXFTjelTHf8_aem_AZPpcPk1U8d_Geb4gzcvXOjvCehIJ1HN4hYQtdvFnBDe81j62AL4SsBcKqvpcpMbtltqC_yuH5QGXkVU8VNs2e1h",
        "category": "salud"
    },
    {
        "id": 142,
        "title": "Curso De Barbershop-Hotmart",
        "description": "Aprende tecnicas profesionales de barberia.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/142.png",
        "link": "https://drive.google.com/drive/folders/1j8U5dLb3hOkzHs3NxMdJOex1fDw7nZeG?fbclid=IwZXh0bgNhZW0CMTAAAR1wVO1wEwjMTyHO_2e06GMGj5_FLRtSmPIA4dlzjkl3D-vW7uKdxPMeXd4_aem_AZPf2Q2-j5riupVHpeYax8lN5YZ1vgXNWn2xkUw2ahvcRhv4PpAtSs5EVLad2Pi2xoXwQa1WCQGgdUc6fzxMaDKq",
        "category": "hogar"
    },
    {
        "id": 143,
        "title": "Curso De Aprende Ingles Dialogando",
        "description": "Metodo innovador para aprender ingles a traves de dialogos practicos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/143.png",
        "link": "https://drive.google.com/drive/folders/1plQIw8qkTtnV1kaLW41dKXq8lKJd-qrs?fbclid=IwZXh0bgNhZW0CMTAAAR3J3vN1enfyUKu9q9BNPiBZDleZcEWuxxUtu-BwPtQWxlLrXekRszbqi08_aem_AZPTsiZ5nES0DgbTa0D2bHfKikP2kJmE4BcbfhGgR3DivahA1KDlRQIqZlMfQBMv_FX5A3pn9qk9HTNn99OdBsOA",
        "category": "idiomas"
    },
    {
        "id": 144,
        "title": "Curso De Finanzas",
        "description": "Domina los conceptos financieros esenciales para tu vida personal y profesional.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/144.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FsAxilIRQ%23j1E2bNbAp1W09kUqIAaLAQ&sa=D&sntz=1&usg=AOvVaw2F1gm_5_arC0s2kpDjJJ5d",
        "category": "negocios"
    },
    {
        "id": 145,
        "title": "Curso Javascript ES9, HTML, CSS3 Y Nodejs Desde Cero",
        "description": "Aprende desarrollo web completo con las ultimas tecnologias.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/145.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiGpSTDBL%23u62EYZXb7KUy9w3HX1qMaw%2Ffolder%2FzfYC3DRA&sa=D&sntz=1&usg=AOvVaw19Zx4iQUKJ8Tj9qXVrEWu1",
        "category": "tecnologia"
    },
    {
        "id": 146,
        "title": "Curso De Creacion De Punto De Venta",
        "description": "Aprende a crear y gestionar un punto de venta efectivo.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/146.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiGpSTDBL%23u62EYZXb7KUy9w3HX1qMaw%2Ffolder%2FqWZiFBYL&sa=D&sntz=1&usg=AOvVaw0cxYFLpug0uR3k2_7CG7df",
        "category": "negocios"
    },
    {
        "id": 147,
        "title": "Curso De E-Commerce",
        "description": "Domina el comercio electronico y aumenta tus ventas en linea.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/147.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiGpSTDBL%23u62EYZXb7KUy9w3HX1qMaw%2Ffolder%2FrLQChD6Q&sa=D&sntz=1&usg=AOvVaw0HIlFuDNM2AX-82LqPC397",
        "category": "negocios"
    },
    {
        "id": 148,
        "title": "Curso Social Media Marketing Y Estrategia Digital",
        "description": "Estrategias avanzadas de marketing en redes sociales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/148.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiGpSTDBL%23u62EYZXb7KUy9w3HX1qMaw%2Ffolder%2FvCRGjb4L&sa=D&sntz=1&usg=AOvVaw1nGDR9QL08wGRkCgX9WMX_",
        "category": "negocios"
    },
    {
        "id": 152,
        "title": "Tecnico En Redes De Seguridad",
        "description": "Conviertete en experto en redes y seguridad informatica.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/152.png",
        "link": "https://drive.google.com/drive/folders/1EUOwVQm1UDpnVhxhvFGYTsjtXbnOErOA",
        "category": "tecnologia"
    },
    {
        "id": 153,
        "title": "Vender O Morir",
        "description": "Estrategias radicales para aumentar tus ventas exponencialmente.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/153.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FAo9WRLwS%23pW17etpG6H_85V4hmCryHg&sa=D&sntz=1&usg=AOvVaw1rIziy7q55LwO7e-XsjxqZ",
        "category": "negocios"
    },
    {
        "id": 155,
        "title": "Como Ganar En Criptomonedas",
        "description": "Aprende a invertir y ganar con criptomonedas de forma segura.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/155.png",
        "link": "https://drive.google.com/drive/folders/1NFXCKwtAMJ7HiNcEWS5oJpdqkUXoCvy4",
        "category": "negocios"
    },
    {
        "id": 156,
        "title": "Curso De Marketing Digital Completo (2024)",
        "description": "El curso mas completo de marketing digital actualizado para 2024.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/156.png",
        "link": "https://www.youtube.com/watch?v=v17EXDu3t0E&ab_channel=Cyberclick%E2%80%A2MarketingDigital",
        "category": "negocios"
    },
    {
        "id": 157,
        "title": "Curso Basico De Amigurumis",
        "description": "Aprende a crear adorables amigurumis (munecos tejidos) desde cero.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/157.png",
        "link": "https://www.youtube.com/watch?v=thZ5KNxBmcg&list=PLKfa5NsgvbSpEfP7a71urOiK6SPQw_KNy&ab_channel=CreativeCrochet",
        "category": "hogar"
    },
    {
        "id": 159,
        "title": "Curso De Cultivos De Hongos",
        "description": "Aprende las tecnicas para cultivar hongos comestibles en casa.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/159.png",
        "link": "https://www.youtube.com/watch?v=YEAyDJiEV-Q&ab_channel=SporeWorld",
        "category": "hogar"
    },
    {
        "id": 160,
        "title": "Cursos De Bellas Artes",
        "description": "Coleccion completa de cursos de bellas artes y tecnicas artisticas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/160.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2Fg6I0GRLL%23mDr5-0LuY-4YIkWYdIjlog%2Ffolder%2F86A2DB4I&sa=D&sntz=1&usg=AOvVaw1WAPkQCm6eiuzin3cdDEKR",
        "category": "diseno"
    },
    {
        "id": 162,
        "title": "Curso Decoracion De Globos",
        "description": "Aprende tecnicas profesionales para decoracion con globos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/162.png",
        "link": "https://www.youtube.com/watch?v=ggbanIZvnSw&list=PLRycKvHT1W1slL-ZAVjn1WtMdSJSSoCNy&ab_channel=DANNADIVERMUNDO",
        "category": "hogar"
    },
    {
        "id": 163,
        "title": "Ingles You Talk Tv",
        "description": "Curso completo de ingles con el metodo You Talk TV.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/163.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fwww.1024tera.com%2Fspanish%2Fsharing%2Flink%3Fsurl%3DZ3bLbNZ5ZJ_piw02pRjCsg&sa=D&sntz=1&usg=AOvVaw2fcMgWSFLlzRFSSb_tgf5W",
        "category": "idiomas"
    },
    {
        "id": 164,
        "title": "Copywriting Como Escribir Para Aprender Mas",
        "description": "Domina el arte del copywriting para vender mas con tus textos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/164.png",
        "link": "https://drive.google.com/drive/folders/1pzvDHFNCFzin9hvVUJPX841jTPiiS4uG",
        "category": "negocios"
    },
    {
        "id": 166,
        "title": "Curso De Illustrator",
        "description": "Aprende Adobe Illustrator desde cero hasta nivel avanzado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/166.png",
        "link": "https://drive.google.com/drive/u/0/folders/1V0MPr8b6YKcZYhzZN24c3k5pNI27y3Sd",
        "category": "diseno"
    },
    {
        "id": 167,
        "title": "Curso De Git Y Github",
        "description": "Aprende el sistema de control de versiones Git y la plataforma GitHub.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/167.png",
        "link": "https://youtu.be/7ylE8cm3mb0?si=-FxybeolDSgx03PD",
        "category": "tecnologia"
    },
    {
        "id": 168,
        "title": "Git Y Github De Brais Moure",
        "description": "Curso completo de Git y GitHub por el experto Brais Moure.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/168.png",
        "link": "https://www.google.com/search?q=curso+de+github+gratis&rlz=1C1VDKB_enPE1040PE1040&oq=CURSO+DE+GITHU&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMTAyOTVqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:2d5233bb,vid:3GymExBkKjE,st:0",
        "category": "tecnologia"
    },
    {
        "id": 172,
        "title": "Maestros Leds (Terabox)",
        "description": "Curso completo sobre instalacion y mantenimiento de sistemas LED.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/172.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2F1024terabox.com%2Fs%2F1-LRL4ddZakn-DLyiGdAN8w&sa=D&sntz=1&usg=AOvVaw18mQcQ8cwKcyrgNqS590Jm",
        "category": "electronica"
    },
    {
        "id": 173,
        "title": "Domina Las Matematicas",
        "description": "Curso completo para dominar las matematicas desde basico hasta avanzado.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/173.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FiUhHlC5I%233xvMoK7EJGXZO9SHWA7-6g&sa=D&sntz=1&usg=AOvVaw3G7m5riSMCuF7QaQQFTMRL",
        "category": "desarrollo-personal"
    },
    {
        "id": 175,
        "title": "Curso De Panaderia",
        "description": "Aprende las tecnicas profesionales de panaderia artesanal.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/175.png",
        "link": "https://drive.google.com/drive/folders/1ZF-ZwsRKPNw9hsC98NaIF58Wu96y2DQx?usp=sharing",
        "category": "hogar"
    },
    {
        "id": 176,
        "title": "Cursos De Idiomas",
        "description": "Coleccion de cursos para aprender diferentes idiomas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/176.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FXLJViQ5D%23Om38XZy4dUPttpENMVzYcA&sa=D&sntz=1&usg=AOvVaw0AQohwBuxuQFlUH_C2YRpR",
        "category": "idiomas"
    },
    {
        "id": 181,
        "title": "Microsoldadura",
        "description": "Tecnicas profesionales de microsoldadura para reparacion de dispositivos electronicos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/181.png",
        "link": "https://drive.google.com/drive/folders/1Rs-HG_EZeTjFkZl72d8DP9eCv_uQna3p?usp=sharing",
        "category": "electronica"
    },
    {
        "id": 182,
        "title": "Curso De Electronica Fundamentos De Electricidad Y Electronica",
        "description": "Aprende los fundamentos de electricidad y electronica desde cero.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/182.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2Fe9gERDya%23PEFG26jBKsMCpleywUahBQ&sa=D&sntz=1&usg=AOvVaw1KbxAKoq3L_0e0BDz5AAr5",
        "category": "electronica"
    },
    {
        "id": 183,
        "title": "Curso Diseno Sismico De Losas Y Vigas",
        "description": "Especializacion en diseno sismico de elementos estructurales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/183.png",
        "link": "https://drive.google.com/drive/folders/1dp6DyCsNDSWFrrfWxqTrEaN_6RWf-HgA",
        "category": "tecnologia"
    },
    {
        "id": 184,
        "title": "Curso De Facebook Ads",
        "description": "Domina la publicidad en Facebook para potenciar tu negocio.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/184.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fmega.nz%2Ffolder%2FaeZQTIoQ%23TNMirVmvcn1jUy-lLY3mDA&sa=D&sntz=1&usg=AOvVaw3H2lxF3NEgkzyN6vY7Twk8",
        "category": "negocios"
    },
    {
        "id": 185,
        "title": "Curso Practico De Chat GPT",
        "description": "Aprende a utilizar ChatGPT de manera practica para productividad.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/185.png",
        "link": "https://drive.google.com/drive/u/0/folders/14mErF59r5pxqrRY2KVojPOrA7dRgHJP1?sort=13&direction=a",
        "category": "tecnologia"
    },
    {
        "id": 188,
        "title": "Curso De Community Manager Completo",
        "description": "Conviertete en un experto Community Manager con este curso completo.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/188.png",
        "link": "https://drive.google.com/drive/u/0/folders/1llpe3pCD8oE-w668rznA5gWUuBsX8eTx?fbclid=IwAR0ydIGaJmCuVhFolP90fFU2NC84ON4b5-4jVS22D_XH6ZhMA-fZgQ50bLs",
        "category": "negocios"
    },
    {
        "id": 189,
        "title": "Curso De Mercado De Valores",
        "description": "Aprende a invertir en la bolsa de valores de manera inteligente.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/189.png",
        "link": "https://drive.google.com/drive/folders/1HgpC-aLRXCT4KIlDtZkwP7xMu4h-m0Am",
        "category": "negocios"
    },
    {
        "id": 190,
        "title": "Curso De Cerveza Artesanal",
        "description": "Aprende a elaborar cerveza artesanal de calidad profesional.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/190.png",
        "link": "https://drive.google.com/drive/folders/12TWQIWnsNdQVl1ZrFPUQeGExcdOTzRgT",
        "category": "hogar"
    },
    {
        "id": 192,
        "title": "Curso Express",
        "description": "Coleccion de cursos rapidos sobre diversos temas practicos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/192.png",
        "link": "https://drive.google.com/drive/folders/15oMJuwSwiEqRY9SQakG426KPM7vkeCgB?fbclid=IwY2xjawHAllFleHRuA2FlbQIxMAABHVBkS9C2qtOx2Is3Gz9fPxklZfB9K_u2kBsMGW45tjT8c7SCB6m2tZx2JA_aem_Z0ToYCMsXAaPDx2CH4XbaQ",
        "category": "desarrollo-personal"
    },
    {
        "id": 193,
        "title": "Curso De Yoga",
        "description": "Aprende yoga desde cero y mejora tu salud fisica y mental.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/193.png",
        "link": "https://sites.google.com/maxzimedia.net/maxzimedia/curso-yoga",
        "category": "salud"
    },
    {
        "id": 194,
        "title": "Curso Completo De Elaboracion De Tesis",
        "description": "Guia completa para la elaboracion de tesis academicas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/194.png",
        "link": "https://drive.google.com/drive/u/0/folders/1jvGNfhi4QqJK6LzU0d_0tN8fRa55jlzB?fbclid=IwAR2GxcbfbLqKESM8Wy8os7cDGj9DWkOqoEhVsGkAJy2XW99n3BfQXdt0FHw",
        "category": "desarrollo-personal"
    },
    {
        "id": 195,
        "title": "Curso Completo De Office 2021",
        "description": "Domina todas las herramientas de Microsoft Office 2021.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/195.png",
        "link": "https://drive.google.com/drive/folders/1JANwBtB90i2HJDg5pt9TInyBP-TLNCbP",
        "category": "tecnologia"
    },
    {
        "id": 196,
        "title": "Curso De E-Commerce Con Paypal",
        "description": "Aprende a configurar y gestionar un e-commerce con PayPal.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/196.png",
        "link": "https://drive.google.com/drive/folders/1-Ua5JGG_zhYMq6ct6kRq3uQfQQ_T7_Kg",
        "category": "negocios"
    },
    {
        "id": 197,
        "title": "Curso 'Aprende A Cantar'",
        "description": "Tecnicas vocales para aprender a cantar correctamente.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/197.png",
        "link": "https://drive.google.com/drive/folders/1HQk9A9Kcq6Yntmkf3H0IAHd6qKHxtPxP",
        "category": "musica"
    },
    {
        "id": 198,
        "title": "Curso De Trading 2",
        "description": "Segunda parte del curso avanzado de trading en mercados financieros.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/198.png",
        "link": "https://drive.google.com/drive/folders/11hEYMJUBdgvwQutPs5melTDHJ5bF-fq_",
        "category": "negocios"
    },
    {
        "id": 199,
        "title": "Tecnicas Para Entrenar Tu Creatividad",
        "description": "Ejercicios y metodos para desarrollar y potenciar tu creatividad.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/199.png",
        "link": "https://drive.google.com/drive/u/0/folders/1E4S4-4PwO3mPPOgYt-O7KOpC1CbWKWep",
        "category": "desarrollo-personal"
    },
    {
        "id": 201,
        "title": "Pémark Marketing",
        "description": "Estrategias innovadoras de marketing para el siglo XXI.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/201.png",
        "link": "https://drive.google.com/drive/folders/1eDNqypYsBiHctBGzyj5UGVTg6SzPgfps",
        "category": "negocios"
    },
    {
        "id": 202,
        "title": "Lenguaje De Señas",
        "description": "Aprende lenguaje de señas para comunicacion inclusiva.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/202.png",
        "link": "https://drive.google.com/drive/folders/1n1NnWp94kiHAQHkUaEE8edwNn2k4JBf0",
        "category": "desarrollo-personal"
    },
    {
        "id": 203,
        "title": "Curso Amazon FBA",
        "description": "Guia completa para vender en Amazon con el sistema FBA.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/203.png",
        "link": "https://drive.google.com/drive/u/0/folders/1BZLywl_4DriRI3XjwQDff6w7-tVH8W_v",
        "category": "negocios"
    },
    {
        "id": 204,
        "title": "Curso 'Creacion De Lamparas Con Origami De Papel'",
        "description": "Aprende a crear lamparas decorativas con la tecnica de origami.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/204.png",
        "link": "https://drive.google.com/drive/u/0/folders/1a_7FhRxzBnjgipxkhZR0mcofL47EXAxY",
        "category": "hogar"
    },
    {
        "id": 205,
        "title": "Curso 'Como Hacer Un Podcast'",
        "description": "Guia completa para crear, grabar y publicar tu propio podcast.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/205.png",
        "link": "https://drive.google.com/drive/u/0/folders/1WDJwTjfknRyOXUSngW2eE2V74V91dIIi",
        "category": "tecnologia"
    },
    {
        "id": 206,
        "title": "Curso 'Creacion De Libros Pop-Up'",
        "description": "Aprende a diseñar y crear libros pop-up tridimensionales.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/206.png",
        "link": "https://drive.google.com/drive/folders/1iM_b_3nx7SqAb3kXEk3bb3QV25Mf5021",
        "category": "diseno"
    },
    {
        "id": 207,
        "title": "Curso Afiliado Master",
        "description": "Conviertete en un afiliado exitoso y genera ingresos pasivos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/207.png",
        "link": "https://www.google.com/url?q=https%3A%2F%2Fwww.terabox.best%2Fspanish%2Fsharing%2Flink%3Fsurl%3DwVXPtNiPrZmwSKpg7w60zg&sa=D&sntz=1&usg=AOvVaw1oIRnow5OPs7e64-Kzx-rW",
        "category": "negocios"
    },
    {
        "id": 208,
        "title": "Curso Diseno De Negocios- Domestika",
        "description": "Aprende a diseñar modelos de negocio exitosos.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/208.png",
        "link": "https://drive.google.com/drive/folders/1ZGQYl_XZDBGYfMoBpd_M8Mz-fMb7NJnC",
        "category": "negocios"
    },
    {
        "id": 209,
        "title": "Curso Manejo De Las Emociones",
        "description": "Tecnicas para reconocer y gestionar eficazmente tus emociones.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/209.png",
        "link": "https://drive.google.com/drive/folders/1oVYJxeXbD3zMBSBsjlWy4fg7yJ6iCOYS",
        "category": "desarrollo-personal"
    },
    {
        "id": 210,
        "title": "Curso Como Vender Mas Con Whatsapp 2025",
        "description": "Estrategias actualizadas para vender mas usando WhatsApp Business.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/210.png",
        "link": "https://drive.google.com/drive/folders/1C1wHDXEeYD2Njc8CmtE9dhm5pqPgDeVZ",
        "category": "negocios"
    },
    {
        "id": 211,
        "title": "Curso Formula De Ventas Ilimitadas",
        "description": "Metodo probado para multiplicar tus ventas exponencialmente.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/211.png",
        "link": "https://drive.google.com/drive/folders/1yIQW9PUE1Z2HbIjPxwvafWqt1S2GUJsh?usp=sharing",
        "category": "negocios"
    },
    {
        "id": 212,
        "title": "Segundo Curso de Contabilidad",
        "description": "Nivel intermedio-avanzado de contabilidad financiera.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/212.png",
        "link": "https://drive.google.com/drive/folders/1I0_GYp2UPOOVneElGRcsih73H79-847s",
        "category": "negocios"
    },
    {
        "id": 213,
        "title": "Curso Tocando Guitarra",
        "description": "Aprende a tocar guitarra desde cero con lecciones practicas.",
        "image": "https://github.com/emiversal/pages/raw/b37a8ff3b8550ab6fa78f7f690d9385a8f59490f/213.png",
        "link": "https://sites.google.com/maxzimedia.net/maxzimedia/pistas-de-guitarra",
        "category": "musica"
    }
        ];

        function renderCourses(filter = 'all') {
            const container = document.getElementById('coursesContainer');
            container.innerHTML = '';

            const filteredCourses = filter === 'all' 
                ? coursesData 
                : coursesData.filter(course => course.category === filter);

            filteredCourses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'course-card';
                
                // Imagen del curso
                const imgContainer = document.createElement('div');
                imgContainer.className = 'course-img-container';
                
                const img = document.createElement('img');
                img.src = course.image;
                img.alt = course.title;
                img.className = 'course-img';
                imgContainer.appendChild(img);
                
                // Cuerpo del curso
                const cardBody = document.createElement('div');
                cardBody.className = 'course-body';
                
                // Badge de categoría
                const badge = document.createElement('span');
                badge.className = `course-badge badge-${course.category}`;
                
                // Asignar nombre legible a la categoría
                let categoryName = '';
                switch(course.category) {
                    case 'programacion':
                        categoryName = 'Programación';
                        break;
                    case 'electronica':
                        categoryName = 'Electrónica';
                        break;
                    case 'ingenieria':
                        categoryName = 'Ingeniería';
                        break;
                    case 'diseno':
                        categoryName = 'Diseño';
                        break;
                    case 'manufactura':
                        categoryName = 'Manufactura';
                        break;
                    case 'negocios':
                        categoryName = 'Negocios';
                        break;
                    case 'musica':
                        categoryName = 'Música';
                        break;
                    case 'idiomas':
                        categoryName = 'Idiomas';
                        break;
                    case 'desarrollo-personal':
                        categoryName = 'Desarrollo Personal';
                        break;
                    case 'hogar':
                        categoryName = 'Hogar';
                        break;
                    case 'tecnologia':
                        categoryName = 'Tecnología';
                        break;
                    case 'salud':
                        categoryName = 'Salud';
                        break;
                    default:
                        categoryName = course.category;
                }
                
                badge.textContent = categoryName;
                
                // Título del curso
                const title = document.createElement('h3');
                title.className = 'course-title';
                title.textContent = course.title;
                
                // Descripción del curso
                const description = document.createElement('p');
                description.className = 'course-description';
                description.textContent = course.description;
                
                // Enlace del curso
                const link = document.createElement('a');
                link.href = course.link;
                link.target = '_blank';
                link.className = 'course-link';
                link.innerHTML = 'Ver curso <i class="fas fa-external-link-alt"></i>';
                
                // Construir la tarjeta
                cardBody.appendChild(badge);
                cardBody.appendChild(title);
                cardBody.appendChild(description);
                cardBody.appendChild(link);
                
                card.appendChild(imgContainer);
                card.appendChild(cardBody);
                container.appendChild(card);
            });
        }

        // Filtros
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                renderCourses(filterValue);
            });
        });

        // Búsqueda
        const searchInput = document.getElementById('courseSearchInput');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');
            
            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const description = card.querySelector('.course-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Inicializar
        renderCourses();
    });
