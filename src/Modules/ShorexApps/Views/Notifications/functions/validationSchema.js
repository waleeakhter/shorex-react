
import * as yup from "yup";
export const validationSchema = (holidays, id) => {
    return yup.object().shape({
        title_en: yup.string().required("Title in english is required").nullable(),
        title_fr: yup.string().required("Title in french is required").nullable(),
        type: yup.string().required("select a option").nullable(),
        role_id: yup.number().when('type',
            (type, schema) => {
                console.log('type value : ', type);
                if (type === "group") {
                    return schema.required('select a group');
                } else {
                    return schema
                }
            }).nullable(),
        text_en: yup.string().required("Enter some text in english").nullable(),
        text_fr: yup.string().required("Enter some text in french").nullable(),
        user_id: yup.number().nullable().when('type',
            (type, schema) => {
                console.log('type value : ', type);
                if (type === "single") {
                    return schema.required('select a user');
                } else {
                    return schema
                }
            }),
        nif: yup.string().nullable().when('type',
            (type, schema) => {
                console.log('type value : ', type);
                if (type === "single") {
                    return schema.required('Required Field');
                } else {
                    return schema
                }
            }),
    });
};