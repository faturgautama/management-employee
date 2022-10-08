import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ActionButton {
    id: string;
    icon: string;
    title: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Input('PageTitle') PageTitle: string = "";

    @Input('ActionButton') ActionButton: ActionButton[] = [];

    @Output('clickActionButton') clickActionButton = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickActionButton(id: string): void {
        this.clickActionButton.emit(id);
    }
}
