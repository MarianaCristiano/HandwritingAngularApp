import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import {MdCheckboxModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AboutRoutingModule,
        MdCheckboxModule,
        MdSelectModule,
        FormsModule,
        MdInputModule,
        MdButtonModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
