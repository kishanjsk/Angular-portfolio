import { Component, OnInit } from '@angular/core';
import { combineChange } from '@angular/fire/firestore';
import { ProjectsService } from 'src/app/services/projects.service';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    public _service: InfoPageService,
    public projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    // console.log('Projects:profile', this._service.profile);
    // console.log('Projects:portfolio', this._service.portfolio);
  }
}
