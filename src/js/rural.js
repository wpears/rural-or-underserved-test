function _fipsCheck(fips, fipsCode) {
  var isCounty = false;

  $.each(fips.fips, function(key, val) {
    // if result is in fips its rural
    // stop, no need to continue
    if (val[0] === fipsCode) {
      isCounty = true
    }
  });

  return isCounty;
}

function _urbanCheck(urbanClusters, urbanAreas) {
  if ((urbanClusters === null || urbanClusters.length === 0) && (urbanAreas === null || urbanAreas.length === 0)) {
    return true;
  } else {
    return false;
  }
}

module.exports = function (fips, fipsCode, urbanAreas, urbanClusters) {
  var checkRural = false;

  checkRural = _fipsCheck(fips, fipsCode);

  if (checkRural === false) {
    checkRural = _urbanCheck(urbanAreas, urbanClusters);
  }

  return checkRural;
};