import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./_modules/college-dashboard/college-dashboard.module').then(m => m.CollegeDashboardModule) },
{ path: 'applications', loadChildren: () => import('./_modules/applications/applications.module').then(m => m.ApplicationsModule) },
{ path: 'applicationsUser', loadChildren: () => import('./_modules/applications-user/applications-user.module').then(m => m.ApplicationsUserModule) },
{ path: 'closedJobs', loadChildren: () => import('./_modules/closed-jobs/closed-jobs.module').then(m => m.ClosedJobsModule) },
{ path: 'closedJobsFullProfile', loadChildren: () => import('./_modules/closed-jobs-full-profile/closed-jobs-full-profile.module').then(m => m.ClosedJobsFullProfileModule) },
{ path: 'inviteCompanies', loadChildren: () => import('./_modules/invite-companies/invite-companies.module').then(m => m.InviteCompaniesModule) },
{ path: 'inviteFromCompanies', loadChildren: () => import('./_modules/invite-from-companies/invite-from-companies.module').then(m => m.InviteFromCompaniesModule) },
{ path: 'jobsPerCompany', loadChildren: () => import('./_modules/jobs-per-company/jobs-per-company.module').then(m => m.JobsPerCompanyModule) },
{ path: 'messages', loadChildren: () => import('./_modules/messages/messages.module').then(m => m.MessagesModule) },
{ path: 'messageReply', loadChildren: () => import('./_modules/message-reply/message-reply.module').then(m => m.MessageReplyModule) },
{ path: 'myCompanies', loadChildren: () => import('./_modules/my-companies/my-companies.module').then(m => m.MyCompaniesModule) },
{ path: 'newJobs', loadChildren: () => import('./_modules/new-jobs/new-jobs.module').then(m => m.NewJobsModule) },
{ path: 'newJobsFullProfile', loadChildren: () => import('./_modules/new-jobs-full-profile/new-jobs-full-profile.module').then(m => m.NewJobsFullProfileModule) },
{ path: 'offeredMonthly', loadChildren: () => import('./_modules/offered-monthly/offered-monthly.module').then(m => m.OfferedMonthlyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
