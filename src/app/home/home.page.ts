import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public allItems: Array<string> = [];

    constructor(private alertCtrl: AlertController) {
        for (let i = 0; i < 10; i++) {
            this.allItems.push('Item ' + i);
        }
    }

    async doSomething(item: any) {
        const alert = await this.alertCtrl.create({
            header: 'Alert!!!!',
            buttons: ['OK']
        });
        await alert.present();
        console.log('displaying item', item);
    }
}
