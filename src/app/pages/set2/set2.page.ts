import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-set2',
  templateUrl: './set2.page.html',
  styleUrls: ['./set2.page.scss'],
})


export class Set2Page implements OnInit {
  animalArr;
  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private firestore: AngularFirestore
  ) { 
      this.firestore.collection('Animals').valueChanges({idField: 'id'}).subscribe((animal) => {
        this.animalArr = animal;
        console.log(this.animalArr);
      })
    }

    game(){
      this.shuffle(this.animalArr);
  
      let card1 = <HTMLInputElement>document.getElementById("card1");
      let card2 = <HTMLInputElement>document.getElementById("card2");
      let card3 = <HTMLInputElement>document.getElementById("card3");
      let card4 = <HTMLInputElement>document.getElementById("card4");
      let card5 = <HTMLInputElement>document.getElementById("card5");
      let card6 = <HTMLInputElement>document.getElementById("card6");
      let card7 = <HTMLInputElement>document.getElementById("card7");
      let card8 = <HTMLInputElement>document.getElementById("card8");
      let card9 = <HTMLInputElement>document.getElementById("card9");
      let card10 = <HTMLInputElement>document.getElementById("card10");
      let card11 = <HTMLInputElement>document.getElementById("card11");
      let card12 = <HTMLInputElement>document.getElementById("card12");
      let cards = [card1, card2, card3, card4, card5, card6,
                    card7, card8, card9, card10, card11, card12 ];
       
      /* POPULATE */
      for (let i=0; i < 12; i++){
        cards[i].style.fontSize = "100%";
        cards[i].innerText = this.animalArr[i].id;
      }
  
      let numClicked = 0;
      let turnOver = false;
      let lastClicked = -1;
      let colorArr = this.animalArr;
  
  
      /* PLAY */
      for (let j=0; j < 12; j++){
        let self = this;
        cards[j].addEventListener('click', function () {
          if (cards[j].classList.contains("matched")){
            //do nothing
          }
          else if (!cards[j].classList.contains("clicked") && !turnOver){
            cards[j].classList.add("clicked");
            if (numClicked == 0)
              lastClicked = j;
            numClicked++;
          }
          else if (cards[j].classList.contains("clicked")){
            cards[j].classList.remove("clicked");
            numClicked--;
          }
  
          if (numClicked == 2){
            turnOver = true;
            let jText = cards[j].innerText;
            let lastClickedText = cards[lastClicked].innerText;
            let jTextMeaning = "";
            let lastClickedTextMeaning = "";
            
            for (let i=0; i < 12; i++){
              if (colorArr[i].id == jText){
                jTextMeaning = colorArr[i].meaning;
              }
              else if (colorArr[i].id == lastClickedText){
                lastClickedTextMeaning = colorArr[i].meaning;
              }
            }
            
            if (jTextMeaning == lastClickedTextMeaning){
              cards[j].classList.remove("clicked");
              cards[j].classList.add("matched");
              cards[lastClicked].classList.add("matched")
              turnOver = false;
              numClicked = 0;
            }
          }
          else if (numClicked == 0){
            turnOver = false;
          }
  
          /* CHECK GAME OVER */
          let allMatched = true;
          for (let k=0; k < 12; k++){
            if (!cards[k].classList.contains("matched")){
              allMatched = false;
            }
          }
          if (allMatched == true)
            self.wonGameAlert();
             
        }); 
      }
    }
  
  
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  
  
     back(){
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    }
  
  
    wonGameAlert(){
      this.alertCtrl.create({
        header: 'YOU WON',
        message: "Great Job! What do you want to do next?",
        buttons: [
          {
            text: 'PLAY AGAIN',
            handler: () => {
              window.location.reload();
            }
          },
          {
            text: 'GO HOME',
            handler: () => {
              this.back();
            }
          }
        ]
      }).then(res => {
        res.present();
      })
    }
  
    startAlert() {
      this.alertCtrl.create({
        header: 'Begin',
        message: "Ready when you are!",
        buttons: [
          {
            text: 'Start',
            handler: () => {
              this.game();
            }
          },
          {
            text: 'Cancel',
            handler: () => {
              this.back();
            }
          }
        ]
      }).then(res => {
        res.present();
      });
    }
  
    quitAlert() {
      this.alertCtrl.create({
        header: 'Quit',
        message: "Are you sure you want to quit this game?",
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Quit',
            handler: () => {
              this.back();
            }
          }
        ]
      }).then(res => {
        res.present();
      });
    }
  
    ngOnInit() { 
      this.startAlert();
    }  

}
