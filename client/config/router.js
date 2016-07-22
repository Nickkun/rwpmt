FlowRouter.route('/', {
  name : 'home',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "welcome"});
  }
});

FlowRouter.route('/dashboard', {
  name : 'dashboard',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "dashboard"});
  }
});

FlowRouter.route('/dashboard2', {
  name : 'dashboard2',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "dashboard2"});
  }
});

FlowRouter.route('/compare', {
  name : 'compare',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "compare"});
  }
});

// FlowRouter.route('/resource', {
//   name : 'resource',
//   action : function(params) {
//     BlazeLayout.render("mainLayout", {content : "resource"});
//   }
// });

var resourceRouter = FlowRouter.group({
  prefix: '/resource',
  name: 'resource',
  triggersEnter: [function(context, redirect) {
    //console.log('running group triggers');
  }]
});

// handling /admin route
resourceRouter.route('/', {
  name : 'companys',
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'companys'});
  },
  triggersEnter: [function(context, redirect) {
    //console.log('running /admin trigger');
  }]
});

// handling /admin/posts
resourceRouter.route('/users', {
  name : 'users',
  action: function() {
    BlazeLayout.render('mainLayout', {content: 'users'});
  }
});

FlowRouter.route('/wowtalk', {
  name : 'wowtalk',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "wowtalk"});
  }
});

FlowRouter.route('/beta', {
  name : 'beta',
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "beta"});
  }
});
