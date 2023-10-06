import * as Yup from "yup";

export const contactoValidationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Ingresar un email válido').required('El email es requerido'),
    asunto: Yup.string().required('El asunto es requerido'),
});

