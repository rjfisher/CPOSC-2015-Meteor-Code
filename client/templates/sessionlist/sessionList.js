Template.sessionList.helpers({
  sessions: function() {
    return Sessions.find({});
  }
});
