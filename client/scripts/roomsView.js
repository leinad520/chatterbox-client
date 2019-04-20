var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleSubmit);
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    // 
    /*
    RoomsView.renderRoom('superLobby');
      expect($('#rooms select').children().length).to.equal(1);
    */
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

};
