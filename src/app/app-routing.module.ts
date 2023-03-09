import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { HelperFormComponent } from './helper-form/helper-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientTasksComponent } from './client-tasks/client-tasks.component';
import { HelperDashboardComponent } from './helper-dashboard/helper-dashboard.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { HelperMyAccountComponent } from './helper-my-account/helper-my-account.component';
import { ClientMyAccountComponent } from './client-my-account/client-my-account.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'helper-form', component: HelperFormComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'client-form', component: ClientFormComponent},
  { path: 'client-tasks/:id', component: ClientTasksComponent},
  { path: 'helper-dashboard/:id', component: HelperDashboardComponent },
  { path: 'my-tasks', component: MyTasksComponent},
  { path: 'helper-my-account/:id', component: HelperMyAccountComponent},
  { path: 'client-my-account/:id', component: ClientMyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
