var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //console.log($('input#message').val());

    var Messages = {
      username: 'troll',
      text: 'can\'t touch me dananana',
      roomname: '4chan'
  
  };
    Parse.create(Messages);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};