import { Component } from '@angular/core';
import { NavController , ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
item:any={};
  constructor(public navCtrl: NavController , public http: Http, public toast: ToastController) {

  }
  insertx(){
    this.item.action="insert";
    this.http.post("http://localhost/SignUpPhP/insertlist.php",this.item).subscribe(view=>{
      console.log(view);
      let result = JSON.parse(view["_body"]);
 if(result.status == "success"){
 this.showToast("Inserted successfully");
 }
 else{
 this.showToast("Something went wrong");
 }
 }, err=>{
 console.log(err);
 })
 }

 showToast(message){
 let toast = this.toast.create({
 message:message,
 duration: 2000
 });
 toast.present();
 }


  }

