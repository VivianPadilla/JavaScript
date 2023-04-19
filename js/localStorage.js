

const data = (localStorage.getItem("carrito"));

Swal.fire({
    title: '<strong>Carrito</u></strong>',
    icon: 'info',
    html:
        data,
})
