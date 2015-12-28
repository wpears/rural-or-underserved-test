var $ = require('jquery');

function generateCSV() {
  var theCSV = '';
  var date = new Date();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  theCSV = 'Address entered, Address identified, County, Rural or underserved?, Date processed' + '\n';

  // loop through each row
  $('.table tbody tr td').each(function () {
    // add a data row
    if (!$(this).parents('.js-table').hasClass('hide')) { // if table isn't hidden (!)
      if(!$(this).attr('colspan')) { // map cols have colspan and we don't want those
        var thisString = $(this).text().replace('Show map', '');
        theCSV = theCSV + ('"' + thisString + '"'); // put the content in first

        if ($(this).is(':last-child')) {
          theCSV = theCSV + ',' + monthIndex + '/' + day + '/' + year + '\n';
        } else {
          theCSV = theCSV + ',';
        }
      }
    }
  });

  return theCSV;
}

module.exports = generateCSV;
