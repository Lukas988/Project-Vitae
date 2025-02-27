const profesionals = [
    {
        "prefix": "Dr.",
        "name": "Adrián Char",
        "image": "/team/adrian-char.webp",
        "specialties": ["Director Médico", "Medicina Reproductiva", "Endocrinología Ginecológica"],
        "categories": ["Medicina Reproductiva", "Endocrinología", "Ginecológía"],
        "mp": "2934"
    },
    {
        "prefix": "Dr.",
        "name": "Alejandro Castellani",
        "image": "/team/alejandro-castellani.webp",
        "specialties": ["Esp. en Mastología y Ginecología"],
        "categories": ["Mastología", "Ginecología"],
        "mp": "2765"
    },
    {
        "prefix": "Dr.",
        "name": "Alfredo Sajama",
        "image": "/team/alfredo-sajama.webp",
        "specialties": ["Tocoginecología", "Esp. en Mastología"],
        "categories": ["Tocoginecología", "Mastología"],
        "mp": "3259"
    },
    {
        "prefix": "Dra.",
        "name": "Andrea Barrionuevo",
        "image": "/team/andrea-barrionuevo.webp",
        "specialties": ["Ginecología", "Tracto Genital Inferior", "Cirugía Ginecológica"],
        "categories": ["Ginecología", "Tracto Genital Inferior"],
        "mp": "4737"
    },
    {
        "prefix": "Dr.",
        "name": "Andrés Arroyo",
        "image": "/team/andres-arroyo.webp",
        "specialties": ["Ginecología"],
        "categories": ["Ginecología"],
        "mp": "5665"
    },
    {
        "prefix": "Dr.",
        "name": "Carlos Rizzotti",
        "image": "/team/carlos-rizzotti.webp",
        "specialties": ["Tocoginecología", "Embarazos de Alto Riesgo", "Ecografías y Cirugías Viodeolaparscópicas"],
        "categories": ["Tocoginecología", "Embarazos de Alto Riesgo", "Ecografías", "Videolaparoscopia"],
        "mp": "3797"
    },
    {
        "prefix": "Lic.",
        "name": "Carolina Cornejo",
        "image": "/team/carolina-cornejo.webp",
        "specialties": ["Nutrición"],
        "categories": ["Nutrición"],
        "mp": "205"
    },
    {
        "prefix": "Dra.",
        "name": "Carolina Cortez",
        "image": "/team/carolina-cortez.webp",
        "specialties": ["Ginecología", "Cirugía Ginecológica Mini Invasiva"],
        "categories": ["Ginecología"],
        "mp": "5500"
    },
    {
        "prefix": "Dra.",
        "name": "Celeste Dantur",
        "image": "/team/celeste-dantur.webp",
        "specialties": ["Ginecología Regenerativa", "Estética y Funcional"],
        "categories": ["Ginecología", "Estética y Funcional"],
        "mp": "4011"
    },
    {
        "prefix": "Dr.",
        "name": "Daniel Camacho",
        "image": "/team/daniel-camacho.webp",
        "specialties": ["Bioquímico", "Laboratorio de Análisis Clínicos"],
        "categories": ["Bioquímica", "Análisis Clínicos"],
        "mp": "638"
    },
    {
        "prefix": "Dr.",
        "name": "Esteban Rusinek",
        "image": "/team/esteban-rusinek.webp",
        "specialties": ["Tocoginecología", "Especialista en Uroginecología", "Videolaparoscopia"],
        "categories": ["Tocoginecología", "Uroginecología", "Videolaparoscopia"],
        "mp": "3148"
    },
    {
        "prefix": "Dra.",
        "name": "Fabiola Díaz",
        "image": "/team/fabiola-diaz.webp",
        "specialties": ["Esp. en Cardiología Infantil", "Ecocardiografía Pediátrica"],
        "categories": ["Cardiología", "Ecocardiografía"],
        "mp": "5093"
    },
    {
        "prefix": "Dr.",
        "name": "Fernando Ramos",
        "image": "/team/fernando-ramos.webp",
        "specialties": ["Esp. en Diagnóstico por Imagen"],
        "categories": ["Diagnóstico por Imagen"],
        "mp": ""
    },
    {
        "prefix": "Dra.",
        "name": "Graciela Soler",
        "image": "/team/graciela-soler.webp",
        "specialties": ["Esp. en Endocrinología"],
        "categories": ["Endocrinología"],
        "mp": "1030"
    },
    {
        "prefix": "Dr.",
        "name": "Gustavo Bonifato",
        "image": "/team/gustavo-bonifato.webp",
        "specialties": ["Medicina Reproductiva", "Tocoginecología"],
        "categories": ["Medicina Reproductiva", "Tocoginecología"],
        "mp": "5591"
    },
    {
        "prefix": "Dr.",
        "name": "Héctor Costilla",
        "image": "/team/hector-costilla.webp",
        "specialties": ["Ginecología"],
        "categories": ["Ginecología"],
        "mp": "2787"
    },
    {
        "prefix": "Dr.",
        "name": "Javier Campos",
        "image": "/team/javier-campos.webp",
        "specialties": ["Pediatría"],
        "categories": ["Pediatría"],
        "mp": "3249"
    },
    {
        "prefix": "Dra.",
        "name": "Josefina Campos",
        "image": "/team/josefina-campos.webp",
        "specialties": ["Ginecología y Obstetricia", "Ginecología Infanto Juvenil", "Control Embarazo"],
        "categories": ["Ginecología", "Obstetricia", "Control Embarazo"],
        "mp": "4817"
    },
    {
        "prefix": "Dra.",
        "name": "Lorena López",
        "image": "/team/lorena-lopez.webp",
        "specialties": ["Odontología"],
        "categories": ["Odontología"],
        "mp": "1023"
    },
    {
        "prefix": "Dr.",
        "name": "Luis Navarro",
        "image": "/team/luis-navarro.webp",
        "specialties": ["Obstetricia - Ginecología", "Embarazos de Alto Riesgo"],
        "categories": ["Obstetricia", "Ginecología", "Embarazos de Alto Riesgo"],
        "mp": "2687"
    },
    {
        "prefix": "Dr.",
        "name": "Marcelo Abraham",
        "image": "/team/marcelo-abraham.webp",
        "specialties": ["Ginecología y Obstetricia", "Esp. en Ecografías"],
        "categories": ["Ginecología", "Obstetricia", "Ecografías"],
        "mp": "2772"
    },
    {
        "prefix": "Dra.",
        "name": "María Cristina Sánchez Wilde",
        "image": "/team/maria-cristina-sanchez-wilde.webp",
        "specialties": ["Esp. en Obstetricia", "Ginecología - Tracto Genital Inferior"],
        "categories": ["Obstetricia", "Ginecología", "Tracto Genital Inferior"],
        "mp": "2941"
    },
    {
        "prefix": "Dra.",
        "name": "María Eugenia Soler",
        "image": "/team/maria-eugenia-soler.webp",
        "specialties": ["Odontología Integral"],
        "categories": ["Odontología"],
        "mp": "1044"
    },
    {
        "prefix": "Dra.",
        "name": "María Paz García Nero",
        "image": "/team/maria-paz-garcia-nero.webp",
        "specialties": ["Tocoginecología", "Tracto Genital Inferior", "Adolescencia"],
        "categories": ["Tocoginecología", "Tracto Genital Inferior", "Adolescencia"],
        "mp": "4333"
    },
    {
        "prefix": "Dr.",
        "name": "Miguel Chávez Medina",
        "image": "/team/miguel-chavez-medina.webp",
        "specialties": ["Cardiología"],
        "categories": ["Cardiología"],
        "mp": "5139"
    },
    {
        "prefix": "Dra.",
        "name": "Mónica Pinillo",
        "image": "/team/monica-pinillo.webp",
        "specialties": ["Pediatría"],
        "categories": ["Pediatría"],
        "mp": "4440"
    },
    {
        "prefix": "Dr.",
        "name": "Nicolás Flandorffer Nallar",
        "image": "/team/nicolas-flandorffer-nallar.webp",
        "specialties": ["Médicina Clinica", "Esp. en Medicina Interna", "Diabetes - Obesidad - Tabaquismo"],
        "categories": ["Medicina Clinica", "Medicina Interna", "Diabetes","Obesidad", "Tabaquismo"],
        "mp": "5167"
    },
    {
        "prefix": "Dr.",
        "name": "Pablo Edmundo Paz",
        "image": "/team/pablo-edmundo-paz.webp",
        "specialties": ["Esp. en Obstetricia", "Ecografía Tocoginecológica"],
        "categories": ["Obstetricia", "Ecografías", "Tocoginecología"],
        "mp": "4618"
    },
    {
        "prefix": "Dr.",
        "name": "Paul Coronel",
        "image": "/team/paul-coronel.webp",
        "specialties": ["Esp. en Cirugía Plástica"],
        "categories": ["Cirugía Plástica"],
        "mp": "5623"
    },
    {
        "prefix": "Dra.",
        "name": "Paula Diaz",
        "image": "/team/paula-diaz.webp",
        "specialties": ["Esp. en Oftalmología"],
        "categories": ["Oftalmología"],
        "mp": "3557"
    },
    {
        "prefix": "Dr.",
        "name": "Sliman Salim",
        "image": "/team/sliman-salim.webp",
        "specialties": ["Cirugía Ginecológica Mini Invasiva"],
        "categories": ["Ginecología"],
        "mp": "3056"
    },
    {
        "prefix": "Lic.",
        "name": "Valentina Petracchini",
        "image": "/team/valentina-petracchini.webp",
        "specialties": ["Psicología Clínica", "Psicoanálisis"],
        "categories": ["Psicología", "Psicoanálisis"],
        "mp": "1708"
    },
    {
        "prefix": "Dr.",
        "name": "Yulian Lazo Portuese",
        "image": "/team/yulian-lazo-portuese.webp",
        "specialties": ["Oftalmología Clínica y Quirúrgica"],
        "categories": ["Oftalmología"],
        "mp": "5701"
    }
];

profesionals.forEach((profesional, index) => {
    profesional.id = `${index}-profesional-${profesional.name.replace(/\s+/g, '-').toLowerCase()}`;
});

export { profesionals };