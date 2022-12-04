import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HeroComponent } from './hero/hero.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent
    ],
    imports: [
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}