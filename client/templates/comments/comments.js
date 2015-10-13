Template.comments.helpers({
  comments: function() {
    return Comments.find({session: this._id}, {sort: {time: 1}});
  }
});
