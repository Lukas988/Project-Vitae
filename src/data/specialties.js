const specialtiesData = [
    "Medicina Reproductiva",
    "Ginecología",
    "Endocrinología",
    "Tocoginecología",
    "Mastología",
    "Tracto Genital Inferior",
    "Embarazos de Alto Riesgo",
    "Ecografías",
    "Videolaparoscopia",
    "Nutrición",
    "Bioquímica",
    "Análisis Clínicos",
    "Estética y Funcional",
    "Uroginecología",
    "Cardiología",
    "Ecocardiografía",
    "Diagnóstico por Imagen",
    "Pediatría",
    "Obstetricia",
    "Control Embarazo",
    "Odontología",
    "Adolescencia",
    "Medicina Clinica",
    "Medicina Interna",
    "Diabetes",
    "Obesidad",
    "Tabaquismo",
    "Oftalmología",
    "Cirugía Plástica",
    "Psicología",
    "Psicoanálisis"
];

export const specialties = specialtiesData.map((specialty, index) => ({
    id: `${index}-specialty-${specialty.replace(/\s+/g, '-').toLowerCase()}`,
    name: specialty
}));