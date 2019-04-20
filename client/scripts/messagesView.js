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
    for (var i = 0; i<10; i++) {
      
      var msg = messagesArr[i];
      var user = msg.username;
      var text = msg.text;
      var roomName = msg.roomname;
      var message = `<div>${user}: ${text}</div>`;
      //html += MessageView.render(messagesArr[i]);
      $('#chats').append(message);
    }
  }


};