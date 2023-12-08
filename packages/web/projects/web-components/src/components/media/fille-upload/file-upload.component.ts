import {
  Component,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output,
} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'freud-file-upload',
  template: `
    <p-fileUpload
      [name]="name"
      [url]="url"
      [auto]="auto"
      [accept]="accept"
      [multiple]="multiple"
      [method]="method"
      [fileLimit]="fileLimit"
      [chooseLabel]="chooseLabel"
      [uploadLabel]="uploadLabel"
      [cancelLabel]="cancelLabel"
      [chooseIcon]="chooseIcon"
      [uploadIcon]="uploadIcon"
      [cancelIcon]="cancelIcon"
      [withCredentials]="withCredentials"
      [mode]="mode"
      [customUpload]="customUpload"
      [showUploadButton]="showUploadButton"
      [showCancelButton]="showCancelButton"
      [headers]="headers"
      [invalidFileSizeMessageSummary]="invalidFileSizeMessageSummary"
      [invalidFileSizeMessageDetail]="invalidFileSizeMessageDetail"
      [invalidFileTypeMessageSummary]="invalidFileTypeMessageSummary"
      [invalidFileLimitMessageDetail]="invalidFileLimitMessageDetail"
      [invalidFileLimitMessageSummary]="invalidFileLimitMessageSummary"
      [invalidFileTypeMessageDetail]="invalidFileTypeMessageDetail"
      (onBeforeUpload)="onBeforeUpload.emit($event)"
      (onSend)="onSend.emit($event)"
      (onError)="onError.emit($event)"
      (onRemove)="onRemove.emit($event)"
      (onSelect)="onSelect.emit($event)"
      (onProgress)="onProgress.emit($event)"
      (uploadHandler)="uploadHandler.emit($event)"
      (onUpload)="onUpload.emit($event)"
    >
    </p-fileUpload>
  `,
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-file-upload',
  },
})
export class FreudFileUploadComponent {
  @Input() name = 'file[]';
  @Input() url!: string;
  @Input() accept!: string;
  @Input() auto = false;
  @Input() multiple = false;
  @Input() withCredentials = false;
  @Input() method: 'post' | 'put' = 'post';
  @Input() mode: 'advanced' | 'basic' = 'advanced';
  @Input() fileLimit!: number;
  @Input() customUpload = false;
  @Input() showUploadButton = true;
  @Input() showCancelButton = true;
  @Input() headers!: HttpHeaders;
  @Input() chooseIcon = 'freud-icon freud-icon-plus';
  @Input() uploadIcon = 'freud-icon freud-icon-upload';
  @Input() cancelIcon = 'freud-icon freud-icon-times';
  @Input() chooseLabel = 'Escolha';
  @Input() uploadLabel = 'Enviar';
  @Input() cancelLabel = 'Cancelar';
  @Input() invalidFileSizeMessageSummary = '{0}: Tamanho do arquivo inválido, ';
  @Input() invalidFileSizeMessageDetail = 'o tamanho máximo de upload é {0}.';
  @Input() invalidFileTypeMessageSummary = '{0}: tipo de arquivo inválido, ';
  @Input() invalidFileLimitMessageDetail = 'limite é de {0} no máximo.';
  @Input() invalidFileLimitMessageSummary =
    'Número máximo de arquivos excedido, ';
  @Input() invalidFileTypeMessageDetail = 'tipos de arquivo permitidos: {0}.';
  @Output() onUpload = new EventEmitter();
  @Output() uploadHandler = new EventEmitter();
  @Output() onBeforeUpload = new EventEmitter();
  @Output() onSend = new EventEmitter();
  @Output() onError = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onProgress = new EventEmitter();
}
