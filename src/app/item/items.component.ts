import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ApiService } from "../@core/services/api.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    cards: Array<Item>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        // @ts-ignore
        // this.cards = this.apiService.getCards();
    }
}
