import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';

import {
    AccountService,
    Angular4SharedCommonModule,
    Angular4SharedLibsModule,
    AuthServerProvider,
    CSRFService,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent,
    LoginModalService,
    LoginService,
    Principal,
    StateStorageService,
    UserService
} from './';

@NgModule({
    imports: [
        Angular4SharedLibsModule,
        Angular4SharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        Angular4SharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Angular4SharedModule {}
