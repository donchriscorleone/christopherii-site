import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HeroComponent } from './hero/hero.component';
import { PreviewProjectsComponent } from './preview-projects/preview-projects.component';
import { PreviewProjectCardComponent } from './preview-projects/preview-project-card/preview-project-card.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        PreviewProjectsComponent,
        PreviewProjectCardComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}