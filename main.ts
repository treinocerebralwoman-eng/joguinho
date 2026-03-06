let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (hand == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
