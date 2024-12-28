radio.onReceivedNumber(function (receivedNumber) {
    Vitesse += vitesse_increment
    direction_moteur = receivedNumber
})
let direction_moteur = 0
let Vitesse = 0
let vitesse_increment = 0
radio.setGroup(1)
vitesse_increment = 50
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (direction_moteur == 0) {
        wuKong.stopAllMotor()
    }
    if (direction_moteur == 1) {
        wuKong.setAllMotor(Vitesse, Vitesse)
    }
    if (direction_moteur == 1) {
        wuKong.setAllMotor(0 - Vitesse, 0 - Vitesse)
    }
})
