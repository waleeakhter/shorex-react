
import * as yup from "yup";
export const validationSchema = (id) => {
    return yup.object().shape({
        name: yup.string().required("Name is required").nullable(),
        reg_no: yup.string().required("Vehicle Number is required").nullable(),
        reg_doc: !id && yup.string().required("Vehicle Number is required").nullable(),
        engine_no: yup.string().required("Engine Number is required").nullable(),
        trade_mark: yup.string().required("Trade mark is required").nullable(),
        chassis_no: yup.string().required("Chassis NO is required").nullable(),
        model: yup.string().required("model NO  is required").nullable(),
        notes: yup.string().required("notes is required").nullable(),
    });
};