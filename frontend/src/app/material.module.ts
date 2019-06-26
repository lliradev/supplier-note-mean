import { NgModule } from '@angular/core';
import {
    MatSidenavModule, 
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatPaginatorModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }