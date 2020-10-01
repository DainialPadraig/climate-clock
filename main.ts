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
let current_hour = 0
let current_date = 0
let current_minutes = 0
let current_month = 0
let current_year = 0
let current_budget = 0
let START_BUDGET = 0
let TONS_PER_SECOND = 0
let START_MONTH = 12
let START_DATE = 31
let START_HOURS = 17
let START_MINUTES = 0
TONS_PER_SECOND = 1331
let TONS_PER_MINUTE = TONS_PER_SECOND * 60
START_BUDGET = 420000000000
current_budget = START_BUDGET
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
