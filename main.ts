function updateBudget () {
    current_budget += 0 - TONS_PER_SECOND * 27
}
function getCurrentYear () {
    basic.showString("Enter year (A/B)")
    current_year = 18
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(current_year)
        if (input.buttonIsPressed(Button.A)) {
            current_year += -1
            if (current_year < 18) {
                current_year = 50
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            current_year += 1
            if (current_year > 50) {
                current_year = 18
            }
        }
    }
}
function getCurrentMonth () {
    basic.showString("Enter month (A/B)")
    current_month = 1
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(current_month)
        if (input.buttonIsPressed(Button.A)) {
            current_month += -1
            if (current_month < 1) {
                current_month = 12
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            current_month += 1
            if (current_month > 12) {
                current_month = 1
            }
        }
    }
}
function getCurrentMinutes () {
    basic.showString("Enter minutes (A/B)")
    current_minutes = 0
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(current_minutes)
        if (input.buttonIsPressed(Button.A)) {
            current_minutes += -1
            if (current_minutes < 0) {
                current_minutes = 59
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            current_minutes += 1
            if (current_minutes > 59) {
                current_minutes = 0
            }
        }
    }
}
function calculateCurrentBudget () {
    current_budget = START_BUDGET
    years_since_start = current_year - START_YEAR
    days_since_start = years_since_start * 365
    days_since_start += Math.trunc(years_since_start / 4)
    days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (current_month > 2) {
        for (let index = 0; index <= current_month - 2; index++) {
            days_since_start += days_per_month[index]
        }
    } else {
        if (current_month == 2) {
            days_since_start += days_per_month[0]
        }
    }
    days_since_start += current_date - 1
    hours_since_start = days_since_start * 24
    hours_since_start += current_hour
    hours_since_start += -7
    minutes_since_start = hours_since_start * 60
    minutes_since_start += current_minutes
    seconds_since_start = minutes_since_start * 60
    if (seconds_since_start < 0) {
        seconds_since_start = 0
    }
    current_budget += 0 - seconds_since_start * TONS_PER_SECOND
}
function getCurrentDate () {
    basic.showString("Enter date (A/B)")
    current_date = 1
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(current_date)
        if (input.buttonIsPressed(Button.A)) {
            current_date += -1
            if (current_date < 1) {
                current_date = 31
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            current_date += 1
            if (current_date > 31) {
                current_date = 1
            }
        }
    }
}
function getCurrentHour () {
    basic.showString("Enter hour (A/B)")
    current_hour = 0
    while (!(input.buttonIsPressed(Button.AB))) {
        basic.showNumber(current_hour)
        if (input.buttonIsPressed(Button.A)) {
            current_hour += -1
            if (current_hour < 0) {
                current_hour = 23
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            current_hour += 1
            if (current_hour > 23) {
                current_hour = 0
            }
        }
    }
}
let seconds_since_start = 0
let minutes_since_start = 0
let current_hour = 0
let hours_since_start = 0
let current_date = 0
let days_per_month: number[] = []
let days_since_start = 0
let years_since_start = 0
let current_minutes = 0
let current_month = 0
let current_year = 0
let current_budget = 0
let START_BUDGET = 0
let TONS_PER_SECOND = 0
let START_YEAR = 0
let START_MONTH = 1
let START_DATE = 1
START_YEAR = 18
let START_HOURS = 0
let START_MINUTES = 0
TONS_PER_SECOND = 1331
START_BUDGET = 420000000000
getCurrentMonth()
getCurrentDate()
getCurrentYear()
getCurrentHour()
getCurrentMinutes()
calculateCurrentBudget()
basic.forever(function () {
    basic.showString("Carbon budget: ")
    basic.showNumber(current_budget)
    updateBudget()
})
