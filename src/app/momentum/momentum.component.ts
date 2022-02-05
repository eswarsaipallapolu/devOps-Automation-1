import { Component, OnInit,HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-momentum',
  templateUrl: './momentum.component.html',
  styleUrls: ['./momentum.component.css']
})
export class MomentumComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>
      {
        let product = params.product;
        console.log(product);

        let color=params.color;
        console.log(color);

        if(color)
        {
          if(color=="red" && product=="mobile")
          {
            loadCss("assets/styles/red.css");
            console.log("This should be able to change to red color background");
          }
          else if(color=="green" && product=="mobile")
          {
            loadCss("assets/styles/green.css");
            console.log("This should be able to change to Green color background");
          }
          else if(color=="blue" && product=="mobile")
          {
            loadCss("assets/styles/blue.css");
            console.log("This should be able to change to Blue color background");
          }
          else if(color=="violet" && product=="mobile")
          {
            loadCss("assets/styles/violet.css");
            console.log("This should be able to change to violet color background");
          }
        }

        function loadCss(filename:any)
        {
          var fileref=document.createElement("link");
          fileref.setAttribute("rel","stylesheet");
          fileref.setAttribute("type","text/css");
          fileref.setAttribute("href",filename);
          if(typeof fileref!="undefined")
          {
            document.getElementsByTagName("head")[0].appendChild(fileref)
          }
        }

        // if(product)
        // {
        //   if(product="mobile")
        //   {
        //     console.log("This should show Mobile Image");
        //   }
        // }
        function putimage()
        {
          if(product=="mobile")
          {
            console.log("this is mobile");
          }
        }
      })
  }
}













// navFixed: boolean = false;
//   private scrollOffset: number = 70;


//   @HostListener('window:scroll')
//   onWindowScroll() {
//     this.navFixed = (window.pageYOffset 
//     || document.documentElement.scrollTop 
//     || document.body.scrollTop || 0
//   ) > this.scrollOffset;
// }