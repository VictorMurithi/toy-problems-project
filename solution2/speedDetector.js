// defining the function that calculates speed and demerit points 
function SpeedGun(speed){
    // defining speed 
        const kiloMetersPerHour = speed;
    //using if ,else-if conditions for determining the demerit points
        if(kiloMetersPerHour<70){
            return "OK"
        }else if (kiloMetersPerHour>70){
                const speedLimit = 70 ;
                const kmsPerPoint = 5 ;
                //calculating the speed over the limit 
                const speedOver = speed -speedLimit ;
                //calculating the total points over the speed limit
                const totalPoints =  Math.floor(speedOver/kmsPerPoint);
                //nested if , else-if condition inside the other condition
                if (speed <= speedLimit+4){
                    return "no demerit points"
                }else if (totalPoints>12){
                    return "License suspended";
                }else{
                    return totalPoints;
                }
            }
        }

module.exports = SpeedGun ;

    