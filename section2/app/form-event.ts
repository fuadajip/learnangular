

import { Component, Input} from "@angular/core";

@Component({
    selector : 'form-event',
    template : `<label>My Event</label>
                  <input type="text" class="form-control" id="myevent" placeholder="{{placeholdertext}}">
                  <button class="btn btn-default">Submit</button>
                `
})
export class FormEvent{

    @Input('placeholderInput')
    placeholdertext = 'Enter your event';   

}