import { Component, TemplateRef } from '@angular/core';
import { ToastService } from './services/toast.service';



@Component({
    selector: 'app-toasts',
    template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <i class="fa-solid fa-info-circle"></i>
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>  {{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
    host: { '[class.ngb-toasts]': 'true' }
})
export class ToastsContainer {

    constructor(public toastService: ToastService) { }

    isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
