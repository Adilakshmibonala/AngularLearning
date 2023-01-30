import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-transulator',
  templateUrl: './google-transulator.component.html',
  styleUrls: ['./google-transulator.component.css']
})
export class GoogleTransulatorComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  // http: HttpClient;
  sourceLanguage: string = "";
  destinationLanguage: string = "";
  textToTransulate: string = "";
  responseText: string = "";
  stausCode: number;

  public LanguageDetails: Object [] = [
    "Albanian", "Amharic", "Arabic", "Armenian",
    "Assamese", "Aymara", "Azerbaijani", "Bambara",
    "Basque", "Belarusian", "Bengali", "Bhojpuri", 
    "Bosnian", "Bulgarian", "Catalan", "Cebuano",
    "Chinese", "Corsican", "Croatian", "Czech",
    "Danish", "Dhivehi", "German", "Greek",
    "Hindi", "Japanese", "Tamil", "Telugu",
    "English"
  ];

  getSourceLanguage(event: any) {
    console.log(event);
    this.sourceLanguage = event.target.value;
  }
  getDestinationLanguage(event: any) {
    console.log(event);
    this.destinationLanguage = event.target.value;
  }
  async transulateText() {
    let body = {
      "source_language": this.sourceLanguage,
      "target_language": this.destinationLanguage,
      "text": this.textToTransulate
    }
    console.log("HttpClient", this.http);
    try {
      let response = await this.http.post("http://127.0.0.1:8000/api/v1/language/translate/", body).toPromise();
      this.responseText = response["data"];
      this.stausCode = 200;
      console.log("Response", response, this.responseText);
      // return await this.http.request("post", "http://127.0.0.1:8000/api/v1/language/translate/", {body: body});
    } catch (e) {
      this.responseText = e["error"]["data"];
      this.stausCode = e["status"];
    }
    console.log("stausCode", this.stausCode);
  }
}
