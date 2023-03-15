import * as yup from "yup";
import "yup-phone-lite";
export const validationSchema = (id) => {
    return yup.object().shape({
        first_name: yup.string().required("Field is required!"),
        last_name: yup.string().required("Field is required!"),
        email: yup.string().email("Invalid email").required("Field is required!"),
        phone: yup.string().phone('FR', "Phone number is invalid").required("Field is required!"),
        mobile: yup.string().phone('FR', "Mobile number is invalid").required("Field is required!"),
        post_code: yup.string().required("Field is required!"),
        business_name: yup.string().required("Field is required!"),
        nif: yup.string().required("Field is required!"),
        address: yup.string().required("Field is required!"),
        // account_hldr_name: yup.string().required("Field is required!"),
        // bank_name: yup.string().required("Field is required!"),
        // incharge_staff: yup.string().required("Field is required!"),
        // notes: yup.string().required("Field is required!").nullable(),
        // iban: yup.string().required("Field is required!"),
        // category_id: yup.number().required("Field is required!").nullable(),
        license_img: !id && yup.string().required('A file is required').nullable(),
    });
};