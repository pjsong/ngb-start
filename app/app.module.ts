import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertBasicComponent } from './ngb/ngbAlertBasic.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, NgbModule ],
  declarations: [ AppComponent, NgbAlertBasicComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
