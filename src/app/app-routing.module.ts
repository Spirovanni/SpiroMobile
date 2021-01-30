import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";
import { CardDetailComponent  } from "./pages/cards/card-detail.component";
import { CardsComponent  } from "./pages/cards/cards.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "cards", component: CardsComponent },
    { path: "card/:id", component: CardDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
