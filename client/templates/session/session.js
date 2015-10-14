Template.session.created = function() {
  Session.set('currTime', new Date());

  this.handle = Meteor.setInterval(function() {
    return Session.set('currTime', new Date());
  }, 1000);
};

Template.session.detroyed = function() {
  Session.set('currTime', null);
  Meteor.clearInterval(this.handle);
};

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

    var notify = $.notify('Comment added successfully', {
      type: 'success',
      animate: {
        enter: 'animated bounceInDown',
        exit: 'animated bounceOutUp'
      }
    });
  }
});
