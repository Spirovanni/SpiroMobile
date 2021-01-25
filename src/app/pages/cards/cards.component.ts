import { Component, OnInit } from "@angular/core";

import { Card } from "./card";
import { ApiService } from "../@core/services/api.service";

@Component({
    selector: "ns-items",
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {
    cards: Array<Card>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        // @ts-ignore
        // this.cards = this.apiService.getCards();
    }
}
