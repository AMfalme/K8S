$(function() {
  var csrftoken = getCookie('csrftoken');

  function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
      indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  $('#sendInquiryForm').submit(

    function(e){
         
      e.preventDefault();
      var form = $(this);
      var data = getFormData(form);
      data.message = $("#contact_message").val();
   
      $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "contactus",
            headers:{
              "X-CSRFToken": csrftoken
            },
            data: JSON.stringify(data),
            success: function (response, status) {
              if (response.error) {
             console.log(response.error);
             console.log(status);
             console.log('error');
              $('#sendInquiryForm').hide();
               $("#sendInquiryResponse").css('display', 'block');
               $("#sendInquiryResponse").html("<p>" + "Successfully sent"+ "</p>");
              }
              else {
                console.log('success');
                $('#sendInquiryForm').hide();
            $("#sendInquiryForm").hide();
            $("#sendInquiryResponse").css('display','block');
             $("#sendInquiryResponse").css('background-color','red');
            $("#sendInquiryResponse").html("<p>" + response.error.message  + "</p>");

              }
             
            }
            ,
            error: function(response, error) {
              console.log(response);
              console.log(status);
            }
      });
    }
    );
});