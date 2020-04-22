const months = {
    "01" : "January",
    "02" : "February",
    "03" : "March",
    "04" : "April",
    "05" : "May",
    "06" : "June",
    "07" : "July",
    "08" : "August",
    "09" : "September",
    "10" : "October",
    "11" : "November",
    "12" : "December",
}

export const DateFormat = function(dateString){
    const splitDate = dateString.split('-')

    const year = splitDate[0]
    const month = splitDate[1]
    const day = splitDate[2]

    const formattedDate = `${months[month]}, ${day}, ${year}`

    return formattedDate
}

export const TimeFormat = function(timeString){
    const splitTime = timeString.split(':')
    const hrs = splitTime[0].split(' ')[1]
    const min = splitTime[1]

    let unit
    if(hrs >= 12)
        unit = 'PM'
    else
        unit = 'AM'
    
    const time1 = `${hrs}:${min} ${unit}`
    
    return time1
}