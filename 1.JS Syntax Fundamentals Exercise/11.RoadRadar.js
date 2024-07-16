function RoadRadar(currentSpeed, zone) {
    let speedLimit = -1;
    let isSpeeding = false;
    let status = '';

    let output = '';

    switch (zone) {
        case 'motorway':
            speedLimit = 130;
            isSpeeding = IsSpeeding(speedLimit, currentSpeed);
            output = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`

            if (isSpeeding) {
                const difference = currentSpeed - speedLimit;
                status = GetSpeedingStatus(difference);
                output = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case 'interstate':
            speedLimit = 90;
            isSpeeding = IsSpeeding(speedLimit, currentSpeed);
            output = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`

            if (isSpeeding) {
                const difference = currentSpeed - speedLimit;
                status = GetSpeedingStatus(difference);
                output = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case 'city':
            speedLimit = 50;
            isSpeeding = IsSpeeding(speedLimit, currentSpeed);
            output = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`

            if (isSpeeding) {
                const difference = currentSpeed - speedLimit;
                status = GetSpeedingStatus(difference);
                output = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case 'residential':
            speedLimit = 20;
            isSpeeding = IsSpeeding(speedLimit, currentSpeed);
            output = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`

            if (isSpeeding) {
                const difference = currentSpeed - speedLimit;
                status = GetSpeedingStatus(difference);
                output = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;

        default:
            console.log('invalid arguments passed!!!');
            break;
    }

    console.log(output);

    function IsSpeeding(speedLimit, currentSpeed) {
        return currentSpeed > speedLimit;
    }

    function GetSpeedingStatus(difference) {
        let status = 'No Status';
        if (difference > 40) {
            status = 'reckless driving';
        } else if (difference > 20) {
            status = 'excessive speeding'
        } else {
            status = 'speeding'
        }

        return status;
    }
}

// Tests

RoadRadar(40, 'city');
RoadRadar(21, 'residential');
RoadRadar(120, 'interstate');
RoadRadar(200, 'motorway');
