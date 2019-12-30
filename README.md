# Brain Query

## Description
In this app I used JQuery to make an AJAX call to the Wikipedia API. Upon sucessful call, user would be able to resulting Wikipedia entries.

## Technology Used

1. JavaScript
2. JQuery
3. CSS
4. Bootstrap


![Gif of working app](./assets/working-giphy.gif)

The code below makes up 90% of what the user sees on the front-end. Upon form submission
an ajax call is made to the wikipedia API. As soon as we get a reponse li elements get
appended to the page and the window scrolls down a few pixels to show results. 

```javascript
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
```
