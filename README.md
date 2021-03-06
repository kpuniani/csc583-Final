# csc583-Final

# About
Visitor web application is a kiosk device application which is used to collect information of visitors for a corporation.

## Register View

In this view, visitors can register themseleves by providing some necessary information required during registration.

## Admin View

In this view, admin can see the list of all registered users in the table format.

# Non-functional Requirements

## Design

* This project followed same design principles which were followed for the csc-583 class project.
* Application should have two UI views: register users, show register
* Registration page should have responcivness and should work in tablet envoirnment.
* Admin should be able to access list of registered users in tabular form.

## Screenshots
* Responsive Register View

![](images/Register.PNG)

* Admin View

![](images/Admin.PNG)

## Tools

Visitor application has been developed using MEVN(Mongo,express,vue,node)

#### Instlation Instructions

Prerequisties:Node and the Node Package Manager (NPM) should be already installed.

* #### Clone this repository:

  https://github.com/kpuniani/csc583-Final.git

* #### Go to the folder:

  cd csc583-Final

* #### Install all dependicies:

  npm install

Once that is complete you can now run theapplication with the following commands:

* #### To run front end:

  npm run dev

* #### To run backend:

  node server

* #### To start Mongo:

  sudo service mongod start

# Architecture
This application has been developed using MEVN stack.Vuejs has been used to implement the front end and comminucates with the Nodejs,express to get responce using endpoints.Moreover server communicates with the database (mongodb) to store or retrieve data from the database.

# Plan of Action

- [X] Analyzed nonfunctional requirements
- [X] Setup envoirnment and connectivity
- [X] Registration page
- [X] Admin view
- [ ] Mocha Testing
