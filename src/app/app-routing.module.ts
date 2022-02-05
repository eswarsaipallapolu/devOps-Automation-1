import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { MomentumComponent } from './momentum/momentum.component';
import { FlipkartComponent } from './flipkart/flipkart.component';

const routes: Routes = 
[
  {path:'amazon',component:AmazonComponent},
  {path:'momentum',component:MomentumComponent},
  {path:'flipkart',component:FlipkartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
