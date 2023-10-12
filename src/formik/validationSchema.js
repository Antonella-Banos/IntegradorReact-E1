import * as Yup from "yup";

export const contactoValidationSchema = Yup.object({
    nombre: Yup.string().trim().required("Campo requerido"),
    apellido: Yup.string().trim().required("Campo requerido"),
    email: Yup.string().email("Ingresar un email válido").required("Campo requerido"),
    asunto: Yup.string().max(200, "Ingresar un máximo de 200 caracteres").notRequired(),
});

