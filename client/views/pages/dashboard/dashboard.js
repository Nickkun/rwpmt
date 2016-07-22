Template.dashboard.onRendered(function() {
  var barData = {
    labels: ["유진의약품", "골드팜", "서진메디팜", "케이에스씨팜", "활안약품", "에프에스팜"],
    datasets: [
      {
        label: "품목수",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55]
      },
      {
        label: "주문수",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.8)",
        highlightFill: "rgba(26,179,148,0.75)",
        highlightStroke: "rgba(26,179,148,1)",
        data: [28, 48, 40, 19, 86, 27]
      }
    ]
  };

  var barOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    responsive: true,
  }


  var ctx = document.getElementById("barChart").getContext("2d");
  var myNewChart = new Chart(ctx).Bar(barData, barOptions);
});

Template.dashboard.events({
  'click .collapse-link': function (event) {
    var element = $(event.target);
    var ibox = element.closest('div.ibox');
    var button = element.closest("i");
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  },

  'click .close-link': function (event) {
    var element = $(event.target);
    var content = element.closest('div.ibox');
    content.remove();

  },

  'click .fullscreen-link': function (event) {
    var element = $(event.target);
    var ibox = element.closest('div.ibox');
    var button = element.closest("i");
    $('body').toggleClass('fullscreen-ibox-mode');
    button.toggleClass('fa-expand').toggleClass('fa-compress');
    ibox.toggleClass('fullscreen');
    setTimeout(function() {
      $(window).trigger('resize');
    }, 100);

  }
});
