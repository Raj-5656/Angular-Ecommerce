import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        // component:RegisterComponent,
        redirectTo: 'dashboard/product',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: MainLayoutComponent,
        children: [
            {
                path: "product",
                loadChildren: () => import('./features/product/product-module').then(m => m.ProductModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./features/cart/cart-module').then(m => m.CartModule)
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];
