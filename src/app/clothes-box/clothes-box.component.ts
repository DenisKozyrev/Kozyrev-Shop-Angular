import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-clothes-box",
  templateUrl: "./clothes-box.component.html",
  styleUrls: ["./clothes-box.component.css"]
})
export class ClothesBoxComponent implements OnInit {
  @Input()
  id: string = "";
  @Input()
  gender: string = "";

  constructor() {}

  ngOnInit() {}
}
