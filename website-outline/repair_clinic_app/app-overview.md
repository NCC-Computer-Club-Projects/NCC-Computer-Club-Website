# PC Repair Clinic App Outline
Outline the features of the PC Repair App

## Overview
This app will be the main medium for customers and volunteers to interact with the PC Repair Clinic. For customers, the app provides them a way to explore the clinic's services, appraise our member's abilities, and facilitate making repair requests. 

Club members and repair clinic volunteers will be able to log into the app using generated accounts. These member-specific accounts will be used to view and confirm repair requests. Members can also use the app to view their schedules. 

## Accessing the App
Visitors can access the app via the navigation bar on the homepage. Clicking "PC Repair Clinic" will send the client to a new tab with the clinic app. Once there, a login page will pop up to ask whether the visitor is a clinic volunteer or a customer. The visitor must enter this information to be directed to the appropriate page.

### Customer Page
If a visitor selects the "customer" option, they will be immediately directed to the customer side of the app. Customers will then be greeted to the application's main page.

#### Making a request
What questions do we ask to users of our app? What should they consider when requesting a repair?

1. Do I know what my problem is?
 * No: Then we need to provide a way for customers to help us diagnose their problems
 * Yes: Provide an interface for submitting a repair request

2. When is the earliest time and day that I can expect my repairs?

3. Will I be notified of my repair's progress?

4. Can I request a specific person?

## Database Setup
We need a database to hold the information sent to us from users. What data will we collect?

### Data From Request Submissions
* Customer ID
* Name
* Contact Info
  - email, phone
* student status (is customer a student?)
  - student email 
  - student id
* repair request
  - device info
    * devise name
    * model
    * parts queried about
  - full request message 
  - dates
    * When request was made
    * estimated completion date
    * requested completion date
  - estimated cost of repair

### Member/Admin Page
