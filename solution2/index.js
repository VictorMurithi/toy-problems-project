function SpeedGun (speed){

    const kiloMetersPerHour = speed;

    if(kiloMetersPerHour<70){
        return "OK"
    }else if (kiloMetersPerHour>70){
            const speedLimit = 70 ;
            const kmsPerPoint = 5 ;
            const speedOver = speed -speedLimit ;
            const totalPoints =  Math.floor(speedOver/kmsPerPoint);
            if (speed <= speedLimit+4){
                return "no demerit points"
            }else if (totalPoints>12){
                return "License suspended";
            }else{
                return totalPoints;
            }
        }
    }
const speed = 200;
const totalDemeritPoints = SpeedGun(speed);
console.log(totalDemeritPoints);