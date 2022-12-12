import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  colorArr;
  animalArr;
  foodArr;
  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) { 
      this.firestore.collection('ColorList').valueChanges({idField: 'id'}).subscribe((color) => {
        this.colorArr = color;
      })
      this.firestore.collection('AnimalList').valueChanges({idField: 'id'}).subscribe((animal) => {
        this.animalArr = animal;
      })
      this.firestore.collection('FoodList').valueChanges({idField: 'id'}).subscribe((food) => {
        this.foodArr = food;
      })
  }

  toggleContent(id){
    let contentCard = <HTMLInputElement>document.getElementById(id);
    let contentText = "";

    //Set content
    if (id === "colorCardContent"){
      for (let i = 0; i < 6; i++){
        contentText = contentText.concat(this.colorArr[i].id + " - " + this.colorArr[i].translation + "\n");
      }
    }
    else if (id === "animalCardContent"){
      for (let i = 0; i < 6; i++){
        contentText = contentText.concat(this.animalArr[i].id + " - " + this.animalArr[i].translation + "\n");
      }
    }
    else {
      for (let i = 0; i < 6; i++){
        contentText = contentText.concat(this.foodArr[i].id + " - " + this.foodArr[i].translation + "\n");
      }
    }
    contentCard.innerText = contentText;

    //Now toggle
    var x = <HTMLInputElement>document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  openGallery(){
    this.router.navigateByUrl('/gallery', { replaceUrl: true });
  }

}
