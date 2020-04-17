var cor = [780, 590];
var corGoal = [663, 430];
var shooters = ['url(spriteShooter1.jpg)', 'url(spriteShooter2.jpg)'];
var chosenShooter = 0;
var deaths = 0;
var step = 0;
var topUsers = JSON.parse(topUsers);
var min = 0;
var sec = 0;
var time = 0;
var stoptime = 0;


function chooseFighter() {
    var nameWritten = prompt('Введите никнейм:');
    if (nameWritten == '') {
        alert('Ошибка: поле "Имя" не заполнено')
            return chooseFighter(); 
    }
    var user = {
        id: topUsers.length,
        name: nameWritten,
        chosenShooter: shooters[id],
        bestTime: time
    }
    for (let i in topUsers) {
        if (time >= topUsers[i].bestTime && time <= topUsers[i+1].bestTime) {
            topUsers[i] = user;
            topUsers.pop();
            topUsers[i+1] = topUsers[i] 
        }
        JSON.stringify(topUsers)
      }
}

function startGame(chosenShooter) {
    document.body.removeChild(document.getElementById('mainWindow'));

    var gameWindow = document.createElement('div');
    gameWindow.id = 'gameWindow';
    document.body.appendChild(gameWindow);

    var shooter = document.createElement('div');
    shooter.id = 'shooter';
    startParameters(shooter);
    shooter.style.backgroundImage = chosenShooter;

    shooter.style.top = '590px';
    shooter.style.left = '780px';

    var goal = document.createElement('div');
    goal.id = 'goal';
    startParameters(goal);
    goal.style.backgroundImage = shooters[1];

    tick();

    goal.style.top = '430px';
    goal.style.left = '663px';
    setInterval(function(){
        if (step <= 11) {
            corGoal[1] -= 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 19) {
            corGoal[0] += 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 26) {
            corGoal[1] -= 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 27) {
            corGoal[1] -= 5;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 59) {
            corGoal[0] -= 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 67) {
            corGoal[1] += 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 84) {
            corGoal[0] -= 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 92) {
            corGoal[1] += 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 100) {
            corGoal[0] -= 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 108) {
            corGoal[1] += 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 117) {
            corGoal[0] += 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 133) {
            corGoal[1] += 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
        else if (step <= 149) {
            corGoal[0] -= 10;
            goal.style.left = corGoal[0] + 'px';
            step +=1
        }
        else if (step <= 190) {
            corGoal[1] -= 10;
            goal.style.top = corGoal[1] + 'px';
            step +=1
        }
    }, 50);
};

window.onkeydown = function move_left(){
    switch(event.keyCode) {
        case 37:
            cor[0] -= 5;
            document.getElementById('shooter').style.left = cor[0]+ 'px';
            borders(cor)
            break;
        case 38:
            cor[1]-= 5;
            document.getElementById('shooter').style.top = cor[1]+ 'px';
            borders(cor)
            break;
        case 39:
            cor[0]+= 5;
            document.getElementById('shooter').style.left = cor[0]+ 'px';
            borders(cor)
            break;
        case 40:
            cor[1]+= 5;
            document.getElementById('shooter').style.top = cor[1]+ 'px';
            borders(cor)
            break;            
    }
    
};

function startParameters(elem) {
    elem.style.position = 'absolute';
    elem.style.width = '20px';
    elem.style.height = '20px';
    elem.style.backgroundSize = 'cover';
    document.getElementById('gameWindow').appendChild(elem);
};

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

function borders (cor) {
    if (!(cor[0]>= 100 && cor[0]<=105 && cor[1]>= 110 && cor[1]<= 645 ||
        cor[0]>= 100 && cor[0]<=265 && cor[1]>= 630 && cor[1]<= 645 ||
        cor[0]>= 255 && cor[0]<=265 && cor[1]>= 470 && cor[1]<= 645 ||
        cor[0]>= 175 && cor[0]<=265 && cor[1]>= 470 && cor[1]<= 485 ||
        cor[0]>= 175 && cor[0]<=180 && cor[1]>= 385 && cor[1]<= 555 ||
        cor[0]>= 175 && cor[0]<=265 && cor[1]>= 385 && cor[1]<= 395 ||
        cor[0]>= 250 && cor[0]<=265 && cor[1]>= 310 && cor[1]<= 395 ||
        cor[0]>= 250 && cor[0]<=475 && cor[1]>= 310 && cor[1]<= 315 ||
        cor[0]>= 420 && cor[0]<=430 && cor[1]>= 235 && cor[1]<= 315 ||
        cor[0]>= 420 && cor[0]<=750 && cor[1]>= 235 && cor[1]<= 235 ||
        cor[0]>= 735 && cor[0]<=750 && cor[1]>= 235 && cor[1]<= 315 ||
        cor[0]>= 540 && cor[0]<=750 && cor[1]>= 305 && cor[1]<= 315 ||
        cor[0]>= 660 && cor[0]<=665 && cor[1]>= 305 && cor[1]<= 545 ||
        cor[0]>= 285 && cor[0]<=350 && cor[1]>= 105 && cor[1]<= 150 ||
        cor[0]>= 335 && cor[0]<=350 && cor[1]>= 105 && cor[1]<= 230 ||
        cor[0]>= 610 && cor[0]<=625 && cor[1]>= 150 && cor[1]<= 235 ||
        cor[0]>= 420 && cor[0]<=625 && cor[1]>= 150 && cor[1]<= 165 ||
        cor[0]>= 100 && cor[0]<=185 && cor[1]>= 295 && cor[1]<= 315 ||
        cor[0]>= 55 && cor[0]<=265 && cor[1]>= 20 && cor[1]<= 240 ||
        cor[0]>= 55 && cor[0]<=280 && cor[1]>= 20 && cor[1]<= 115 ||
        cor[0]>= 55 && cor[0]<=185 && cor[1]>= 20 && cor[1]<= 315 ||
        cor[0]>= 740 && cor[0]<=885 && cor[1]>= 425 && cor[1]<= 695 ||
        cor[0]>= 665 && cor[0]<=740 && cor[1]>= 430 && cor[1]<= 695 ||
        cor[0]>= 625 && cor[0]<=665 && cor[1]>= 470 && cor[1]<= 695 ||
        cor[0]>= 610 && cor[0]<=625 && cor[1]>= 540 && cor[1]<= 695 ||
        cor[0]>= 335 && cor[0]<=610 && cor[1]>= 630 && cor[1]<= 645 ||
        cor[0]>= 335 && cor[0]<=350 && cor[1]>= 470 && cor[1]<= 645 ||
        cor[0]>= 335 && cor[0]<=435 && cor[1]>= 470 && cor[1]<= 480 ||
        cor[0]>= 420 && cor[0]<=435 && cor[1]>= 470 && cor[1]<= 565 ||
        cor[0]>= 420 && cor[0]<=610 && cor[1]>= 540 && cor[1]<= 565 ||
        cor[0]>= 385 && cor[0]<=395 && cor[1]>= 390 && cor[1]<= 480 ||
        cor[0]>= 335 && cor[0]<=515 && cor[1]>= 390 && cor[1]<= 400 ||
        cor[0]>= 415 && cor[0]<=515 && cor[1]>= 390 && cor[1]<= 405 ||
        cor[0]>= 500 && cor[0]<=515 && cor[1]>= 390 && cor[1]<= 475 ||
        cor[0]>= 580 && cor[0]<=620 && cor[1]>= 470 && cor[1]<= 475 ||
        cor[0]>= 580 && cor[0]<=595 && cor[1]>= 390 && cor[1]<= 475 ||
        cor[0]>= 740 && cor[0]<=840 && cor[1]>= 385 && cor[1]<= 430 ||
        cor[0]>= 825 && cor[0]<=840 && cor[1]>= 60 && cor[1]<= 430 ||
        cor[0]>= 500 && cor[0]<=840 && cor[1]>= 60 && cor[1]<= 75 ||
        cor[0]>= 695 && cor[0]<=710 && cor[1]>= 60 && cor[1]<= 165 ||
        cor[0]>= 695 && cor[0]<=750 && cor[1]>= 60 && cor[1]<= 150
        )) {
            cor[0]= 780;
            cor[1]= 590;
            document.getElementById('shooter').style.left = cor[0]+ 'px';
            document.getElementById('shooter').style.top = cor[1]+ 'px';
            deaths +=1;
            return cor;
    };
}

function init() {
    sec = 0;
    time = 0;
    setInterval(tick, 1000);
}
function tick() {
    if (stopTime != 1) {
        sec++;
        time++;
        if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
            min++;
            sec = sec - 60;
        }
        if (sec < 10) { //Визуальное оформление
            if (min < 10) {
                    document.getElementById('timer').innerHTML ='0' + min + ':0' + sec;
            } 
            else {
                    document.getElementById('timer').innerHTML = min + ':0' + sec;
            }
        } 
        else {
            if (min < 10) {
                    document.getElementById('timer').innerHTML = '0' + min + ':' + sec;
            } 
            else {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
            }
        }
    }
}