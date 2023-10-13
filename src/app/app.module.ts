import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusPrincipaisComponent } from './components/menus-principais/menus-principais.component';
import { TituloDataComponent } from './components/titulo-data/titulo-data.component';
import { RequisitosDescricaoComponent } from './components/requisitos-descricao/requisitos-descricao.component';
import { PesquisaCategoriaComponent } from './components/pesquisa-categoria/pesquisa-categoria.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { BotaoSupComponent } from './components/botao-sup/botao-sup.component';
import { ContentComponent } from './pages/content/content.component';
import { CardMiniComponent } from './components/card-mini/card-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusPrincipaisComponent,
    TituloDataComponent,
    RequisitosDescricaoComponent,
    PesquisaCategoriaComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    BotaoSupComponent,
    ContentComponent,
    CardMiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
