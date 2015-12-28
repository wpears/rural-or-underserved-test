var $ = require('jquery');
var contentControl = require('./contentControl');
var count = require('./count');
var textInputs = require('./textInputs');
var fileInput = require('./fileInput');

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

  // csv download
  function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }
/*
  $('#download').click(function(e) {
    e.preventDefault();
    var theCSV = generateCSV();
    var blob = new Blob([theCSV], {type: 'text/csv;charset=utf-8,'});
    if (detectIE() === false) {
      var element = document.createElement('a');
      var blobURL = window.URL.createObjectURL(blob);
      element.setAttribute('download', 'rural-or-underserved.csv');
      element.setAttribute('href', blobURL);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);  window.open('data:text/csv;charset=utf-8,' + encodeURIComponent(theCSV));
    } else {
        var blob = new Blob([theCSV], {type: 'text/csv;charset=utf-8,'});
        navigator.msSaveOrOpenBlob(blob, 'rural-or-underserved.csv');
    }
  });
*/

});
