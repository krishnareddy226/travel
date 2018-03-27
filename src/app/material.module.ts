import { NgModule } from '@angular/core';
import {
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatButtonModule,
    MatButtonToggleModule, MatTabsModule, MatCardModule } from '@angular/material';

    import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports : [
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatCardModule
    ],
    exports : [
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatCardModule
    ]
})

export class MaterialModule { }
