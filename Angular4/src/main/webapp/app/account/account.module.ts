import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Angular4SharedModule} from '../shared';

import {
    accountState,
    ActivateComponent,
    ActivateService,
    PasswordComponent,
    PasswordResetFinishComponent,
    PasswordResetFinishService,
    PasswordResetInitComponent,
    PasswordResetInitService,
    PasswordService,
    PasswordStrengthBarComponent,
    Register,
    RegisterComponent,
    SessionsComponent,
    SessionsService,
    SettingsComponent
} from './';

@NgModule({
    imports: [
        Angular4SharedModule,
        RouterModule.forRoot(accountState, { useHash: true })
    ],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SessionsComponent,
        SettingsComponent
    ],
    providers: [
        SessionsService,
        Register,
        ActivateService,
        PasswordService,
        PasswordResetInitService,
        PasswordResetFinishService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Angular4AccountModule {}
