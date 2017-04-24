

import { Component } from "@angular/core";

@Component({
    selector : 'form-event',
    template : `<label>My Event</label>
                  <input type="text" class="form-control" id="myevent" placeholder="{{placeholder}}">
                  <button class="btn btn-default">Submit</button>
                `
})
export class FormEvent{
    placeholder = 'Enter your event';
}