import Swal from 'sweetalert2'

export default function CongratulationsToast(title, text) {
  Swal.mixin({
    toast: true,
    position: 'top-end',
    width: '100%',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    background: 'rgba(0, 132, 255, 0.9)',
    backdrop: 'rgba(0, 132, 255, 0.2)',
    color: '#f2f2f2',
    customClass: {
      popup: 'rounded-md max-w-lg p-4'
    },
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }).fire({
    title: title,
    text: text
  })
}
