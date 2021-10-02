// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Parse.create(message);

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

var message = {
  username: 'dripGod the Absolute',
  text:
  '<iframe title=\'YouTube video player\' type=\"text/html\" width=\'640\' height=\'390 src=\'https://www.youtube.com/watch?v=8-NcrRzH0vA\'frameborder=\'0\' allowFullScreen></iframe>',
  roomname: 'heavens drip'
};