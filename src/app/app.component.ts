import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensagens: FirebaseListObservable<any>;
  nome: any;
  msgVal: string = '';

  constructor( public af: AngularFire ) {
    this.mensagens = af.database.list('/mesagens', {
      query: {
        limitToLast: 10
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.nome = auth;
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  chatSend( novaMensagem: string ) {
    this.mensagens.push({ mensagem: novaMensagem, nome: this.nome.facebook.displayName });
    this.msgVal = '';
  }
}
