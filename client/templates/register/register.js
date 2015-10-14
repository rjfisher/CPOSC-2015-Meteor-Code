Template.register.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var user = $(e.target).find('[name=username]').val();
    var pass = $(e.target).find('[name=password]').val();

    return Accounts.createUser({
      username: user,
      email: user,
      password: pass
    }, function(error) {
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

      var s = $.notify('Welcome to the CPOSC site!', {
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
