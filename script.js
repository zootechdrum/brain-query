$(function(){
  //https://en.wikipedia.org/w/api.php?action=opensearch&search=billy&callback=?
  $('#submit').click(function(){
    
    var searchTerm = $('#searchTerm').val();
    $.ajax({
      
      type:'GET',
      url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&callback=?',
      async:false,
      dataType:'json',
      success:function(data){
        $("#results").html("");
        for( var i = 0; i <= data[1].length - 1; i++){
          $('#results').append('<li><a href =' + data[3][i] + ' target=' + 'blank' + '><h1>'+data[1][i]+"</h1></a><p>"+data[2][i]+"</p></li>");
        }
        $("html,body").animate({scrollTop: 400 }, "slow")
      },
      error:function(err){
        alert("ERR")      },

    })   
  })
  //type enter on jeyboard to search
  $('#searchTerm').bind('keypress',function(e){
    if(e.keyCode == 13){
      $("#submit").click();
    }
  })
  });