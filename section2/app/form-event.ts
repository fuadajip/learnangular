

import { Component } from "@angular/core";

@Component({
    selector : 'form-event',
    template : `<label>My Event</label>
                  <input type="text" class="form-control" id="myevent" placeholder="Enter the Schedule">
                `
})
export class FormEvent{}