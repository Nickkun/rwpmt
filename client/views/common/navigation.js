Template.navigation.onRendered(function() {
  // Initialize metisMenu
  $('#side-menu').metisMenu();
});

Template.navigation.helpers({
  isRole : function(roles = []) {
    // 로그인한 사용자의 등급을 조회하고
    // 입력한 Role에 해당하는지 여부를 파악
  }
});

// Used only on OffCanvas layout
Template.navigation.events({
  'click .close-canvas-menu' : function(){
    $('body').toggleClass("mini-navbar");
  }
});
