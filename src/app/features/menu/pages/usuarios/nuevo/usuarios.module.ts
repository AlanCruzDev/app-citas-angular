import { NgModule } from "@angular/core";
import { ListaUsuariosComponent } from "./lista-form.component/lista-form.component";
import { UsuarioFormComponent } from "./usuario-form.component/usuario-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        ListaUsuariosComponent,
        UsuarioFormComponent
    ],

    imports:[ CommonModule,
        ReactiveFormsModule
    ],

    exports: [
        ListaUsuariosComponent,
        UsuarioFormComponent
    ],

})

export class UsuariosModule {

}