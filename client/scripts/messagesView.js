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
  }


};