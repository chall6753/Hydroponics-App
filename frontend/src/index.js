import './style.scss'
import {camelCase} from 'lodash'

let sensorData =[]

const body = document.body
const table = document.createElement('table')
table.id = 'sensorData'

let row1 = document.createElement('tr')
let tblHeading1 = document.createElement('th')
tblHeading1.innerText = 'ID'
let tblHeading2 = document.createElement('th')
tblHeading2.innerText = 'Date-Time'
let tblHeading3 = document.createElement('th')
tblHeading3.innerText = `Temperature \xB0C`
let tblHeading4 = document.createElement('th')
tblHeading4.innerText = `Humidity %`
let tblHeading5 = document.createElement('th')
tblHeading5.innerText = `Water Temp \xB0C`
let tblHeading6 = document.createElement('th')
tblHeading6.innerText = `pH`
let tblHeading7 = document.createElement('th')
tblHeading7.innerText = `ec`



row1.appendChild(tblHeading1)
row1.appendChild(tblHeading2)
row1.appendChild(tblHeading3)
row1.appendChild(tblHeading4)
row1.appendChild(tblHeading5)
row1.appendChild(tblHeading6)
row1.appendChild(tblHeading7)
table.appendChild(row1)


fetch('http://localhost:3000/sensor_data')
.then(res=>res.json()).then(res => {sensorData = res}).then(() => {
    for (let i=0; i < sensorData.length; i++){
        let row = table.insertRow()
        row.insertCell().innerText = sensorData[i].id
        row.insertCell().innerText = sensorData[i].date
        row.insertCell().innerText = sensorData[i].temp_air
        row.insertCell().innerText = sensorData[i].humidity
        row.insertCell().innerText = sensorData[i].temp_water
        row.insertCell().innerText = sensorData[i].pH
        row.insertCell().innerText = sensorData[i].ec
        

    }
})







body.appendChild(table)