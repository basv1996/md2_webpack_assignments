// helper functions for conditions
// geef je functies goede comments :)

/**
 * Check if target exists
 * @param target
 * @returns {boolean}
 */
const existy = target => {
    return target != null
};

/**
 * Check if the condition is truthy
 * @param condition
 * @returns {boolean}
 */
const truthy = condition => {
    return (condition !== false) && existy(condition)
};

export { existy, truthy };