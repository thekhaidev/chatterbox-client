// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  // RoomsView.$select.val(roomList);
  },

  render: function(data) {

    var roomList = [];
    // TODO: Render out the list of rooms.
    for (var i = 0; i < data.length; i++) {
      var roomName = data[i].roomname;
      if (!roomList.includes(roomName) && roomName) {
        roomList.push(roomName);

      }
    }
    RoomsView.$select.empty();


    for (var j = 0; j < roomList.length; j++) {
      var individualRoom = roomList[j];


      var $rooms = $('<option>').val(individualRoom).text(individualRoom);
      RoomsView.$select.append($rooms);

    }
    // console.log(roomList);
    console.log($rooms);
    // console.log(data[0].roomname);

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
