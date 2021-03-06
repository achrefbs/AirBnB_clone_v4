const $ = window.$;
window.addEventListener('DOMContentLoaded', function (event) {
  const dict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete dict[$(this).attr('data-id')];
    }
    $('.amenities h4').html(Object.values(dict).join(', ') || '&nbsp;');
  });
});
$.get('http://0.0.0.0:5001/api/v1/status/')
  .done(function (response) {
    if (response.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  })
  .fail(function (response) {
    $('#api_status').removeClass('available');
  });
