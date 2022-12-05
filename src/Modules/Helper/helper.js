import Api from "@evenlogics/whf-api"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'



export const deleteItem = async (id, target) => {
    console.log(id)
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#51ab1d',
        cancelButtonColor: '#ff6a6a',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
            return Api.request("delete", `/${target}/${id}`)
                .then(res => {
                    console.log(res);
                    toast.success(res.message);
                    return true;
                })
                .catch(err => {
                    console.log(err);
                    toast.error("Something Went Wrong");
                    return true;
                })

        }  
        if (result.isDismissed){
            return false;
        }
    })
}

