export function dodge(){
    let probability = Math.random()*(100-0)
    if (probability<=20){
        probability = true
    }else{ probability = false}
    return probability
}