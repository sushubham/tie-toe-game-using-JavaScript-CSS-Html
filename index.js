 let score = {
            win : 0,
            loss : 0,
            tie : 0
        }
         document.querySelector('.Rock').innerHTML = `win: ${score.win}, lose: ${score.loss}, tie: ${score.tie}`
        let scores = JSON.parse(localStorage.getItem('score'));
        console.log(scores);

        function playerMove(playerValue)
        {
            if(playerValue === 'Rock')
            {
            const stringRandom = function1();
            if(stringRandom == 'Rock')
            {
                result = 'Draw';
            }
            else if(stringRandom == 'Paper')
            {
                result = 'You Lose';
            }
            else if(stringRandom == 'Scissor')
            {
                result = 'You Win';
            }
            if(result === 'You Win')
            {
                score.win = score.win + 1;
            }
            else if(result === 'You Lose')
            {
                score.loss = score.loss + 1;
            }
            else if(result === 'Draw')
            {
                score.tie = score.tie + 1;
            }
            localStorage.setItem('score',JSON.stringify(score));
             document.querySelector('.Rock').innerHTML = `win: ${score.win}, lose: ${score.loss}, tie: ${score.tie}`
            document.querySelector('.match-decide').innerHTML = `${result}`
            document.querySelector('.rock-paper').innerHTML = `
        You <img src="./Images/${playerValue}-emoji.png">
        <img src="./Images/${stringRandom}-emoji.png">
        Computer`
//             alert(`You picked ${playerValue}. Computer picked ${stringRandom}. ${result}
// win: ${score.win}, lose: ${score.loss}, tie: ${score.tie}`);
        }
        else if(playerValue === 'Paper')
        {
            stringRandom = function1();
            if(stringRandom == 'Rock')
            {
                result = 'You Lose';
            }
            else if(stringRandom == 'Paper')
            {
                result = 'Draw';
            }
            else if(stringRandom == 'Scissor')
            {
                result = 'You Win';
            }
            if(result === 'You Win')
            {
                score.win = score.win + 1;
            }
            else if(result === 'You Lose')
            {
                score.loss = score.loss + 1;
            }
            else if(result === 'Draw')
            {
                score.tie = score.tie + 1;
            }
            localStorage.setItem('score',JSON.stringify(score));
             document.querySelector('.Rock').innerHTML = `win: ${score.win}, lose: ${score.loss}, tie: ${score.tie}`
             document.querySelector('.match-decide').innerHTML = `${result}`
            document.querySelector('.rock-paper').innerHTML =  `You <img src="./Images/${playerValue}-emoji.png">
        <img src="./Images/${stringRandom}-emoji.png">
        Computer`
        }
        else if(playerValue==='Scissor')
        {
            stringRandom = function1();
            if(stringRandom == 'Rock')
            {
                result = 'You Lose';
            }
            else if(stringRandom == 'Paper')
            {
                result = 'You Win';
            }
            else if(stringRandom == 'Scissor')
            {
                result = 'Draw';
            }

            if(result === 'You Win')
            {
                score.win +=1;
            }
            else if(result === 'You Lose')
            {
                score.loss +=1;
            }
            else if(result === 'Draw')
            {
                score.tie +=1;
            }
            localStorage.setItem('score',JSON.stringify(score));
             document.querySelector('.Rock').innerHTML = `win: ${score.win}, lose: ${score.loss}, tie: ${score.tie}`
             document.querySelector('.match-decide').innerHTML = `${result}`
             document.querySelector('.rock-paper').innerHTML = `You <img src="./Images/${playerValue}-emoji.png">
        <img src="./Images/${stringRandom}-emoji.png">
        Computer`
        }
        }

        function function1()
        {
            let randomNo = Math.random();
            let stringRandom = ' ';
            if(randomNo > 0 && randomNo < 1/3)
            {
                stringRandom = 'Rock';
                console.log(stringRandom);
            }else if(randomNo > 1/3 && randomNo < 2/3)
            {
                stringRandom = 'Paper';
                console.log(stringRandom);
            }
            else if(randomNo > 2/3 && randomNo < 1)
            {
                stringRandom = 'Scissor';
                console.log(stringRandom);
            }
            return stringRandom;
        }