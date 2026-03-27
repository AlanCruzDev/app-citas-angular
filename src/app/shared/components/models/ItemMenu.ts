export interface ItemMenu {
  title: string;
  icon: string;
  expanded: boolean;
  submenu: {
    name: string;
    url: string;
  }[];
}
