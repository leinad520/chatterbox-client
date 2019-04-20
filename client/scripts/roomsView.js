var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleSubmit);
    
    //roomsviews handle the select when there is a change
  },

  render: function() {
  },

  renderRoom: function(roomName) {
  //create an object that stores room
  
  
  
  
  //loops through all messages and find all the existing rooms
  
  //go through object room and add rooms to selected options
  
  
  //if selected option gets changed filter messsage with for room selected
  
  
    //$("#selectList").append(new Option("option text", "value"));
    var addRoom = `<option value= ${roomName}>${roomName}</option>`;
    $('#rooms select').append(addRoom);
  },

  handleSubmit: function(event) {

    var roomName = prompt('What\'s the room name?');
    $select.append($('<option>', {
      value: roomName,
      text: roomName
    }));


  },
  
  //create a handle select function that filters the message with room selected
  
  

};
