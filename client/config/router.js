FlowRouter.route('/', {
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "pageOne"});
  }
});

FlowRouter.route('/pageOne', {
  action : function(params) {
    BlazeLayout.render("mainLayout", {content : "pageOne"});
  }
});
