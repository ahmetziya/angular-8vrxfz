import { ChipListModule } from '@syncfusion/ej2-angular-buttons';

import { BreadcrumbAllModule, MenuModule } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BreadcrumbAllModule, ChipListModule, MenuModule, BrowserModule, CommonModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
