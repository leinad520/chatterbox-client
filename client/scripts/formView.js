var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //console.log($('input#message').val());
    var location = window.location.search;
    console.log(location);
    var msg = $('input#message').val();
    const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('myParam');

    var Messages = {
      username: urlParams.get('username'),
      text: msg,
      roomname: '4chan'
  
    };
    Parse.create(Messages);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};