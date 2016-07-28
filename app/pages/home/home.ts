import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public photo: any;
    constructor(private platform: Platform, private navCtrl: NavController) {
        platform.ready().then(() => {
            console.log("Home ready");
        });
    }

    snap() {
        let options = {
            destinationType: Camera.DestinationType.DATA_URL
        }
        Camera.getPicture(options).then((imageData) => {
            this.photo = 'data:image/jpeg;base64,' + imageData;
        }, (error) => {
            console.log("Error: ", error);
        });
    }
}
