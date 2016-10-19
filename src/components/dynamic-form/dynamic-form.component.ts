import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { Question } from '../../models';

@Component({
    selector: 'dynamic-form',
    template: ''
})
export class DynamicFormComponent implements OnInit {
    @Input() questions:Array<Question>;

    formGroup: FormGroup;

    ngOnInit() {
        this.formGroup = this.generateForm(this.questions);
    }

    private generateForm(questions: Array<Question>): FormGroup {
        return new FormGroup({});
    }
}