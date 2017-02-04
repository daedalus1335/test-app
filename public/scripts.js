
$( document ).ready(function() {
    $( "#post-form" ).on("submit", function( event ) {
    //   alert( "Handler for .submit() called." );
      event.preventDefault();
      var post = ( $(this).serialize());
      console.log( post );
      //console.log( $( this ).serialize() );
      $('#posts').prepend("<div>" + $("#post-body").val() + "</div>");
      //$ajax({url: "posts-index"})
    });

    $( "#post-form" ).validate();
});
