# UFOs
Javascript, Bootstrap and UFOs!

## Overview

In this analysis an HTML file is created to show the data stored in a JavaScript array by converting it to a table. Search functionality is added to this html to allow users to filter data on multiple criteria at the same time. Bootstrap functions are added to optimize the look of the webpage and to make it responsive for optimal viewing on different devices.

## Tools Used

  - VS Code
  - JavaScript and ES6 capabilities such as arrow functions and D3 library.
  - HTML
  - Bootstrap 3 and CSS Components .

### Results

 - The search works on multiple criteria - Date, City, State, Country & Shape

    _Image 1: Search Criteria Fields_

    <img width="227" alt="Search Criteria" src="https://user-images.githubusercontent.com/104603128/180664821-f154ce72-56ef-483a-bed6-db001dd6d360.png">


 - The search is set to listen to any changes on the filters field. Any data entered in the filters is recorded and is used to search and return relevant results from the data table.

    _Image 2: Search by Country_

    <img width="944" alt="SearchbyCountry" src="https://user-images.githubusercontent.com/104603128/180664949-a352f027-a8e2-4812-91b1-29595e933f47.png">


    _Image 3: Search by Country & State_

   <img width="942" alt="SearchbyCountryState" src="https://user-images.githubusercontent.com/104603128/180664952-9299d741-f590-48b9-9d9f-aeccb019c767.png">


    _Image 4: Search by Country, State & Date_

    <img width="941" alt="SearchbyCountryStateDate" src="https://user-images.githubusercontent.com/104603128/180664956-3a7b4e74-99bb-4c3a-8dd1-9e8113bab23b.png">


    _Image 5: Search by Country, State, Date & City_

    <img width="946" alt="SearchbyDateCityStateCountry" src="https://user-images.githubusercontent.com/104603128/180664961-5d5cb6a6-7e8c-4a82-8915-f6f770d6d696.png">


    _Image 6: Search by all fields - Country, State, Date, City & Shape_

    <img width="944" alt="SearchbyAll" src="https://user-images.githubusercontent.com/104603128/180664970-fef2ffe4-46ca-4812-bed5-b1a86004a3f5.png">


### Summary

#### Drawback

While the search allows the user to filter the available data on multiple criterion but if the search criteria is out of the range of the available data no message is returned to the user stating this.

#### Scope for improvements

  - If filter entered is outside the range of the available data a message should be returned saying this.
  - Additionally, the range of available data can also be provided to the user for fields having limited data variety like date, shape & country.
  - Since there is no search button it might be a good idea to tell users to hit "Enter" to search.
  - The search criteria only matches the exact search phrase there is no possibility to catch or eliminate spaces or upper case phrases. This can be incorporated in future versions.
