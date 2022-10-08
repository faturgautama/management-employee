import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';

export interface SwalAttribute {
    icon: 'success' | 'warning' | 'error' | 'info',
    title: string,
    content: string
};

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    /**  
     * @description Show Custom Alert using Sweetalert2
     * @params icon: string => 'success' or 'warning' or 'error' or 'info'
     * @params title: string
     * @params content: string
    */
    fireCustomAlert(data: SwalAttribute): Promise<any> {
        return Swal.fire({
            icon: data.icon,
            title: data.title,
            text: data.content,
            showCloseButton: true,
            showCancelButton: false,
        });
    }

    /**  
     * @description Show Loading Spinner Sweetalert2
    */
    fireLoadingSpinner(): any {
        Swal.showLoading();
    }

    /**  
     * @description Close Loading Spinner Sweetalert2
    */
    closeLoadingSpinner(): any {
        Swal.close();
    }

    /**  
     * @description Formatting Date using Moment.js
     * @params date: any
     * @params format: string
    */
    onFormatDate(date: any, format?: string): any {
        moment.locale('id');
        const formattedDate = format ? moment(date).format(format) : moment(date).format();
        return formattedDate;
    }
}
