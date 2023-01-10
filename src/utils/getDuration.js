export default (durationInSeconds) => {
    if (durationInSeconds === undefined) return '00:00';

    let sec = durationInSeconds;

    let min = Math.floor(sec / 60);
    sec = sec % 60;

    let hour = Math.floor(min / 60);
    min = min % 60;
    
    if(sec.toString().length == 1) sec = `0${sec}`;
    if(min.toString().length == 1) min = `0${min}`;
    if(hour.toString().length == 1) hour = `0${hour}`;

    if(hour < 1) return `${min}:${sec}`;
    return `${hour}:${min}:${sec}`;
}