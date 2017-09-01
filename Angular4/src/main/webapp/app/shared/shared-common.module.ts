import {LOCALE_ID, NgModule} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Angular4SharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent, JhiLanguageHelper} from './';

@NgModule({
    imports: [
        Angular4SharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'pt-br'
        },
    ],
    exports: [
        Angular4SharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class Angular4SharedCommonModule {}
