import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../@core/services/api.service";
import { Card } from '../../@core/models/Card';


@Component({
    selector: "ns-cards",
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {
    cards: Array<Card>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        // @ts-ignore
        // this.cards = this.apiService.getCards();
        this.apiService.getCards().subscribe(
            (data) => {
                this.cards = data;
            },
            err => console.log(err)
        )
    }
}
