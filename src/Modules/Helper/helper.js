import Api from "@evenlogics/whf-api"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'



export const deleteItem = async (id, target,t) => {
    return Swal.fire({
        title: t('base:general-delete-statement'),
        text: t(`shorex:you-wont-be-able-to-revert-this`),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#51ab1d',
        cancelButtonColor: '#ff6a6a',
        cancelButtonText:t('base:general-cancel'),
        confirmButtonText: `${t('shorex:yes')}, ${t('shorex:delete-it')}!`
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            return Api.request("delete", `/${target}/${id}`)
                .then(res => {
                    console.log(res);
                    toast.success(t(`shorex:${res.message}`));
                    return true;
                })
                .catch(err => {
                    console.log(err);
                    if(err?.response?.data?.message){
                        toast.error(t('shorex:'+err.response.data.message))
                    }else{
                        toast.error("Something Went Wrong");
                    }
                    throw new Error(err)
                })

        }  
        if (result.isDismissed){
            return false;
        }
    })
}

