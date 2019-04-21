var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    //const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('myParam');
    
    
    var msg = $('input#message').val();
    //roomName get current selected roomname
    var roomname = $('#rooms select option:selected').val();
 
    var username = App.username;
    
  

    var messages = {
      username: username,
      text: msg,
      roomname: roomname
    };
    
    $('input#message').val('');
    App.startSpinner();
    Parse.create(messages, App.fetch);
    App.stopSpinner();
    //$('input#message').val() = '';
    
    App.roomname = roomname;


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};