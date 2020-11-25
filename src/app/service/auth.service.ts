import { Injectable } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { getStorage, setStorage } from './storage';


@Injectable()
export class AuthService {

    id: number;
    name: string;
    imageUrl: string;

    public userInfo = null;

    constructor(private platform: Platform) { }

    async googlesigneup() {
        if (this.platform.is('capacitor')) {
            const googleUser = Plugins.GoogleAuth.signIn(null);
            this.userInfo = googleUser;
        } else {
            this.userInfo = {__zone_symbol__value: {id: 0}};
            this.userInfo = {__zone_symbol__value: {name: "Web"}};
            this.userInfo = {__zone_symbol__value: {imageUrl: "../assets/icon/favicon.png"}};
        }
    }

    saveInfo() {
        setStorage("auth", {
            id: this.userInfo.__zone_symbol__value.id,
            name: this.userInfo.__zone_symbol__value.name,
            imageUrl: this.userInfo.__zone_symbol__value.imageUrl,
        });

        this.id = this.userInfo.__zone_symbol__value.id;
        this.name = this.userInfo.__zone_symbol__value.name;
        this.imageUrl = this.userInfo.__zone_symbol__value.imageUrl;
    }

    getUserId() {
        if (this.platform.is('capacitor')) {
            return this.id;
        } else {
            return 0;
        }
    }

    getImageUrl() {
        if (this.platform.is('capacitor')) return this.imageUrl;
        else return "../assets/icon/favicon.png";
    }

    async loadInfo() {
        const info = await getStorage("auth");
        if(info != null) {
            this.id = info.id;
            this.name = info.name;
            this.imageUrl = info.imageUrl;
        }
    }
}