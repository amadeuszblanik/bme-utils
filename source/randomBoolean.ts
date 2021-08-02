const DEFAULT_TRUE_CHANGE = 0.5;

export default (trueChance = DEFAULT_TRUE_CHANGE): boolean => Math.random() <= trueChance;
