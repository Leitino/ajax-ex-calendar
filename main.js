$(function() {
  $('#button').click(function() {

    var country = $('#nazione').val()
    console.log(country)

    $.ajax({
      url:"https://holidayapi.com/v1/holidays",
      method:"GET",
      data:{
        key:'54a6fac8-a41c-4f07-9392-cac57a3b19e9',
        country: country,
        year: 2017,
        month: 01,
      },
      success:function(data) {
        console.log(data)
          var daysInMonth = moment('2017-01').daysInMonth()
          console.log(daysInMonth)
          for (var i = 1; i <= daysInMonth; i++) {
            console.log(i)
          }



      }

    });

  })

})
