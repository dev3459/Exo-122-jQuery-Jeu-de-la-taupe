const holes = $('.hole');// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score');//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole');// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";
let counter = 10;

$('#startGame').click(function(){
    startGame();
});

function startGame(){
    let startTime = setInterval(()=>{
        let random = Math.trunc(Math.random() * 6 + 1);
        let clearReset = setTimeout(()=>{
            reset();
        }, Math.round(Math.random() * 1000));
        let selectCase = ".hole" + random.toString();
        $(selectCase).addClass('up');
        console.log(selectCase);
        counter--;

        if(counter <= 0){
            clearInterval(startTime);
            clearTimeout(clearReset);
            reset();
        }
    }, 1000);

    $(moles).click(function(){
        $(scoreBoard).text(parseInt(scoreBoard.text()) + 1);
        reset();
    });
}

function reset(){
    $(holes).removeClass('up');
}