import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

export interface GridAttribute {
    column: ColDef[];
    dataSource: any;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input('GridAttributes') GridAttributes!: GridAttribute;

    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true
    };

    gridApi!: GridApi;

    @Output('onSelectionChange') onSelectionChange = new EventEmitter<any>();

    private gridColumnApi!: ColumnApi;

    constructor() { }

    ngOnInit(): void {
    }

    onGridReady(args: GridReadyEvent): void {
        this.gridApi = args.api;
        this.gridColumnApi = args.columnApi;

        if (args.columnApi.getAllColumns()!.length < 7) {
            this.gridApi.sizeColumnsToFit();

            window.addEventListener('resize', () => {
                setTimeout(() => {
                    this.gridApi.sizeColumnsToFit();
                });
            })
        } else {
            const allColumnsId: string[] = [];

            this.gridColumnApi.getAllColumns()?.forEach((column) => {
                allColumnsId.push(column.getId());
            });

            this.gridColumnApi.autoSizeColumns(allColumnsId, false);
        }
    }

    onSelectionChanged(args: any): void {
        this.onSelectionChange.emit(this.gridApi.getSelectedRows()[0]);
    }

    onAddData(data: any): void {
        this.gridApi.applyTransaction({ add: [data] })!;
    }
}
