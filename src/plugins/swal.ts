import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const WarningAlert = (title: string, text: string, onConfirm: Function) => {

    Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonText: "Download",
        icon: "success",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm(result);
        }
    });
};

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


export const sweetToastError = (title: string) => Toast.fire({ icon: "error", title });
export const sweetToastSuccess = (title: string) => Toast.fire({ icon: "success", title });