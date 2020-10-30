const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity))) return false
  let numberAct = Number(sampleActivity);
  if (numberAct > MODERN_ACTIVITY || numberAct < 1) return false

  let activity = MODERN_ACTIVITY / numberAct;
  let reaction = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(activity/reaction);
};
