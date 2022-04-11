import toastr from 'toastr';

const Toastr = {
    success(message) {
        toastr.success(message, "", {
            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-right"
        });
    },
    warning(message) {
        toastr.warning(message, "", {
            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-right"
        });
    },
    error(message) {
        toastr.error(message, "", {
            "closeButton": true,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-right"
        });
    }
}

export default Toastr;