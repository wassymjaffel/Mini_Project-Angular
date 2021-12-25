import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UserComponent } from './user/user.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { StComponent } from './st/st.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserformreactiveComponent } from './userformreactive/userformreactive.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { WlayedComponent } from './wlayed/wlayed.component';
import { BouComponent } from './bou/bou.component';
import { ShowoneproductComponent } from './showoneproduct/showoneproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ListProviderComponentComponent } from './list-provider-component/list-provider-component.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';
import { AddproviderformComponent } from './addproviderform/addproviderform.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { AddproducttdComponent } from './addproducttd/addproducttd.component';
import { FormpComponent } from './formp/formp.component';
import { TestComponent } from './traitement/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListUserComponentComponent,
    UserComponent,
    FournisseurComponentComponent,
    FilmsComponentComponent,
    ListProduitsComponentComponent,
    NotfoundComponent,
    DetailComponent,
    DeleteComponent,
    AddComponent,
    StComponent,
    HeaderComponent,
    HomeComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    CategoryComponent,
    FormComponent,
    UserFormComponent,
    UserformreactiveComponent,
    FormUserComponent,
    LoginuserComponent,
    WlayedComponent,
    BouComponent,
    ShowoneproductComponent,
    ShowproductsComponent,
    ListProviderComponentComponent,
    ShowOneProviderComponent,
    AddproviderformComponent,
    InvoiceComponent,
    UpdateInvoiceComponent,
    AddproducttdComponent,
    FormpComponent,
    TestComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
