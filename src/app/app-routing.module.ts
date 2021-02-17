import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";
import { CardDetailComponent  } from "./pages/cards/card-detail.component";
import { CardsComponent  } from "./pages/cards/cards.component";
import { CardFormComponent } from "./pages/card-form/card-form.component";
import { AuthComponent } from "./pages/auth/auth.component";

const routes: Routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", component: AuthComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "cards", component: CardsComponent },
    { path: "card/:id", component: CardDetailComponent },
    { path: "edit/:id", component: CardFormComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
