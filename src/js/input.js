$(function() {
    $("#date-input").datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: function(dateText) {
        $(this).val(dateText);
      }
    });

    $("#date-input").mask('00/00/0000');
  });