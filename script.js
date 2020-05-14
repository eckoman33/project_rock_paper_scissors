function computerPlay(){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  function sensitiveCase(str){
      let a = str[0].toUpperCase();
      let b = str.substring(1).toLowerCase();
    return a + b;
  }
  function playRound(playerSelection, computerSelection){
      playerSelection = prompt(" Hi! Choose One: Rock, Paper, or Scissors. You'll be Playing Against The Computer!");
      let a = sensitiveCase(playerSelection);
      computerSelection = computerPlay();
      let b = computerSelection;
      let w = 0;
      let l = 0;
      if(a == b){
      }else if(a == 'Rock' && b == 'Scissors'){
        alert('You win! Rock beats scissors')
        w++;
      }else if(a == 'Paper' && b == 'Rock'){
        alert('You win! Paper covers rock')
        w++;
      }else if(a == 'Scissors' && b == 'Paper'){ alert('You win! Scissors cuts paper')
        w++;
      }else if(b == 'Rock' && a == 'Scissors'){
        alert('You lose! Rock beats scissors')
        l++;
      }else if(b == 'Paper' && a == 'Rock'){
        alert('You lose! Paper covers rock')
        l++;
      }else if(b == 'Scissors' && a == 'Paper'){
        alert('You lose! Scissors cuts paper')
        l++;
      }
      return w + ' ' + l;
  }
  function game(){
      let win = 0;
      let lose = 0;  
      while((win + lose) <= 4){
        let result = playRound();
        if(result == '1 0'){
        win++;
        console.log( " You won this round! " + win ), alert( " You won this round! " + win );
        }else{
        lose++;
        console.log(" Computer wins this round! " + lose ), alert( " Computer wins this round! " + lose  );
        }
        }
      return win > lose ? (console.log('You Win!\nCongratulations!'), alert('You Win!\nCongratulations!')) : (console.log('Computer Wins!\nGame Over'), alert('Computer Wins!\nGame Over')); 
  }    
  game();


 
