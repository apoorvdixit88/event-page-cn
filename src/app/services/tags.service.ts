import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private apiUrl = "https://api.codingninjas.com/api/v3/event_tags";

  constructor(private http: HttpClient) { }

}
