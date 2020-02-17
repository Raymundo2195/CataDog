/*
*  Given an object and an array of possibleKeys
*  returns an array of the possibleKeys that are in the object.
*  If no possibleKeys are provided the all keys in the object are returned.
*/

export const getFilteredKeys = (obj = {}, possibleKeys = []) => {
  if (possibleKeys.length === 0) return Object.keys(obj)

  const availableKeys = []
  possibleKeys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      availableKeys.push(key)
    }
  })

  return availableKeys
}
