/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CdkTreeModule} from '@cdk/tree';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatTreeModule
} from '@material';

import {ExampleModule} from '../example/example-module';

import {ChecklistNestedTreeDemo} from './checklist-tree-demo/checklist-nested-tree-demo';
import {ChecklistTreeDemo} from './checklist-tree-demo/checklist-tree-demo';
import {DynamicTreeDemo} from './dynamic-tree-demo/dynamic-tree-demo';
import {LoadmoreTreeDemo} from './loadmore-tree-demo/loadmore-tree-demo';
import {TreeDemo} from './tree-demo';

@NgModule({
  imports: [
    CdkTreeModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    MatProgressBarModule,
    ExampleModule,
    RouterModule.forChild([{path: '', component: TreeDemo}]),
  ],
  declarations:
      [ChecklistNestedTreeDemo, ChecklistTreeDemo, TreeDemo, DynamicTreeDemo, LoadmoreTreeDemo],
})
export class TreeDemoModule {
}
