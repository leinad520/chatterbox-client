var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function() {
    
    
    $('#chats').empty();
    for (let i = 0; i < Messages.length; i++) {
      var message = Messages[i];
      if (message.username && message.text && message.roomname === roomname ) {
        var html = MessageView.render(message);
        $('#chats').append(html);
    }
  }
    
    
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
    var chosenRoom = $('#rooms select option:selected').val();
    $('#chats').empty();
    for (var i = 0; i < messagesArr.length; i++) {
  
      var username = messagesArr[i].username;
      var text = messagesArr[i].text;
      var roomname = messagesArr[i].roomname;
      if (username && text && roomname === chosenRoom) {
        var html = MessageView.render(messagesArr[i]);
        $('#chats').append(html);
      }
    }
  }


};