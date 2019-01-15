//js Document

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


$('.get-in-touch').click( function(e) {
    
    e.preventDefault();
    
    formId = $(this).parent().parent().find('form').attr('id');
    
    formParent = $(this).parent().parent().attr('id');
    
    console.log(formParent);
    
    var rf1 = $("#"+formParent+" :input[required]");
    var rf1IDs = new Array();

    for (var i = 0; i < rf1.length; i++)
    {
        if(rf1[i].value === '' || (rf1[i].id === 'email' && validateEmail(rf1[i].value) == false))
        {
            rf1IDs.push(rf1[i].id);
            $("#"+formParent+' :input#'+rf1[i].id).css('border-color','red');
            rf1[i].focus();
        }
        else {
            $("#"+formParent+' :input#'+rf1[i].id).css('border-color', 'rgba(0,0,0,0.3)');
        }
    }
    

    if(rf1IDs.length == 0)
    {
        var ctn_parses =  "option="+rf1[0].value + "&name="+rf1[1].value + "&email="+rf1[2].value + "&description="+$("#"+formParent+' :input#description').val();
                    
                    //AJAX!
                    $.ajax({
                            type: 'POST',
                            url: "./actions.php",
                            beforeSend: function() {
                                //Sending effect
                                $("#"+formParent+' form button').removeClass('get-in-touch').removeClass('error').html('SENDING...').addClass('sending');
                            },
                            data: ctn_parses,
                            success: function(ctn_data) {
                                
                                $("#"+formParent+' form button').removeClass('sending');
                                
                                if(ctn_data) {
                                    
                                    $("#"+formParent+' form button').html('TRY AGAIN').addClass('error');
                                    
                                } else {
                                    $("#"+formParent+' form button').html('SENT').addClass('success');
                                    
                                    setTimeout(function() {
                                        
                                        $("#"+formParent+' form button').removeClass('error').removeClass('success').addClass('get-in-touch').html('SEND');

                                        $("#"+formParent+' :input').val('');

                                    }, 2000)
                                }
                                    
                                
                                
                                
                                
                            },
                            error: function(xhr) {
                                console.log('Error: '+xhr.statusText);
                                
                            }
                        }); 
                        
    }
    
})