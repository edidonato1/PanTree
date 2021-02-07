# PanTree
*a smart grocery list application that helps you keep track of your purchases and reminds you when your food has expired*

- [Overview](#overview)
- [Features](#features)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Client (Front End)](#client-front-end)
  - [Wireframes](#wireframes)
  - [Component Tree](#component-tree)
  - [Component Hierarchy](#component-hierarchy)
  - [Component Breakdown](#component-breakdown)
- [Server (Back End)](#server-back-end)
  - [ERD Model](#erd-model)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**PanTree** is a smart list application meant to help the user keep track of their groceres.  The primary functionality allows the user to quickly add items from their food libray to their current shopping list.  Once the item is purchased, it is added to the user's pantry.  Bearing in mind the shelf life of the product, the application will alert the user when they have pantry items that are expired, or will expire soon.

### Features
- User begins with a pre-loaded library of grocery items that have been seeded into the application
- As the user scans through their pantry items, they can quickly add an item to their list from that interface
- From the List UI, the user types what they would like to add to the list.
  - if that item exists in their library, they can click to add
  - if not, they can quickly add the item to their list with a button that is attached to a category.
    - this automatically creates that item in the user's library
    - when the user marks that item as purchsed, they are prompted to add a shelf life if there is not one assigned already
- The user's library can be navigated by category, or by searching the entire inventory, which is organzed alphabetically by default.
- From there, they can view information about these items, and edit them if they choose to.

<br>


## Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  Ruby on Rails   | Back-end framework. |
|    PostgreSQL    | Handles the relational database on which the app is built.|
|       Axios      | HTTP client that will connect the front-end application to our database. |
|       CORS       | Allows for resource sharing between client and server.|
|      React       | Front-end framework. |
|      SASS        | CSS preprocessor |
|   React Router   | Used to seamlessly link and route components.|
| Styled Components| Allows for more dynamic styling of components in React. |
|    FontAwesome   | Icon library for attractive and mobile-friendly UI. |

<br>

## Client (Front End)

### Wireframes

[Figma Hi-Fi Wireframes](https://www.figma.com/file/FunVDgmjqDjeCa6Eg85Iwj/PanTree?node-id=0%3A1)

### Component Hierarchy

``` structure

src
|__ assets/
    |__ icons
    |__ images
|__ components/
    |__ modal
        |__ ItemDetailMobile.jsx
    |__ shared
        |__ nav/ 
            |__ Nav.jsx
            |__ Burger.jsx
        |__ layout/
            |__ Layout.jsx
    |__ library/
        |__ LibraryItem.jsx
        |__ EditItem.jsx
        |__ LibrarySearch.jsx
        |__ LibraryAZ.jsx
        |__ Categories.jsx
        |__ CategoryCard.jsx
        |__ CategoryAZ.jsx
    |__ list/
        |__ UserList.jsx
        |__ ListItem.jsx
        |__ ListSearch.jsx
|__ containers/
    |__ LibraryContainer.jsx
    |__ ListContainer.jsx
    |__ PantryContainer.jsx
|__ screens/
    |__ home/
        |__ Home.jsx
    |__ list/
        |__ List.jsx
    |__ library/
        |__ Library.jsx
    |__ login/
        |__ LandingPage.jsx
        |__ Login.jsx
        |__ Register.jsx
    |__ pantry/
        |__ Pantry.jsx
|__ services/
    |__ apiConfig.js
    |__ auth.js
    |__ users.js
    |__ foods.js
    |__ groceryItems.js
    |__ lists.js
    |__ categories.js
    |__ pantry.js
  App.jsx
  App.css
  index.js

```




<br>

## Server (Back End)

### ERD Model 


[PanTree ERD](https://github.com/edidonato1/PanTree/blob/develop/readme_assets/ERD_model.png)




<!-- ### Code Showcase -->

## Code Issues & Resolutions



