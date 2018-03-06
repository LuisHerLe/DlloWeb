$(function(){

  $("#accordion").accordion();
  $("#PruebaLuifo").accordion();

  $("#fecha").datepicker({
    changeMonth: true,
    changeYear: true
  });

  $(".emergente").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Delete all items": function() {
        $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    }
  })

})
