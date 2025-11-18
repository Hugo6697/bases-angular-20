import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero-page/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballPageSuper } from './pages/dragonball-page-super/dragonball-page-super';

export const routes: Routes = [
    {
        path: '',
        component: Counter,
    },
    {
        path: 'hero',
        component: HeroPage
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },

    {
        path: 'dragonball-super',
        component: DragonballPageSuper
    },
    {
        path: '**',
        redirectTo: ''
    }
];
