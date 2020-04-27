var score,roundScore,activePlayer,gamePlaying;                         

init();

//dice=
//Math.floor(Math.random()*6)+1;
//console.log(dice);
//
//document.querySelector('#current-'+ activePlayer).textContent=dice;
////document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);



document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
    //random number   
var dice=Math.floor(Math.random()*10)+1;
//display result
var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-'+dice+'.png';


    
///update number
if(dice !== 1){
roundScore+=dice;
document.querySelector('#current-'+activePlayer).textContent=roundScore;
        
    }else{
        nextPlayer();
    }
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('player-1-panel').classList.add('active');
//    }
  
    
}
  
});

document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
    //add current score to global
score[activePlayer]+=roundScore;
    
    //update ui
document.querySelector('#score-' + activePlayer).textContent=score[activePlayer];
    //check if player won the game
    if(score[activePlayer]>=20){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }else{  
        nextPlayer();
    }

    
}

});

function nextPlayer(){
activePlayer === 0 ? activePlayer=1:activePlayer=0;
roundScore=0;
    
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
        
document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
   
}