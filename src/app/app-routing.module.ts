import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { CardDetailComponent  } from "./pages/cards/card-detail.component";
import { CardsComponent  } from "./pages/cards/cards.component";

const routes: Routes = [
    { path: "", redirectTo: "/cards", pathMatch: "full" },
    { path: "cards", component: CardsComponent },
    { path: "card/:id", component: CardDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
