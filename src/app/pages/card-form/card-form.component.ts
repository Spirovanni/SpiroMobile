import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Card } from '../../@core/models/Card';
import { ApiService } from "../../@core/services/api.service";
``
@Component({
    selector: 'ns-card-form',
    templateUrl: './card-form.component.html',
    moduleId: module.id,
})
export class CardFormComponent implements OnInit {
    card: Card;
    cardTitle: string;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        if (id >= 0){
            this.getDetails(id);
        } else {
            // @ts-ignore
            this.card = {title: "", description: ''};
        }
    }
    getDetails(id: number){
        this.apiService.getCard(id).subscribe(
            (data: Card) => {
                this.card = data;
                this.cardTitle = this.card.title;
            },
            err => console.log(err)
        )
    }
    saveForm(){
        if(this.card.id){
            this.apiService.updateCard(this.card.id, this.card.title,
                this.card.description).subscribe(
                result => this.router.navigate(['/items']),
                err => console.log(err)

            )
        } else {
            this.apiService.createCard(this.card.title,
                this.card.description).subscribe(
                result => this.router.navigate(['/items']),
                err => console.log(err)
            )
        }

    }
    editClicked(){
        //this.router.navigate(['/edit', this.card.id])
    }
    goBack(){
        // this.routerExtension.backToPreviousPage();
    }
    removeCard(){
        this.apiService.deleteCard(this.card.id).subscribe(
            result => this.router.navigate(['/items']),
            err => console.log(err)
        )
    }

}
