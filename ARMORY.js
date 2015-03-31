var ARMORY =  (function () {
	// Private
	var swordList = ["Eclipse", "Lightning", "Deathraze", "Silent Carver", "Vicious Skewer", "Lightbringer", "Vengeful Bronze Slicer"];
	var axeList = ["Bloodweep", "Shadow Strike", "Nethersbane", "Improved War Axe", "Wind's Ravager", "Spectral-Forged Bronzed Crescent", "Faithkeeper"];

	var removeWeapon = function (weapon, type) {
    var list;
    if (type === "sword") {  list = swordList; }
    if (type === "axe") { list = axeList; }
    
    if (list) {
      var weaponIdx = list.indexOf(weapon);
      if (weaponIdx >= 0) {
        return list.splice(weaponIdx, 1);
      } else {
        throw new armoryException(weapon);
      }
    } else {
      throw new armoryException(list);
    }
	};

	var addSword = function (weapon) {
		swordList.push(weapon);
		return swordList;
	};

	var addAxe = function (weapon) {
		axeList.push(weapon);
		return axeList;
	};

  var armoryException = function (value) {
    this.value = value;
    this.message = "does not exist.";
    this.toString = function() {
      return this.value + " " + this.message;
    };
  };

	return {
		requestSword: function (weapon) {
			try {
        return removeWeapon(weapon, "sword");
      } catch (e) {
        if (e instanceof armoryException) {
          throw e.toString();
        }
      }
		},
		requestAxe: function (weapon) {
			try {
        return removeWeapon(weapon, "axe");
      } catch (e) {
        if (e instanceof armoryException) {
          throw e.toString();
        }
      }
		},
		addSword: function (weapon) {
			return addSword(weapon);
		},
		addAxe: function (weapon) {
			return addAxe(weapon);
		},
		inventory: function (list) {
			switch (list) {
				case "sword":
					console.log(swordList);
					break;
				case "axe":
					console.log(axeList);
					break;
				default: 
					console.log("swordList\n");
					console.log(swordList);
					console.log("axeList\n");
					console.log(axeList);
			}
		}
	};
})();
