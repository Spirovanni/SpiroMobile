import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "../../@core/models/Card";
import { ApiService } from "../../@core/services/api.service";
import { getString, remove  } from "@nativescript/core/application-settings";
import { ActionBarComponent  } from "@nativescript/angular/directives/action-bar";


@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    cards: Array<Card>;

    constructor(
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const myToken = getString("mr-token");
        if(myToken){
            this.apiService.getCards().subscribe(
                (data: Card[]) => {
                    this.cards = data;
                },
                err => console.log(err)
            )
        } else {
            this.router.navigate(['/auth'])
        }
    }
    newCard(){
        this.router.navigate(['/edit', -1])
    }
    logout(){
        remove("mr-token");
        this.router.navigate(['/auth'])
    }
}
