Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFound: 'notFound'
});

Router.route('/register', {
  name: 'register'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/logout', {
  name: 'logout',
  action: function() {
    if (Meteor.user() !== null) {
      Meteor.logout(function() {
        Router.go('home');
      });
    }
    Router.go('home');
  }
});

Router.route('/sessions/:_id', {
  name: 'session',
  data: function() {
    return Sessions.findOne(this.params._id);
  }
});

Router.route('/sessions', {
  name: 'sessionList'
});

Router.route('/', {
  name: 'home'
});
