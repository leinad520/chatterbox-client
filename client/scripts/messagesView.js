var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function() {

  },
  //array of message received from server
  /* {
    username:
    text:
    roomName:
  }
  */
  renderMessage: function(messagesArr) {
    //var html = "";
    for (var i = 0; i < messagesArr.length; i++) {
      if (messagesArr[i].username !== undefined) {
        var html = MessageView.render(messagesArr[i]);
        $('#chats').append(html);
      }
    }
    //$('#chats').append(html);


      /*
      var msg = messagesArr[i];
      var user = msg.username;
      var text = msg.text;
      var roomName = msg.roomname;
      var message = `<div>${user}: ${text}</div>`;
      */

      /*var i, html = "";
      for (i = 0; i < data.movies.length; i++) {
        html += compiled(data.movies[i]);
      }  
      $("#movies").append(html);*/
  }


};