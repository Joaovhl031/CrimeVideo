import { Component } from '@angular/core';
import { PesquisaBar } from "../pesquisa-bar/pesquisa-bar";
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-home',
  imports: [PesquisaBar, NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
