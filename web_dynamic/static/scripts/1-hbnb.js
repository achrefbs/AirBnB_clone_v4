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
