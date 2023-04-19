

const data = JSON.parse(localStorage.getItem("carrito"), 2);

Swal.fire({
    title: '<strong>Carrito</u></strong>',
    icon: 'info',
    html:
        data,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
        '<i class="fa fa-thumbs-down">[</i>',
    cancelButtonAriaLabel: 'Thumbs down'
})
