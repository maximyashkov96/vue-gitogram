export * as trendings from './rest/trendings'

export const convertDate = (date) => {
    const timestamp = Date.parse(date)
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return new Intl.DateTimeFormat('en-GB', options).format(timestamp)
}
