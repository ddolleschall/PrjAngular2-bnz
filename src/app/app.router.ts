import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";

const routes :Routes = [
    {
        path:'',
        component: LayoutComponent
    }
]

export const appRouter = RouterModule.forRoot(routes)
