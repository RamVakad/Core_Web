(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 400px;\n    margin: auto;\n}\n\n.mat-card-actions {\n    display: flex;\n}\n\n.mat-card-actions .flex-spacer {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5mbGV4LXNwYWNlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title> Collab # </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p> Collab Details</p>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <div class=\"button-row\">\n        <button mat-raised-button color = \"primary\"> Join </button>\n        <button mat-raised-button color = \"primary\"> Leave </button>\n        <button mat-raised-button color = \"primary\"> Delete</button>\n    </div>\n  </mat-card-actions>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.ts ***!
  \***********************************************************/
/*! exports provided: CollabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabCardComponent", function() { return CollabCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent() {
    }
    CollabCardComponent.prototype.ngOnInit = function () {
    };
    CollabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collab-card',
            template: __webpack_require__(/*! ./collab-card.component.html */ "./src/app/home/collab-card/collab-card.component.html"),
            styles: [__webpack_require__(/*! ./collab-card.component.css */ "./src/app/home/collab-card/collab-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollabCardComponent);
    return CollabCardComponent;
}());



/***/ }),

/***/ "./src/app/home/collab-list/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    padding: 16px;\n    text-align: center;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29sbGFiLWxpc3QvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     <!--\n       <button>\n          <a (click) =\"userDetails()\">Profile</a>\n        </button>\n      <button>\n        </button>\n      <button>\n          <a (click) =\"userSkill()\">userSkill</a>\n        </button>\n        <button>\n          <a (click) =\"userClass()\">userClass</a>\n        </button>\n        <button>\n          <a (click) =\"searchSkill()\">searchSkill</a>\n        </button>\n        <button>\n          <a (click) =\"collabDetails()\">collabDetails</a>\n        </button>\n        <button>\n          <a (click) =\"AllCollabs()\">AllCollabs</a>\n        </button>\n        <button>\n          <a (click) =\"activeCollabs()\">activeCollabs</a>\n        </button>\n        <button>\n          <a (click) =\"myCollabs()\">myCollabs</a>\n        </button>\n\n        <button>\n          <a (click) =\"logOut()\">Logout</a>\n        </button> <br> <br> <br>\n\n\n            <h1>Profile of {{name}}</h1> <br>\n            <td>Github : <a href=\"{{github}}\">{{github}}</a></td> <br>\n            <td>Linkedin : <a href=\"{{linkedin}}\">{{linkedin}}</a></td> <br>\n            <td>{{skills}}</td> <br>\n            <td>{{classes}}</td> <br>\n            <td>{{username}}</td> <br>\n\n            <table style=\"width : 50%\">\n              <thead>\n                <tr>\n                  <th>name</th>\n                  <th>Github</th>\n                  <th>linkedin</th>\n                  <th>skills</th>\n                  <th>classes</th>\n                  <th>username</th>\n                </tr>\n              </thead>\n                  \n          </table> \n\n     -->\n   <mat-tab-group>\n\n      <mat-tab label=\"Active Collabs\">\n        <ng-template matTabContent>\n            Active Collabs\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"Recommended Collabs\">\n        <ng-template matTabContent>\n            Recommended Collabs\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"My Collabs\">\n        <ng-template matTabContent>\n            My Collabs\n        </ng-template>\n      </mat-tab>\n\n   </mat-tab-group>\n     \n          \n            \n"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.userDetails = function () {
        var _this = this;
        this.userService.getUserdetails().subscribe(function (data) {
            //setter 
            _this.username = "Email : " + data.username;
            _this.github = data.github;
            _this.linkedin = data.linkedin;
            _this.skills = "Skills : " + data.skills;
            _this.classes = "Classes : " + data.classes;
            _this.name = data.name;
        });
    };
    HomeComponent.prototype.userPicture = function () {
        ///user/profilePicture
        this.userService.getPicture().subscribe(function (data) {
            // BitmapImage image = new BitmapImage();
            // image.SetSource(stream);  
        });
    };
    //user/skills
    HomeComponent.prototype.userSkill = function () {
        this.userService.getSkill().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.userClass = function () {
        this.userService.getClasses().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.searchSkill = function () {
        this.userService.getSkill().subscribe(function (data) {
            console.log(data);
        });
    };
    // return array of JSON OBJECTS
    HomeComponent.prototype.collabDetails = function () {
        this.userService.collabDetails().subscribe(function (data) {
            console.log(data[0].owner);
            console.log(data[0].members);
            //write a for loop to inter arrar
            //for(int i = 0 ; data.length ; i ++){
            /**
       * id = data[i].owner
       * owner = data[i].
       * size = data[i]
       * members = data[i]
       * date   = data[i]
       * duration =  data[i]
       * location = data[i]
       * status = data[i]
       * title = data[i]
       * description = data[i]
       * classes = data[i]
       * skills = data[i]
       * applicants = data[i]
       *  */
            //}
        });
    };
    HomeComponent.prototype.AllCollabs = function () {
        this.userService.allCollabs().subscribe(function (data) {
            console.log(data);
            /**
             * id
             * owner
             * size
             * members
             * date
             * duration
             * location
             * status
             * title
             * description
             * classes
             * skills
             * applicants
             *  */
        });
    };
    HomeComponent.prototype.activeCollabs = function () {
        this.userService.activeCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.myCollabs = function () {
        this.userService.myCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/collab-list/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/collab-list/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

// testuser1@myhunter.cuny.edu
[
    {
        "_id": {
            "$oid": "5ca82697e1fe6800040efb48"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 5,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1560465000955,
        "duration": 259200000,
        "location": "MLH NYC Headquarters",
        "status": true,
        "title": "MLH Hackathon",
        "description": "looking for 4 more people to attend hackathon as a group",
        "classes": [
            "Any"
        ],
        "skills": [
            "C++",
            "Java",
            "Python",
            "Firebase"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca826e6e1fe6800040efb49"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 6,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555171800432,
        "duration": 5184000000,
        "location": "Anywhere",
        "status": true,
        "title": "Web App for Portfolio",
        "description": "looking to discuss/build a web app for a portfolio",
        "classes": [
            "CS 335",
            "Practical Web Development"
        ],
        "skills": [
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82726e1fe6800040efb4a"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 30,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557939600823,
        "duration": 345600000,
        "location": "Hunter 6th Floor Library",
        "status": true,
        "title": "CS 235 section 3 Final review",
        "description": "study for finals exam, all are welcome",
        "classes": [
            "CS 235"
        ],
        "skills": [
            "C++"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82761e1fe6800040efb4b"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 20,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555018200807,
        "duration": 7776000000,
        "location": "Hunter North 10th floor, walk towards the labs and make a right",
        "status": true,
        "title": "Hunter ASM Weekly Meeting",
        "description": "come join fellow CS students for weekly meetings from 5:30 PM to 7:30 PM",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca827c2e1fe6800040efb4c"
        },
        "owner": "testuser99@myhunter.cuny.edu",
        "size": 4,
        "members": [
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557271500378,
        "duration": 259200000,
        "location": "127 Madison Avenue",
        "status": true,
        "title": "Intro to Python meetup",
        "description": "looking for smal group of people to attend a Python intro meetup",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82c35e1fe6800040efb4f"
        },
        "owner": "frank.white@myhunter.cuny.edu",
        "size": 1,
        "members": [
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1554546780684,
        "duration": 3801600000,
        "location": "test",
        "status": true,
        "title": "test edits",
        "description": "test",
        "classes": [
            "123"
        ],
        "skills": [
            "123"
        ],
        "applicants": []
    }
];


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _collab_list_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "collabinfo",
        component: _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_1__["CollabCardComponent"]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");





//Material Components





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_9__["CollabCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map