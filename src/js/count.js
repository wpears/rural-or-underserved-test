var $ = require('jquery');
var generateCSV = require('./generateCSV.js');

module.exports = function() {
    var counters = {};

    counters.reset = function() {
        $('.counter').html('0');
    }

    counters.updateAddressCount = function(number) {
        $('#addressCount').text(number);
    }

    counters.updateCount = function(type) {
      var noun = 'addresses';
      var verb = 'are';

      // add one to correct type
      var typeCount = parseInt($('a.' + type + 'Cnt').text(), 10);
      typeCount++;
      $('.' + type + 'Cnt').text(typeCount);

      if(typeCount === 1) {
        noun = 'address';
        verb = 'is'
      }

      $('.' + type + 'Verb').text(verb);

      $('.' + type + 'Case').text(noun + ' ' + verb);

      // add one to the total
      var totalCount = parseInt($('#totalCnt').text(), 10);
      totalCount++;
      $('#totalCnt').text(totalCount);

      // hide spinner
      if ($('#totalCnt').text() === $('#addressCount').text()) {
        var link = $('#download');
        var theCSV = generateCSV();
        var blob = new Blob([theCSV], {type: 'text/csv;charset=utf-8,'});
        var blobURL = URL.createObjectURL(blob);
        link.setAttribute('href', blobURL);

        $('#spinner').addClass('hide');
        link.removeClass('hide');
        $('#print').removeClass('hide');
      }
    }

    return counters;
}();
