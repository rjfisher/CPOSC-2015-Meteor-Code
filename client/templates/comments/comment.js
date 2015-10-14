Template.comment.helpers({
  textcolor: function() {
    var m = Session.get('currTime') ? Session.get('currTime') : moment();

    if (moment(m).diff(this.time, 'm') < 1)
      return 'badge-success';
    if (moment(m).diff(this.time, 'm') < 10)
      return 'badge-info';
    if (moment(m).diff(this.time, 'm') < 30)
      return 'badge-warning';
    if (moment(m).diff(this.time, 'm') >= 30)
      return 'badge-danger';
  },

  moment: function() {
    return moment(this.time).fromNow();
  }
});
