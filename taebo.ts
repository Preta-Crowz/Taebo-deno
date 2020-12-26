export function taebo(seconds:number, callback:Function):void{
    const taeboFrames = [
      '@=====(^0^)@',
      '@====(^0^)=@',
      '@===(^0^)==@',
      '@==(^0^)===@',
      '@=(^0^)====@',
      '@(^0^)=====@',
      '@=(^0^)====@',
      '@==(^0^)===@',
      '@===(^0^)==@',
      '@====(^0^)=@'
    ];
    let currentFrame:number = -1;
    let currentSecond:number = 0;
    const taeboTimer = setInterval(() => {
        if(currentSecond >= seconds){
            (callback || console.log)("절 대 태 보 해");
            clearInterval(taeboTimer);
            return;
        }
        currentSecond = currentSecond + 0.1;
        currentFrame = (currentFrame+1) % taeboFrames.length;
        (callback || console.log)(taeboFrames[currentFrame]);
    }, 100);
}