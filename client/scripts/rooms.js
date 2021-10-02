// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  setRoomAs: function(messagesArray) {
    // for loop
    //
    // assign them to Rooms._data[roomname] = element
    console.log('messagesArray', messagesArray);
    for (var i = 0; i < messagesArray.length; i++) {
      Rooms._data[messagesArray[i].roomname] = messagesArray[i];
      console.log(messagesArray[i].roomname);
      console.log(Rooms._data);
    }
  },
  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  // simultaneously send them to data store and messagerender

  // data . roomname can be a specific store for message items in a value where the roomname is the key



};