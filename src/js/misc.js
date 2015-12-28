var $ = require('jquery');
var contentControl = require('./contentControl');
var count = require('./count');
var textInputs = require('./textInputs');
var fileInput = require('./fileInput');
var generateCSV = require('./generateCSV.js');
var detectIE = require('./detectIE.js');

$(function(){
  // add inputs
  $('#add-another').on('click', function(e) {
    e.preventDefault();
    textInputs.add();
  });

  // input blur
  $('.input-address').on('blur', function(e) {
    textInputs.toggleError(e);
  });

  // show more rows
  $('.button-more').click(function(e) {
    e.preventDefault();
    var table = $(this).data('table');
    var lengthTotal = $('#' + table + ' tbody tr.data').length;
    var lengthShown = $('#' + table + ' tbody tr.data').not('.hide').length;

    for (i = lengthShown; i < lengthShown + 10; i++) {
      $('#' + table + ' tbody tr.data').eq(i).removeClass('hide');
    }

    if (lengthShown + 10 >= lengthTotal) {
      $('#' + table + 'More').addClass('hide');
      $('#' + table + 'All').addClass('hide');
    }
  });

  $('.view-all').click(function(e) {
    e.preventDefault();
    var table = $(this).data('table');
    $('#' + table + ' tbody tr.data').removeClass('hide');
    $('#' + table + 'More').addClass('hide');
    $('#' + table + 'All').addClass('hide');
  })

  // print
  $('#print').click(function() {
    window.print();
  });


  $('#download').click(function(e) {
    if (detectIE()) {
      e.preventDefault();
      var theCSV = generateCSV();
      var blob = new Blob([theCSV], {type: 'text/csv;charset=utf-8,'});
      navigator.msSaveOrOpenBlob(blob, 'rural-or-underserved.csv');
    }
  });

});
