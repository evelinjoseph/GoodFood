import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

declare var Email: any;

export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-retailertab3',
  templateUrl: './retailertab3.page.html',
  styleUrls: ['./retailertab3.page.scss'],
})
export class Retailertab3Page implements OnInit {
  userUID;
  retailerType;
  retailerUID;
  name;
  email;
  url;
  buttonText: string = "Edit";
  isRead: boolean = true;
  isReady: boolean = false;
  isVerified: boolean = false;

  // File upload task 
  fileUploadTask: AngularFireUploadTask;

  // Upload progress
  percentageVal: Observable<number>;

  // Track file uploading with snapshot
  trackSnapshot: Observable<any>;

  // Uploaded File URL
  UploadedImageURL: Observable<string>;

  // Uploaded image collection
  files: Observable<imgFile[]>;

  // Image specifications
  imgName: string;
  imgSize: number;

  // File uploading status
  isFileUploading: boolean;
  isFileUploaded: boolean;

  private filesCollection: AngularFirestoreCollection<imgFile>;
  
  constructor(public nacCtrl: NavController, private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth, public loadingController: LoadingController, private changeDetection: ChangeDetectorRef, public emailComposer: EmailComposer,  public alertController: AlertController) {
    this.isFileUploading = false;
    this.isFileUploaded = false;
    
    // Define uploaded files collection
    this.filesCollection = firestore.collection<imgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();
  
   }
  
  async ngOnInit() {
   this.presentLoading()
    try{
    var self = this;
    await (firebase.auth().onAuthStateChanged(async function(user) {  
      
      if (user) {        
        self.userUID = user.uid

          var userRef = (await self.firestore.collection("users").doc(self.userUID).get().toPromise()).data()
              self.retailerType = userRef.retailerType;
              self.retailerUID = userRef.retailerUID;    
              self.email = userRef.email;
              self.name = userRef.name;
              self.isVerified = userRef.isVerified;

          var storageRef =  self.afStorage.ref(`images/${self.userUID}`).getDownloadURL().toPromise().then(function(url) {        
              self.url = url; 
          }).catch(function(error) {
            self.url = 'assets/images/default.png';
          });
           
      }
      else{
        console.log('no user signed in');
      }
    }));    
      
  }
  catch(error){
    console.log(error.message)
  }
}

updatePassword(){        
  this.nacCtrl.navigateRoot(['./retailer-update-password'])
}

sendEmail(){        
  Email.send({
    SecureToken : "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
    To : 'goodfoodinnova@gmail.com',
    From : 'goodfoodinnova@gmail.com',
    Subject : "New Retailer Verification Reminder",
    Body : 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!'
  }).then(
    async message => { 
      if(message == "OK"){
        console.log(message)
        alert("A message has been sent to ensure your account is verified!")
      }
      else{
        console.log("SMTP.js Error: " + message)
          const emailConfirmation = await this.presentAlertCheck();

          if (emailConfirmation) {

          let newEmail = {
            to: 'goodfoodinnova@gmail.com',
            subject: 'New Retailer Verification',
            body: 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!',
            isHtml: true,
          }

          this.emailComposer.isAvailable().then((available: boolean) => {
            if(available) {
              console.log("isAvailable");
            }
          }).catch((error) => { console.log('EmailComposer Error: ' + error.message) });
          this.emailComposer.open(newEmail);
        }
      }         
    
  });    
}

public async presentAlertCheck() : Promise<boolean> {
  let resolveFunction: (confirm: boolean) => void;
  const promise = new Promise<boolean>(resolve => {
    resolveFunction = resolve;
  });
  
  const alert = await this.alertController.create({
    header: 'Confirm Navigation',
    message: 'You are about to be navigated out of this application. Click OK to continue.',
    buttons: [
      {
        text: 'OK',
          handler: () => resolveFunction(true)
      }
    ]
  });

  await alert.present();
  return promise;
}


edit() {
  console.log("clicked edit")
  console.log(this.buttonText)
  console.log(this.isRead)
    if(this.buttonText == "Edit"){
      this.isRead = false;
      console.log("entered if")
      this.buttonText = "Save";
      this.changeDetection.detectChanges(); 
      
     }
    else{
      this.isRead = true;
      this.buttonText = "Edit";

      let self = this;

    var storageRef =  this.afStorage.ref(`images/${this.userUID}`).getDownloadURL().toPromise().then(function(url) {        
        self.url = url; 
    }).catch(function(error) {
      self.url = 'assets/images/default.png';
    });

      this.changeDetection.detectChanges();       
      
      const { name } = this
      if(name.trim().length != 0){
        try{
          this.firestore.doc(`users/${this.userUID}`).update({          
            name               
          })
        }catch(error){  
          console.log(error.message)
        }   
      }else {
       alert("Please enter a value for name");       
      }  
      
    }   
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 900,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.isReady = true;
    this.changeDetection.detectChanges(); 
  }

  
  uploadImage(event: FileList) {
      
    const file = event.item(0)

    // Image validation
    if (file.type.split('/')[0] !== 'image') { 
      alert('File type is not supported!')
      return;
    }

    this.isFileUploading = true;
    this.isFileUploaded = false;

    this.imgName = this.retailerUID;

    // Storage path
    const fileStoragePath = `images/${this.imgName}`;

    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);

    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);

    // Show uploading progress
    this.percentageVal = this.fileUploadTask.percentageChanges();
    this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        // Retreive uploaded image storage path
        this.UploadedImageURL = imageRef.getDownloadURL();
        
        this.UploadedImageURL.subscribe(resp=>{
          this.storeFilesFirebase({
            name: this.retailerUID,
            filepath: resp,
            size: this.imgSize
          });
          this.isFileUploading = false;
          this.isFileUploaded = true;
        },error=>{
          console.log(error);
        })
      }),
      tap(snap => {
          this.imgSize = snap.totalBytes;
      })
    )
}


storeFilesFirebase(image: imgFile) {
    //const fileId = this.afstore.createId();
    
    this.filesCollection.doc(this.retailerUID).set(image).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
}


}