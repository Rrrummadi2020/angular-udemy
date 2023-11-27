import { ParentComponent } from './parent/parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TempDrivFormComponent } from './temp-driv-form/temp-driv-form.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { authGuard } from './auth.guard';
import { loadModuleGuard } from './load-module.guard';
import { deactivateAuthGuard } from './deactivate-auth.guard';
import { LoginComponent } from './login/login.component';
import { AnimationPComponent } from './animation-p/animation-p.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'child-route',
        component: ChildRouteComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'parent', component: ParentComponent },
  {
    path: 'one',
    component: OneComponent,
    canDeactivate: [deactivateAuthGuard],
  },
  { path: 'two', component: TwoComponent },
  { path: 'template-forms', component: TempDrivFormComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'animation', component: AnimationPComponent },
  {
    path: 'product',
    canLoad: [loadModuleGuard],
    loadChildren: () =>
      import('./productm/productm.module').then((m) => m.ProductModule),
  },
  // { path: '**', redirectTo: '/home' }// to see the error if we use relative path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
