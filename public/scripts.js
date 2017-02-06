
$( document ).ready(function() {
    $( "#post-form" ).on("submit", function( event ) {
    //   alert( "Handler for .submit() called." );
      event.preventDefault();
      var post = ( $(this).serialize());
      //console.log( $( this ).serialize() );

      $.ajax({
          type: 'POST',
          url: '/posts',
          data: post,
          success: function(data){
              console.log("hey bro")
              $('#posts').prepend("<div>" + data.body + "</div>");
              // clear the form form[0].reset();
              //$('#post-body')[0].reset();
          }
      });
    });

    $( "#post-form" ).validate();
});
