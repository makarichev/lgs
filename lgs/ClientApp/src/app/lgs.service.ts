import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({providedIn: "root"})
export class LgsService {
  constructor(private _http: HttpClient) {}

  getData() {return this._http.get(`${environment.commonApi}api/tovs`)}
}
