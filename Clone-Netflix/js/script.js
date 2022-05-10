$(document).ready(function () {
  let url = $('#modalVideo').attr('src')
  $('#exampleModal').on('hide.bs.modal', function () {
    $('#modalVideo').attr('src', '')
  })
  $('#exampleModal').on('show.bs.modal', function () {
    $('#modalVideo').attr('src', url)
  })
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 5
    }
  }
})
