var ARMORY = (function () {
  var weaponList = [];

  var addWeapon = function (weapon) {
    weaponList.push(weapon);
    return weaponList;
  };

  var removeWeapon = function (weapon) {
    var weaponIndex = weaponIndex.indexOf(weapon);
    weaponList.splice(weaponIndex, 1);
    return weaponList;
  };

  var inventory = function () {
    return weaponList;
  };

  return {
    addWeapon: addWeapon,
    removeWeapon: removeWeapon,
    inventory: inventory()
  };
})();

module.exports = ARMORY;
