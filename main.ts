let TemperatureInput = 0
function roundToDecimal (inputTemperature: number) {
    TemperatureInput = inputTemperature
    basic.showString("f=")
    basic.showString("" + (TemperatureInput))
}
basic.forever(function () {
    TemperatureInput = 23.56
    basic.showString("" + (TemperatureInput))
    roundToDecimal(TemperatureInput)
    TemperatureInput += 1
})
