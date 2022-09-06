export const isPrimitive = (json) => {
  return json === null || typeof json === "string" || typeof json === "number"
}

export const isObject = (json) => {
  return json !== null && typeof json === "object" && !Array.isArray(json)
}

export const containsNull = (json) => {
  if (Array.isArray(json)) {
    return json.some(containsNull)
  }

  if (isPrimitive(json)) {
    return json === null
  }

  if (isObject(json)) {
    const keys = Object.keys(json)
    return keys.some((key) => {
      const subJson = json[key]
      return containsNull(subJson)
    })
  }

  throw new Error("Unexpected input")
}
