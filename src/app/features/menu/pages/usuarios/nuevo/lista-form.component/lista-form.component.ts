import { Component } from '@angular/core';
import { Usuario } from '../models/usuarioM';

@Component({
  selector: 'app-lista-form',
  templateUrl: './lista-form.component.html',
  styleUrls: ['./lista-form.component.css'],
})
export class ListaUsuariosComponent {

  public listaUsuario: Usuario[] = [];
  public modal: boolean = false;
  public editar: boolean = false;
  public listaUsuarioCopia: Usuario | null = null;

  public recibirUsuario(nuevoUsuario: Usuario) {
    if (this.editar) {
      this.listaUsuario = this.listaUsuario.map(u => {
        if (u.idUsuario === nuevoUsuario.idUsuario) {
          return nuevoUsuario;
        } else {
          return u;
        }
      })

    } else {
      this.listaUsuario = [...this.listaUsuario, nuevoUsuario]
    }
    this.editar = false;
    this.modal = false;
    console.log(nuevoUsuario);
  }

  public abrirModal() {
    this.modal = true;
  }

  public cerrarModal() {
    this.modal = false;
    this.editar = false;
    this.listaUsuarioCopia = null;
  }

  public eliminarUsuario(usuario: Usuario) {
    this.listaUsuario = this.listaUsuario.filter(u => {
      return u.idUsuario !== usuario.idUsuario
    });
    console.log('Usuario eliminado', usuario)

  }

  public editarUsuario(usuario: Usuario) {
    this.listaUsuarioCopia = { ...usuario };
    this.editar = true;
    this.modal = true;
    console.log('Usuario editado', usuario);

  }
}

