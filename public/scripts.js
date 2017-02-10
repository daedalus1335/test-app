
function newPostSubmit() {
    event.preventDefault();
    var post =  ( $( "#post-form" ).serialize() );

    $.ajax({
        type: 'POST',
        url: '/posts',
        data: post,
        success: function(data){
            console.log(data.body)
            $('#posts').prepend("<div>" + data.body + "</div>");
            // clear the form form[0].reset();
            $('#post-form')[0].reset();
        },
        error: function(data) {
            //TODO
        }
      //   error: function(err) {
      //   console.log(err);
    });
}

$( document ).ready(function() {
    $("#post-body").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            // console.log('hello')
            newPostSubmit();
        }
    });

    $( "#post-form" ).on("submit", function( event ) {
        newPostSubmit();
    });

    // $( "#post-form" ).validate();
});
