import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cards = [
        {
            imgPath: "bfdogs.jpg",
            title: "These are my dogs.",
            desc: "This is Gypsy and Jema.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog.jpg",
            title: "This is my puppy.",
            desc: "This is Buddy.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "gsdog.jpg",
            title: "This is my puppy.",
            desc: "This is Max.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog1.jpg",
            title: "Adopt her today.",
            desc: "This is Bella.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog2.jpg",
            title: "He is in need of a good home.",
            desc: "This is Rocky.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog3.jpg",
            title: "This is my puppy.",
            desc: "This is Chloe.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog4.jpg",
            title: "Adopt today!",
            desc: "This is Sam.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog5.jpg",
            title: "This is a pitbull.",
            desc: "Her name is Blue.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog6.jpg",
            title: "Adopt a puppy!",
            desc: "This is Stella.",
            favorited: false,
            shared: false
        },
        {
            imgPath: "dog7.jpg",
            title: "Help find him a home!.",
            desc: "This is Bruno.",
            favorited: false,
            shared: false
        }
    ]
    constructor(public navCtrl: NavController) {

    }

    clickFav(card) {
        let index = this.cards.indexOf(card);

        if(index > -1){
            if(card.favorited){
                this.cards[index].favorited = false;
            }else{
                this.cards[index].favorited = true;
            }
        }
    }

    clickShare(card) {
        let index = this.cards.indexOf(card);

        if(index > -1){
            if(card.shared){
                this.cards[index].shared = false;
            }else{
                this.cards[index].shared = true;
            }
        }
    }

    deleteItem(card){
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    }

}
