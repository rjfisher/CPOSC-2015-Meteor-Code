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
        console.log('error!');
      }
      Router.go('home');
    });
  }
});
