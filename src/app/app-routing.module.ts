import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddproducttdComponent } from './addproducttd/addproducttd.component';
import { BouComponent } from './bou/bou.component';
import { CategoryComponent } from './category/category.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormpComponent } from './formp/formp.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { ListProviderComponentComponent } from './list-provider-component/list-provider-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { ShowproductsComponent } from './showproducts/showproducts.component';
import { StComponent } from './st/st.component';
import { TestComponent } from './traitement/test/test.component';
import { UserComponent } from './user/user.component';
import { UserformreactiveComponent } from './userformreactive/userformreactive.component';

const routes: Routes = [
{path:"user",component:UserComponent, 
},
{path:"product",component:MainProductComponent},
{path:"showproducts",component:ShowproductsComponent},
{path:"showprovider",component:ListProviderComponentComponent},
{path:"login",component:LoginuserComponent},
{path:"provider",component:MainProviderComponent},
{path:"invoice",component:InvoiceComponent},
{path:"detail/:id/:test",component:DetailComponent},
{path:"form",component:FormComponent},
{path:"bou",component:BouComponent},
{path:"listuser",component:ListUserComponentComponent},
{path:"listproduits",component:ListProduitsComponentComponent},
{path:"Addproducttd",component:AddproducttdComponent},
{path:"Formp",component:FormpComponent},
{path:"Userform",component:UserformreactiveComponent},
{path:"service",component:TestComponent},

{path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
