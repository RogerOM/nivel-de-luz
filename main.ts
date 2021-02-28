basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
