var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  roomname: 'No room',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages = data.results;
      // let temp = $('#rooms select option:selected').val();
      RoomsView.renderRoom();  
      // $('#rooms select option:selected').change(temp);   
      //pass array of message to renderMessage
      MessagesView.renderMessage(Messages);
      //pass in message array to roomsview and create all rooms 

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
