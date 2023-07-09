// Your code here
function createEmployeeRecord (firstName, familyName, title, payPerHour){
    return{
        firstName: firstName, 
        familyName: familyName, 
        title: title, 
        payPerHour: PerHour, 
        timeInEvents:[],
        timeOutEvents:[]
    };
}
//createEmployeeRecords
function createEmployeeRecords(employeeData){
    return employeeData.map(function(data){
        return createEmployeeRecords(...data);
    })
}

//createTimeOutEvent

function createTimeOutEvent(employeeRecord, dataStamp){
    const [date, hour] = dataStamp.split("");
    employeeRecord.timeInEvents.push({
        type: "Timein",
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord
}

//hoursWorkedOnDate
function hoursWorkedOnDate(employeeRecord, date){
    const timeIn = employeeRecord.employeeRecord.timeInEvents.find(
        events => event.date === date
    );
    const timeOut = employeeRecord.createTimeOutEvent.find(
         events => event.date === date
    );
    return (timeOut.hour - timeIn.hour)/100;
}

//wagesEarnedOnDate
function wagesEarnedOnDate(employeeRecord, date){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;

    return hoursWorked * payRate;
}

//allWagesFor
function allWagesFor(employeeRecord){
    let totalWages = 0;
    for (const date in employeeRecord.hoursWorkedOnDate){
        totalWages += wagesEarnedOnDate(employeeRecord, date);
    }
    return totalWages;
}
//calculatePayroll
function calculatePayroll(employeeRecord){
    let totalPayRoll =  0;
    for(const employeeRecord of employeeRecord){
        totalPayRoll += allWagesFor(employeeRecord);
    }
    return totalPayRoll
}