# **COVID Contact Manager**

A COVID-19 contact management app with charts and maps built using ReactJS, TypeScript, TailwindCSS, Redux, React Router v6, and React Query.

## **Table of Contents**

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [APIs](#apis)
- [Technologies](#technologies)
- [Credits](#credits)
- [License](#license)

## **Project Structure**

```
├── src
|   ├── components
|   │   ├── Chart
|   │   ├── ConnectedContactCard
|   │   ├── ConnectedContactForm
|   │   ├── ContactCard
|   │   ├── Map
|   │   ├── NavBar
|   │   └── SideBar
|   ├── pages
|   │   ├── AddContactForm
|   │   ├── ContactDetails
|   │   ├── Contacts
|   │   ├── Dashboard
|   │   ├── EditContactForm
|   │   └── Home
|   ├── redux
|   │   ├── slices
|   |   │   └── contactsSlice
|   │   └── store
|   ├── App
|   ├── index.css
|   └── index.tsx
├── public
└── README.md
```

## **Installation**

To install the dependencies for the app, run:

```bash
npm install
```

## **Usage**

To start the app, run:

```bash
npm start
```

This will start the app on [http://localhost:3000](http://localhost:3000).

## **Features**

The app includes the following pages and features:

- **Contacts Page:** A page that displays a list of contacts, allows users to add new contacts, view contact details, edit and delete contacts.
- **Dashboard Page:** A page that displays charts and maps related to COVID-19 cases worldwide and by country.

## **APIs**

The app uses the following APIs to fetch data:

- **Country-specific COVID-19 data:** [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- **COVID-19 cases historical data:** [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## **Technologies**

The app was built using the following technologies:

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router v6](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)
- [Redux](https://redux.js.org/)

## **License**

This app is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify it as you see fit.
