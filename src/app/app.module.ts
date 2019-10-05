import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { ConnectContacts } from "./ConnectToContacts/ConnectToContacts";
import { AutoCompleteSearchComponent } from "./auto-complete-search/auto-complete-search.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";
import { DialogService } from "./services/dialog.service";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { UserLocationService } from "./services/user-location.service";

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    ConnectContacts,
    AutoCompleteSearchComponent,
    DialogComponent,
    AppHeaderComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserReportsComponent
    // CourseDialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [DialogService, UserLocationService],
  bootstrap: [AppComponent]
  // entryComponents: [CourseDialogComponent]
})
export class AppModule {}
