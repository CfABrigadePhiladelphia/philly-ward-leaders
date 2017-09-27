import ordinal from 'ordinal'

export function formatNumber (value) {
  if (!value) return ''
  const numericValue = parseInt(value, 10)
  return numericValue.toLocaleString()
}

export function ordinalize (value) {
  if (!value) return ''
  const numericValue = parseInt(value, 10)
  return ordinal(numericValue)
}

export function slugify (value) {
  return value.toString().toLowerCase().trim()
    .replace(/[^a-zA-Z0-9]/g, '-')  // Replace non-alphanumeric chars with -
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^\-|\-$/i, '')        // Remove leading/trailing hyphen
}

export function eventsBinder (vueElement, leaflet, events) {
  for (var i = 0; i < events.length; i++) {
    const exposedName = 'l-' + events[i]
    const eventName = events[i]
    leaflet.on(eventName, (ev) => {
      vueElement.$emit(exposedName, ev)
    })
  }
}
