let waterHeight = 0;
let milkHeight = 0;
let waterAmount;
let time;
for(let i = 0; i < 3; i++){
    document.getElementById(`display`).innerHTML = `
    <div class="main_welcome" id="welcome">Welcome!</div>
    <div class="main_end" id="end">Yours coffe are ready!</div>
    <div class="main_row" id="row1">
        <button class="main_version" id="version1">Coffe</button>
        <button class="main_version"  id="version2">Coffe</button>
    </div>
    <div class="main_row" id="row2">
        <button class="main_version" id="version3">Coffe</button>
        <button class="main_version"  id="version4">Coffe</button>
    </div>
    `
}
class CoffeMachine{
    showMenu(){
        document.getElementById('welcome').style.display = 'flex';
        document.getElementById('end').style.display = 'none';
        setTimeout(() => {
            document.getElementById('welcome').style.opacity = 1;

        },800);
        setTimeout(() => {
            document.getElementById('welcome').style.opacity = 0;
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('row2').style.display = 'flex';
            document.getElementById('row1').style.display = 'flex';
        }, 2000);
    }
    addWater(){
        if(waterHeight < 450){
            waterHeight += 50;
            document.getElementById("water").style.height = waterHeight + 'px';
            console.log(waterHeight)
        }
        else{
            alert('tub of water are full')
        }
    }
    addMilk(){
        if(milkHeight < 450){
            milkHeight += 50;
            document.getElementById("milk").style.height = milkHeight + 'px';
            console.log(milkHeight)
        }
        else{
            alert('tub of milk are full')
        }
    }
    makeCoffe(){
        if(waterHeight > 0 && milkHeight > 0){
            waterHeight -= 50;
            milkHeight -= 50;
            waterAmount = 100;
            console.log('wateramount ' + waterAmount)
            document.getElementById("water").style.height = waterHeight + 'px';
            document.getElementById("milk").style.height = milkHeight + 'px';
            document.getElementById('row2').style.display = 'none';
            document.getElementById('row1').style.display = 'none';
            let interval = setInterval(() => {
                if(time > 0){
                    time--;
                    document.getElementById(`display`).innerHTML = `
                    <div class="main_time">Time: ${time}</div>
                    
                    `;
                }
                else if(time === 0){
                    
                    document.getElementById(`display`).innerHTML = `
                    <div class="main_welcome" id="welcome">Welcome!</div>
                    <div class="main_end" id="end">Yours coffe are ready!</div>
                    <div class="main_row" id="row1">
                        <button class="main_version" id="version1">Coffe</button>
                        <button class="main_version"  id="version2">Coffe</button>
                    </div>
                    <div class="main_row" id="row2">
                        <button class="main_version" id="version3">Coffe</button>
                        <button class="main_version"  id="version4">Coffe</button>
                    </div>
                    `;
                    document.getElementById('welcome').style.display = 'none';
                    document.getElementById('row1').style.display = 'none';
                    document.getElementById('row2').style.display = 'none';
                    document.getElementById('end').style.display = 'flex';
                    clearInterval(interval)
                }
            }, 1000);    
            
            
        }
        else if(waterHeight > 0 && milkHeight ===0){
            alert('milk are out')
        }
        else if(waterHeight === 0 && milkHeight > 0){
            alert('water are out')
        }
        else if(waterHeight === 0 && milkHeight === 0){
            alert('tubs are empty')
        }
        const WATER_HEAT_CAPACITY = 5500;
        let getBoilTime = function(power){

            console.log(waterAmount * WATER_HEAT_CAPACITY*80/power)
            time =  (waterAmount * WATER_HEAT_CAPACITY*80/power)/1000
        }
        getBoilTime(1000);
    }
}
let coffeMachine = new CoffeMachine();
document.getElementById('power').onclick = ()=>{
    coffeMachine.showMenu();
};
document.getElementById('addWater').onclick = ()=>{
    coffeMachine.addWater();
};
document.getElementById('addMilk').onclick = ()=>{
    coffeMachine.addMilk();
};
document.getElementById('version1').onclick = ()=>{
    coffeMachine.makeCoffe();
    // console.log(waterAmount)
};
document.getElementById('version2').onclick = ()=>{
    coffeMachine.makeCoffe();
};
document.getElementById('version3').onclick = ()=>{
    coffeMachine.makeCoffe();
};
document.getElementById('version4').onclick = ()=>{
    coffeMachine.makeCoffe();
};