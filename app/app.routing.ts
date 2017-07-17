import { BourbonsComponent } from "./views/bourbon/bourbons.component";
import { BourbonDetailComponent } from "./views/bourbon/bourbon-detail.component";
import { LoginComponent } from "./views/login/login.component";
import { FooterComponent } from "./views/footer/footer.component";
import { SearchComponent } from "./views/search/search.component";
import { AuthGuard } from "./shared/services/auth-guard.service";
import { FirebaseService } from "./shared/services";

export const routes = [
    { path: "", component: BourbonsComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "bourbon", component: BourbonsComponent },
    { path: "bourbon-detail/:id", component: BourbonDetailComponent },
    { path: "search", component: SearchComponent }
];

export const navigatableComponents = [
    BourbonsComponent,
    BourbonDetailComponent,
    LoginComponent,
    FooterComponent,
    SearchComponent
]

export const providers = [
    AuthGuard,
    FirebaseService
]