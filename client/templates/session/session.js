Template.session.helpers({
  loggedIn: function() {
    return Meteor.user() !== null;
  },

  hasSpeaker: function() {
    return this.speaker !== null;
  }
});

Template.session.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var comment = $(e.target).find('[name=comment]').val();

    console.log(this._id);

    Comments.insert({
      time: new Date(),
      owner: Meteor.user().username,
      text: comment,
      session: this._id
    });

    $(e.target).find('[name=comment]').val('');
  }
});
