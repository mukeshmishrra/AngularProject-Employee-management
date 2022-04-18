import { Component, ViewChild, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserAuthService } from './services/user-auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Employee-management';
  

  showToggle: any; 
  mode:any;
  openSidenav: boolean = false;
    private screenWidth$ = new BehaviorSubject<number>
      (window.innerWidth);

    @ViewChild('sidenav')
  matSidenav!: MatSidenav;
  
  //navbar menu items visibility setup
    public loggedIn=false;
    username:any;
    useremail:any;

 constructor(public route:Router , private authapi:UserAuthService){}


  ngOnInit(): void {

    // this.username = localStorage.getItem("username");
    //navbar setup
    //this.loggedIn = this.authapi.isLoggedIn();
    //automatically this code will update the nav menu items
    this.route.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.loggedIn = this.authapi.isLoggedIn();
       this.username = localStorage.getItem("username");
       this.useremail = localStorage.getItem("token") ;
      }
    })
    
    this.getScreenWidth().subscribe(width => {
       if (width < 640) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 640) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }

    });

  }

  //Logout user 
  logoutUser(){
    console.log("logout success")
    this.authapi.logout();
    //location.reload(); ---> working perfect but completely relaoding the page.   
    localStorage.clear();
     //redirect to home page
    this.route.navigate(['/login']);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  }