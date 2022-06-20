import { DATE_UNITS, MONTHS_LIST } from '@/shared/constants'

export function useTime() {
  /** @param {number} timestamp */
  const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

  /** @param {number} secondsElapsed */
  const getUnitAndValueDate = (secondsElapsed) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }
    return { value: 1, unit: 'second' }
  }

  /** @param {number} timestamp */
  const getTimeAgo = (timestamp) => {
    const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' })
    const secondsElapsed = getSecondsDiff(timestamp)
    const { value, unit } = getUnitAndValueDate(secondsElapsed)
    const notOneDayHasPassed = unit === 'second' || unit === 'minute' || unit === 'hour'

    if (notOneDayHasPassed) {
      const semiLongFormat = rtf.format(value, unit)
      const [valueStr, unitAbbr] = semiLongFormat.split(' ')
      return valueStr + unitAbbr[0]
    }

    const date = new Date(timestamp)
    const possibleYear = date.getFullYear() < new Date().getFullYear() ? `, ${date.getFullYear()}` : ''
    return `${MONTHS_LIST[date.getMonth()]} ${date.getDate()}${possibleYear}`
  }

  return { getTimeAgo }
}
