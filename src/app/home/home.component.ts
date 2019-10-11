import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //Projects
  Acapella = "1jgddUwNk72BuXGTVT8uXdvH0aw0e9cA0";
  AcapellaTitled = "1Cn6hX8GvrawGXZoqzJZ7CJ1ZGpGHv5zL";

  AcapellaZ1 = "1vCY9JfLrakdgGPvs2LruiU_rqv98SVVv";
  AcapellaZ1Titled = "1a3sMWz1dInEH3H-KgQ3SExusq3TImEsd";

  BigMan = "1goaEkNSESX8fZcJ3KqhSXTYLq1pz5sIb";
  BigManTitled = "1TfdHCcJ1PQ0wSLS9p5dtQqw1LQar_xe6";

  Bwof = "1dg3o0CL_EmoOzPhC8aMbFLwFcSxzEVHk";
  BwofTitled = "1Qg8BN2tuQTKmOa252jML_0SyGvTQ3gmV";

  BlackParty = "1jK5CWD_Dn580fChGVk32LxrQRJu-aA2t";

  Cuco = "1az6tmrBJ49Dd5jUIonS6dCw6lgdgUws_";
  CucoTitled = "1HRR18F13zKxYzYdZxpNFf7o6ELm1kac2";

  EtroAutumnWinter = "1AvylJzutSKThmdvLQgOERvWjEcB5iWIx";
  EtroAutumnWinterTitled = "1ZJQ04zGrfeCE04U4Eq-i70Mnb_Q-kGru";

  EtroNaturaManifesta = "1DB91KQlgKfTmeD70g1HOzQpzmr_Yx1xi";
  EtroNaturaManifestaTitled = "1FUHY5YEc4n5cXiny8gsUoDnwjjvXoCL6";

  BannerLink =
    "https://player.vimeo.com/video/363450178?title=0&byline=0&portrait=0&loop=1&player_id=iframe59217?autoplay=1&autopause=0&muted=1&background=1&playsinline=1";

  GoogleBaseLink = "https://drive.google.com/uc?export=view&id=";
  ProjectIDs = [
    this.Acapella,
    this.AcapellaZ1,
    this.BigMan,
    this.Bwof,
    this.BlackParty,
    this.Cuco,
    this.EtroAutumnWinter,
    this.EtroNaturaManifesta
  ];

  TitledProjectIDs = [
    this.AcapellaTitled,
    this.AcapellaZ1Titled,
    this.BigManTitled,
    this.BwofTitled,
    this.BlackParty,
    this.CucoTitled,
    this.EtroAutumnWinterTitled,
    this.EtroNaturaManifestaTitled
  ];

  //CONTROL VARIABLES
  MouseOverActiveIndex = -1;

  constructor() {}

  ngOnInit() {}
}
