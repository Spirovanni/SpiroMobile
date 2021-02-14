import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from "../../@core/models/Card";
import { ApiService } from "../../@core/services/api.service";
import { RouterExtensions } from "@nativescript/angular";
import { Frame } from "@nativescript/core/ui/frame";


@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
    card: Card;
    highlight: number;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
        private routerExtension: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.highlight = 0;
        const id = +this.route.snapshot.params.id;
        this.getDetails(id);
    }
    setHightlight(rate: number) {
        this.highlight = rate;
    }
    rateClicked(){
        this.apiService.rateCard(this.highlight, this.card.id).subscribe(
            result => this.getDetails(this.card.id),
            err => console.log(err)
        )
    }
    getDetails(id: number){
        this.apiService.getCard(id).subscribe(
            (data: Card) => {
                this.card = data;
            },
            err => console.log(err)
        )
    }
    editClicked(){
        this.router.navigate(['/edit', this.card.id])
    }
    goBack(){
        this.routerExtension.backToPreviousPage();
    }


}

export function goBack() {
    Frame.topmost().goBack();
}
export function openSettings() {
    // implement the custom logic
}
