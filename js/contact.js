$(function()
{
    $("#feedback form").submit(function()
    {
        var form = $(this);
        var str = form.serialize();
        $.ajax(
        {
            type: "POST",
            url: "contact.php",
            data: str,
            success: function(msg)
            {
                $("#feedback .result .alert").remove();
                msg = JSON.parse(msg);

                if(msg.status == 'OK')
                {
                    $('#feedback .result').append('<div class="alert alert-success">Your message has been sent. Thank you!<button type="button" class="close" data-dismiss="alert">×</button></div');
                }
                else if(msg.text)
                {
                    $.each(msg.text, function(i, elem){
                        $('#feedback .result').append('<div class="alert alert-error">' + elem + '<button type="button" class="close" data-dismiss="alert">×</button></div');
                    })
                }
                else
                {
                    $('#feedback .result').append('<div class="alert alert-error">Error<button type="button" class="close" data-dismiss="alert">×</button></div');
                }
            }
        })
        return false;
    })
})