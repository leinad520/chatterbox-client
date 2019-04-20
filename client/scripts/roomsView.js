var RoomsView = {

  $select: $('#rooms select'),
  $button: $('#rooms button'),

  initialize: function() {
    // handle adding new room
    RoomsView.$button.on('click', RoomsView.handleSubmit);
    
    
    //roomsviews handle the select when there is a change
    RoomsView.$select.on('change', RoomsView.changeRoom);
  },

  render: function() {
  },

  renderRoom: function() {
  //loops through all messages and find all the existing rooms. Puts those rooms into the Rooms object in rooms.js
  this.$select.empty();
  for (var i = 0; i<Messages.length; i++) {
    var message = Messages[i];
    //console.log(message);
    if (message.username && message.text && message.roomname) {
      if (!Rooms[message.roomname]) {
        Rooms[message.roomname] = 1;
      } else {
        Rooms[message.roomname]++;
      }
    }
  }
  console.log(Rooms); //{rooname: 1}
  //go through object room and add rooms to selected options
  for (let roomName in Rooms) {
    RoomsView.$select.append($('<option>', {value: roomName, text: roomName}));
  }
  
  //if selected option gets changed filter messsage with for room selected
  
  
    //$("#selectList").append(new Option("option text", "value"));
    // var addRoom = `<option value= ${roomName}>${roomName}</option>`;
    // $('#rooms select').append(addRoom);
  },

  handleSubmit: function(event) {

    var roomName = prompt('What\'s the room name?');
    RoomsView.$select.append($('<option>', {
      value: roomName,
      text: roomName
    }));


  },
  
  //create a handle select function that filters the message with room selected
  changeRoom: function() {
    var chosenRoom = $('#rooms select option:selected').val();
    $('#chats').empty();
    for (let i = 0; i < Messages.length; i++) {
      var message = Messages[i];
      if (message.username && message.text && message.roomname === chosenRoom) {
        var html = MessageView.render(message);
        $('#chats').append(html);
    }
  }
},
  

};
