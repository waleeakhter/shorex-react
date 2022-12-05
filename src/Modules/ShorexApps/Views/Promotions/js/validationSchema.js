
import * as yup from "yup";
export const validationSchema = (holidays, id) => {
    return yup.object().shape({
        title_en: yup.string().required("Title in english is required"),
        title_ar: yup.string(),
        total_vouchers: yup
            .number()
            .required("Field is required!")
            .integer()
            .nullable()
            .min(0, "Min value 1."),
        valid_for: yup
            .number()
            .required("Field is required!")
            .nullable()
            .min(0, "Min value 1."),
        redemption_limit: yup
            .number()
            .required("Field is required!")
            .integer()
            .nullable()
            .min(0, "Min value 1.")
            .max(
                yup.ref("total_vouchers"),
                "redemption limit should be less than or equal to  total  coupons"
            ),
        details_en: yup.string().required("Field is required!").nullable(),
        details_ar: yup.string().nullable(),
        code: yup.string().required("Field is required!").nullable().min(4, "Min value 4.").max(4, "Max value 4."),
    });
};