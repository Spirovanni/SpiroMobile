import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from "../../@core/models/Card";
import { ApiService } from "../../@core/services/api.service";


@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ['./item-detail.componet.scss'],
})
export class ItemDetailComponent implements OnInit {
    card: Card;
    highlight: number;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.apiService.getCard(id).subscribe (
            (data:Card) => {
                this.card = data;
            },
            err => console.log(err)
        )
    }
}
