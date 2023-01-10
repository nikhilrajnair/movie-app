import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitStringPipe } from './pipes/split/split-string.pipe';
import { DefaultimagePipe } from './pipes/defaultimage/defaultimage.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitStringPipe, DefaultimagePipe],
  exports: [SplitStringPipe, DefaultimagePipe],
})
export class UtilsModule {}
