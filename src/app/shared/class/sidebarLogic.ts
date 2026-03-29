import { ItemMenu } from '../components/models/ItemMenu';

export class SidebarLogic {
  public sidebarVisible: boolean = true;
  public dropdownVisible: boolean = false;
  public menuItems: ItemMenu[] = [];

  constructor() {
    this.qobtenerDatosByRol('usuario');
  }

  public qobtenerDatosByRol(menu: string): ItemMenu[] {
    if (menu === 'usuario') {
      this.menuItems = [
        {
          title: 'Citas',
          icon: '../../../assets/img/cita.png',
          expanded: false,
          submenu: [{ name: 'Consultar Citas', url: '' }],
        },
        {
          title: 'Catalogo',
          icon: '../../../assets/img/catalogo.png',
          expanded: false,
          submenu: [
            { name: 'Lista de Servicios', url: '' },
            { name: 'Agregar Servicio', url: '' },
          ],
        },
        {
          title: 'Configuracion',
          icon: '../../../assets/img/configuraciones.png',
          expanded: false,
          submenu: [{ name: 'Mi Perfil', url: '' }],
        },
      ];
      return this.menuItems;
    } else {
      return [];
    }
  }
  public toggleSection(index: number) {
    this.menuItems.forEach((item, i) => {
      if (i === index) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
    });
  }

  public toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  public toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
