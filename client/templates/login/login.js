Template.login.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var user = $(e.target).find('[name=username]').val();
    var pass = $(e.target).find('[name=password]').val();

    return Meteor.loginWithPassword(user, pass, function(error) {
      if (error) {
        var e = $.notify(error, {
          type: 'danger',
          animate: {
            enter: 'animated bounceInDown',
            exit: 'animated bounceOutUp'
          }
        });

        return;
      }

      var s = $.notify('Logged in successfully', {
        type: 'success',
        animate: {
          enter: 'animated bounceInDown',
          exit: 'animated bounceOutUp'
        }
      });

      Router.go('home');
    });
  }
});
