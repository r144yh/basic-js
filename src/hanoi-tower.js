module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const hour = 3600;
  const turns = Math.pow(2,disksNumber) - 1;
  const time = Math.floor(turns * hour/turnsSpeed);

  return {'turns': turns, 'seconds': time}
};
