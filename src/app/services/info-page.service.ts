import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';
import { AngularFirestore } from '@angular/fire/firestore';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { DatabaseQuery } from '@angular/fire/database/interfaces';
import { ProfileModel } from '../pages/models/profile.model';
import { EducationModel } from '../pages/models/education.model';
import { ExperienceModel } from '../pages/models/experience.model';
import { PortfolioModel } from '../pages/models/portfolio.model';
import { ServicesModel } from '../pages/models/services.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  info: InfoPage = {};
  loaded = false;

  profileDb: AngularFireObject<ProfileModel>; // Reference to Student object, its an Observable too
  infoDb: AngularFireObject<InfoPage>; // Reference to Student object, its an Observable too
  experienceDb: AngularFireList<ExperienceModel>; // Reference to Student object, its an Observable too
  portfolioDb: AngularFireList<PortfolioModel>; // Reference to Student object, its an Observable too
  educationDb: AngularFireList<EducationModel>; // Reference to Student object, its an Observable too
  servicesDb: AngularFireList<ServicesModel>; // Reference to Student object, its an Observable too

  profile: ProfileModel;
  experiences: ExperienceModel[] = [];
  education: EducationModel[] = [];
  portfolio: PortfolioModel[] = [];
  services: ServicesModel[] = [];

  // profile: AngularFireList<any>; // Reference to Student data list, its an Observable

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.profileDb = this.db.object('Profile/');
    this.educationDb = this.db.list('Education/');
    this.experienceDb = this.db.list('Experience/');
    this.portfolioDb = this.db.list('Portfolio/');
    this.servicesDb = this.db.list('Services/');
    this.infoDb = this.db.object('InfoPage/');
    this.loadProfile();
  }

  private loadProfile() {
    const info: InfoPage = {
      email: 'Kishan.jsk@gmail.com',
      title: 'Kishan Parmar',
      name: 'Kishan Name',
      page_author: 'Kishan Parmar',
      facebook: 'https://www.facebook.com/ERKishan.jsk/',
      twitter: 'https://twitter.com/kishan_jsk',
      instagram: 'https://www.instagram.com/kishanjsk/',
      github: 'https://github.com/kishanjsk',
      linkedIn: 'https://www.linkedin.com/in/kishan-parmar',
      phone: 'tel:+919510077394',
      whatsapp: 'https://wa.me/+919510077394',
    };
    const profilemodel: ProfileModel = {
      FirstName: 'Kishan',
      LastName: 'Parmar',
      MiddleName: 'Rameshkumar',
      Mobile: '+91 95100 77394',
      Profession: 'Sr. Software Developer',
      Email: 'Kishan.jsk@gmail.com',
      Resume:
        'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/document%2FProfile.pdf?alt=media&token=ef72ee3f-b7de-47f8-89d1-4cd49bf9cf24',
      URL: 'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2Fkishanparmar.png?alt=media&token=053c94e0-30d9-42ea-93a4-b2bbfa7552bd',
      Technologies: [
        'Web Developer',
        'API Developer',
        'Infrastructure engineer',
      ],
    };
    const serviceModel: ServicesModel[] = [
      {
        Name: 'WEB DESIGN',
        Description:
          'Design and propotype of web applications based on usability and user experience.',
        Icon: 'ion-monitor',
      },
      {
        Name: 'WEB DEVELOPMENT',
        Description:
          'Complete development of web sites and applications based on your requirements.',
        Icon: 'ion-code-working',
      },
      {
        Name: 'SEO WEB',
        Description:
          'Positioning and techniques for better organic results in web search engines.',
        Icon: 'ion-search',
      },
      {
        Name: 'RESPONSIVE DESIGN',
        Description:
          'Adaptability for applications and websites to different interfaces and devices such as mobiles and tablets.',
        Icon: 'ion-android-phone-portrait',
      },
      {
        Name: 'GRAPHIC DESIGN',
        Description:
          'Design and creation of branding, advertising and illustrations and different multimedia products.',
        Icon: 'ion-paintbrush',
      },
      {
        Name: 'MARKETING SERVICES',
        Description:
          'Inbound Marketing advertising and commercial strategies for automated sales processes.',
        Icon: 'ion-stats-bars',
      },
    ];
    const experienceModel: ExperienceModel[] = [
      {
        CompanyName: 'MagnusMinds IT Solution',
        Position: 'Team Lead (Sr. Software & DevOps Engineer)',
        Description:
          'At MagnusMinds, I am working as a Senior Software & DevOps Engineer. I have total of 6+ years of hands-on experience in C#, .NET Core, MVC, AWS, Azure and SQL Server.',
        Tenure: 'Aug 2019-Present',
        Icon: 'ion-university',
      },
      {
        CompanyName: 'Extentia Information Technology',
        Position: 'Sr. Software developer',
        Description:
          'I was working at Extentia for 6 months as on site developer for Mahindra and Mahindra project and we have completed in just 5 months.',
        Tenure: '2019-2019',
        Icon: 'ion-ribbon-b',
      },
      {
        CompanyName: 'DRC Systems',
        Position: 'Sr. Software developer',
        Description:
          'I started working as a Software developer. and after working on several .NET MVC Web API project, I promoted to Senior Software developer.',
        Tenure: '2018-2019',
        Icon: 'ion-trophy',
      },
      {
        CompanyName: 'TOPS Technologies Pvt. Ltd',
        Position: 'Software Developer',
        Description:
          'My journey with Tops technologies started as software developer, mainly responsible for developing software in C# technology. Apart from that, I worked on various technologies like ASP.NET MVC, WPF, WebForms',
        Tenure: '2014-2018',
        Icon: 'ion-ribbon-a',
      },
      {
        CompanyName: 'Macrosoft Creations',
        Position: 'Jr. Software and Web Developer',
        Description:
          'I worked here as a beginner in .Net developer  and learned lots of new things and new technologies.',
        Tenure: '2013-2014',
        Icon: 'ion-checkmark-circled',
      },
    ];
    const portfolioModel: PortfolioModel[] = [
      {
        Name: 'Architecture Project',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FArchitectureProject.jpg?alt=media&token=09d2b05c-9c85-4f84-a4e2-1a1768dbd801',
        SiteURL: '',
        Description:
          'This architecture is made of several project with different purpose. Projects are as per below. \n 1. Architecture.Web \n 2. Architecture.BusinessLogic \n 3.Architecture.Data \n 4.Architecture.Entities \n 5.Architecture.ILogger \n 6.Architecture.Interface  \n 7.Architecture.Repository    \n 8.Architecture.Services   \n  9.Architecture.Utility   \n 10.Architecture.UnitTesting',
        Category: '.NetCore 3.0',
        GitHubURL: 'https://github.com/kishanjsk/ArchitectueProjectMVCCore',
        Date: 'JAN-2018 AUG-2020',
      },
      {
        Name: 'SunBridge Leasing Corporation',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FSunBridgeLeasingCorporation.jpg?alt=media&token=6130ca44-928a-4afd-9264-2018467340ad',
        SiteURL: 'https://www.sunbridgeleasing.com/',
        Description:
          'SunBridge Leasing makes it easy to offer your customers monthly payment options. We don’t require multi-million dollar annual volume commitments, and we work with any size equipment and vehicle vendor. Your customers get the financing they want, and you still get paid in full right away - everybody wins. Our partners not only sell more goods; our vendor programs also increase margins, improve sales cycle times, and can even help close sales months later. Supported by the industry"s best team of professionals, our programs combine innovative finance tools with lightning fast turnaround - all at no cost to you',
        Category: 'ASP.NET MVC',
        GitHubURL: '',
        Date: 'JAN-2018 AUG-2018',
      },
      {
        Name: 'Custom Permission based Authentication',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FCustomPermissionbasedAuthentication.jpg?alt=media&token=a9fde3cf-f4cc-4579-9642-425d0a654dfd',
        SiteURL: '',
        Description:
          'Permission based Authorization and Authentication project.',
        Category: 'Authorization, Authentication, .NetCore 3.0',
        GitHubURL: 'https://github.com/kishanjsk/IdentityWithPermissions',
        Date: 'JAN-2021 AUG-2021',
      },
      {
        Name: 'WebAPI-HttpCalling-Framework',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FWebAPIHttpCallingFramework.png?alt=media&token=618e0ef9-04a3-4561-9c4e-f191fa095630',
        SiteURL: '',
        Description: 'WebAPI HttPClient APi calling framework developed',
        Category: 'WebAPI, .NetCore 3.0',
        GitHubURL: 'https://github.com/kishanjsk/WebAPI-HttpCalling-Framework',
        Date: 'JAN-2020 AUG-2020',
      },
      {
        Name: 'DataExportClass',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FDataExportClass.jpg?alt=media&token=a4de6b39-3926-453b-b15a-9c0ac5508196',
        SiteURL: '',
        Description: 'Data Export Class created for the ',
        Category: '.Net Framework',
        GitHubURL: 'https://github.com/kishanjsk/DataExportClass',
        Date: 'JAN-2018 AUG-2018',
      },
      {
        Name: 'Local Order Cart',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FLocalOrderCart.jpg?alt=media&token=b0550f3b-46be-473c-824b-c3bc8a24e8b1',
        SiteURL: 'http://localordercart.com/',
        Description:
          'Best way to shop from local store while still maintaining social distancing!! Install the app to experience ease of shopping goods and groceries from your nearest local stores. The customer will place order on the app from home and the merchant will schedule one-time-pickup at a rush-free hour or deliver at doorstep if delivery options facilitated by the merchant. The app keeps you away from the risk of standing in long queues and ensures safety of the merchant as well as his customers.',
        Category: 'IONIC with Angular',
        GitHubURL: '',
        Date: 'JAN-2019 AUG-2020',
      },
      {
        Name: 'Book My Calender',
        ImageURL:
          'https://firebasestorage.googleapis.com/v0/b/kishan-parmar-44133.appspot.com/o/Images%2FBookMyCalender.jpg?alt=media&token=c096fd49-e5ab-48f6-af65-7fb9665da6ce',
        SiteURL: 'https://bookmycalendar.online/',
        Description:
          'Manage all appointments through one simple, clean calendar system to give your business the freedom to grow.',
        Category: '.Net Framework 4.6',
        GitHubURL: '',
        Date: 'JAN-2020 AUG-2020',
      },
    ];
    const educationModel: EducationModel[] = [
      {
        Degree: 'B.E. Computer engineering',
        Details:
          'I have completed the bachlor of engineering with Computer engineering from Gandhinagar Institute of technology with passing year 2014',
        TimePeriod: 'Aug 2010 - June-2014',
        University: 'Gandhinagar Institute of Technology',
      },
      {
        Degree: 'Gujarat Higher Secondary Education Board',
        Details: 'Completed my HSC with Distinction in march 2010',
        TimePeriod: '2010',
        University: 'Gujarat State Education Board',
      },
      {
        Degree: 'Gujarat Secondary Education Board',
        Details: 'Completed my HSC with Distinction in march 2010',
        TimePeriod: '2008',
        University: 'Gujarat State Education Board',
      },
    ];
    var that = this;
    this.profileDb.query.once('value').then(function (datasnapshot) {
      if (datasnapshot.val() == null) {
        that.profileDb.set(profilemodel);
        that.profile = profilemodel;
      } else {
        that.profile = datasnapshot.val();
      }
    });
    this.infoDb.query.once('value').then(function (datasnapshot) {
      if (datasnapshot.val() == null) {
        that.infoDb.set(info);
        that.info = info;
      } else {
        that.info = datasnapshot.val();
      }
    });
    this.educationDb.query.once('value').then(function (datasnapshot) {
      console.log(datasnapshot.val());
      if (datasnapshot.val() == null) {
        educationModel.forEach((item) => {
          that.educationDb.push(item);
          that.education.push(item);
        });
      } else {
        that.education = datasnapshot.val();
      }
    });
    this.portfolioDb.query.once('value').then(function (datasnapshot) {
      if (datasnapshot.val() == null) {
        portfolioModel.forEach((item) => {
          that.portfolioDb.push(item);
          that.portfolio.push(item);
        });
      } else {
        datasnapshot.forEach(function (childSnapshot) {
          that.portfolio.push(childSnapshot.val());
        });
      }
    });
    this.servicesDb.query.once('value').then(function (datasnapshot) {
      console.log('services datasnapshot', datasnapshot.val());
      if (datasnapshot.val() == null) {
        serviceModel.forEach((item) => {
          that.servicesDb.push(item);
          that.services.push(item);
        });
      } else {
        datasnapshot.forEach(function (childSnapshot) {
          console.log('services childSnapshot', childSnapshot.val());
          that.services.push(childSnapshot.val());
        });
      }
    });
    this.experienceDb.query.once('value').then(function (datasnapshot) {
      console.log('datasnapshot', datasnapshot.val());
      if (datasnapshot.val() == null) {
        experienceModel.forEach((item) => {
          that.experienceDb.push(item);
          that.experiences.push(item);
        });
      } else {
        datasnapshot.forEach(function (childSnapshot) {
          console.log('childSnapshot', childSnapshot.val());
          that.experiences.push(childSnapshot.val());
        });
      }
    });
  }
}
