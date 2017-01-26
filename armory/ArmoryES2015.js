class Armory {
  constructor() {
    this.weapons = [];
  }
  addWeapon(w) {
    this.weapons.push(w);
    return this.weapons;
  }
  removeWeapon(w) {
    const weaponIndex = weaponIndex.indexOf(w);
    this.weapons.splice(weaponIndex, 1);
    return this.weapons;
  }
  inventory() {
    return this.weapons;
  }
}