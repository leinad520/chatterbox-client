var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function() {
    
    
  /*
    for (var i = 0; i < messagesArr.length; i++) {
      if (messagesArr[i].username !== undefined) {
        renderMessage(messagesArr[i]);
      }
    }*/

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
  
      var username = messagesArr[i].username;
      var text = messagesArr[i].text;
      if (username !== undefined && text !== undefined ) {
        var html = MessageView.render(messagesArr[i]);
        $('#chats').append(html);
      }
    }
  }


};