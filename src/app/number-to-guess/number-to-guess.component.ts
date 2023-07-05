import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-to-guess',
  templateUrl: './number-to-guess.component.html',
  styleUrls: ['./number-to-guess.component.css']
})
export class NumberToGuessComponent {

  constructor(private formBuilder: FormBuilder) { }

  isGameFinished:boolean = false;
  showMessage:boolean = false;
  isHidden:boolean = false;

  getRandomInt(min :number, max :number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

  guessNumberInput: FormGroup = this.formBuilder.group({

    guessNumber: [null, [Validators.required]],

  });

  secretNumber :number = this.getRandomInt(1, 20);

  onSubmit() {
    if(this.isGameFinished){return};

    console.log(this.guessNumberInput);

    this.showMessage = true;

    if(this.guessNumber.value == this.secretNumber){
      return this.isHidden = !this.isHidden;
    }

    if (this.guessNumber.value != this.secretNumber){
      setTimeout(()=> {
        this.showMessage = false;
      }, 2000);
    }
    return
  }

  get guessNumber(){
    return this.guessNumberInput.get('guessNumber') as FormControl
  }

  isInputNumber(guess:any){
    if (isNaN(guess)) {
      // console.log("📛 No Number");
      return false;
  }
  return true;
}

  isInputInRange(guess:any){
    if ( guess < 1 || guess > 20 ){
      // console.log("Number must be between 1 and 20");
        return false;
    }
    return true;

  }

  // onKey(event: any){
  //   this.numberGuess = event.target.value;
  // }


  // onClickMe(){
  //   console.log('clicked');
  //   console.log(this.numberGuess);
  //   if(this.hasInputError(this.numberGuess)){return;}
  //   this.compareNumbers(this.numberGuess, this.secretNumber);
  // }

  // compareNumbers(numberGuess:number, secretNumber:number){
  //   if (numberGuess == secretNumber) {
  //     console.log("🎉 Correct Number");
  //     document.body.style.backgroundColor = "green";
  //     // if(highscore < score ){
  //     //     highScoreElement.textContent = score;
  //     //     localStorage.setItem('highscoreStorage', score);
  //     // }
  //     // localStorage.getItem('highscoreStorage');
  //     this.isGameFinished = true;
  //   } else if (numberGuess > secretNumber) {
  //       console.log("too high");
  //       // decrementeScore(numberGuess);
  //   } else if (numberGuess < secretNumber) {
  //       console.log("too low");
  //       // decrementeScore(numberGuess);
  //   }

  // }




}
