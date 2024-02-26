import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  id?: number;
  headTitle1?: string;
  mainTitle?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  item?: Menu[]
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
}

)
export class NavservicesService {

  public language: boolean = false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public horizontal: boolean = window.innerWidth < 991 ? false : true;
  public isDisplay: boolean;
  public pinned: boolean;
  public search: boolean;
  public isShow: boolean = false;

  constructor() { }


  @HostListener('window:resize', ['$event'])


  Nvabarmenu: Menu[] = [
    // {
    //   id: 1,
    //   icon: 'Grid',
    //   mainTitle: 'page',
    //   headTitle1: 'pages',
    //   item: [
    //     {
    //       title: 'pages',
    //       icon: 'sample-page',
    //       type: 'sub',
    //       active: true,
    //       children: [
    //         { path: '/pages/sample-page1', title: 'Sample-page1', type: 'link' },
    //         { path: '/pages/sample-page2', title: 'Sample-page2', type: 'link' },
    //       ],
    //     },
    //     {
    //       title: 'Sample-page',
    //       icon: 'sample-page',
    //       type: 'link',
    //       active: true,
    //       path: '/sample-page',
    //       bookmark:true
    //     },
    //   ]
    // },

    {
      id: 1,
      icon: 'Grid',
      mainTitle: 'Dashboard',
      headTitle1: 'Dashboard',
      path: '/pages/sample-page1',
      active: true,
      item: [ 
        {
          title: 'Sample-page',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '',
          bookmark:true
        },
      ]
    },
    {
      id: 2,
      icon: 'Grid',
      mainTitle: 'User Management',
      headTitle1: 'User Management',
      path: '/system-admin/Practice Admin', 
      active: true,
      item: [ 
        {
          title: 'Practice Admin',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '/system-admin/practice-admin',
          bookmark:true
        },
        {
          title: 'Therapists',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '/system-admin/therapists',
          bookmark:true
        },
        {
          title: 'Support Team',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '/system-admin/support-team',
          bookmark:true
        },
        {
          title: 'Billing Team',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '/system-admin/billing-team',
          bookmark:true
        },
        {
          title: 'Patients',
          icon: 'sample-page',
          type: 'link',
          active: true,
          path: '/system-admin/patients',
          bookmark:true
        },
      ]
    },


  ]
  items = new BehaviorSubject<Menu[]>(this.Nvabarmenu);

};