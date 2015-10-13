Template.header.helpers({
  loggedIn: function() {
    return Meteor.user() !== null;
  },

  displayName: function() {
    if (Meteor.user())
      return Meteor.user().username;
    return '';
  }
});
