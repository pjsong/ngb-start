import { Component } from '@angular/core';

@Component({
  selector: 'ngb-alert-basic',
  template: `
  <p><ngb-alert [dismissible]="false">
  <strong>what's the matter</strong>
</ngb-alert></p>
`
})
export class NgbAlertBasicComponent{}
