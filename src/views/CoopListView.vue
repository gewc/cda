<template>

  <div class="contianer-fluid">
    <div class="container mt-4">
      <h2>List of Cooperatives </h2>
      <fa icon="circle-plus" class="fa-1x addBtn" />
      
      
      <div class="container-search">
        <h1 class="heading">Search Cooperative's Here</h1>
        <div class="searchInputWrapper">
          <input class="searchInput" type="text" placeholder='Type RR No. or Cooperative Name'>
          <!-- <fa icon="search" class="fa-1x" /> -->
        </div>
      </div>

      <!-- Displayed Searched Coops -->
      <div class="row mt-5">
        <div class="col-md-4 mt-2">
          <div class="box">
              <p>KABALIKAT NG BAYAN (KABAYAN) MULTI PURPOSE COOPERATIVE</p>
              <span>9520-10000001</span>
          </div>
        </div>
      </div>

      <!-- Displayed Details of Coop's Clicked -->
      <div class="row mt-5">
        <div class="col-md-12"><h4>Details of Cooperative</h4></div>
        <div class="col-md-6 mt-3">
          <h6 class="mt-3">Cooperative Name: </h6>
          <h6 class="mt-3">RR No.: </h6>
          <h6 class="mt-3">Year Registered: </h6>
          <h6 class="mt-3">Date Registered: </h6>
          <h6 class="mt-3">Address: </h6>
          <h6 class="mt-3">Province: </h6>
          <h6 class="mt-3">Municipality: </h6>
          <h6 class="mt-3">Status: </h6>
          <h6 class="mt-3">Category: </h6>
        </div>
        <div class="col-md-6 mt-3">
          <h6 class="mt-3">Type: </h6>
          <h6 class="mt-3">Nature: </h6>
          <h6 class="mt-3">Commodity: </h6>
          <h6 class="mt-3">Ammendments No: </h6>
          <h6 class="mt-3">Ammendment Date: </h6>
          <h6 class="mt-3">Old Name: </h6>
          <h6 class="mt-3">Contact Person: </h6>
          <h6 class="mt-3">CDS Assigned: </h6>
          
        </div>
      </div>

      <!-- Cooperative Status Counts -->
      <div class="row mt-5">
        <div class="col-md-3 mb-3">
          <div class="card bg-success">
            <p>1678</p>
            <span>Compliant</span>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card bg-primary">
            <p>678</p>
            <span>Non-Compliant</span>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card bg-warning">
            <p>678</p>
            <span>Under Dissolution</span>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <div class="card bg-danger">
            <p>678</p>
            <span>Dissolve</span>
          </div>
        </div>
      </div>
    

    </div>
  </div>
</template>

<style scoped>



.contianer-fluid .container h2{
  font-weight: bolder;
  font-family: "Lucida Handwriting";
  margin-bottom: 30px;
  font-size: 1.5rem;
  display: inline-block;
}

.contianer-fluid .container .addBtn{
  font-weight: bolder;
  font-size: 1.5rem;
  display: inline-block;
  color: #3aa573;
  margin-left: 17px;
  cursor: pointer;
  transition: transform 2s;
}

.contianer-fluid .container svg.addBtn:hover{
  transform: scale(1.3);
  
}

.container .row .col-md-4, .contianer-fluid .container h2 {
  animation-name: scaling;
  animation-duration: 2s;
}

@keyframes scaling {
  from {transform: scale(0.3);}
  to {transform: scale(1);}
}

a:hover { text-decoration: none; }
a:active { text-decoration: none; }
a:link { text-decoration: none; }

/* Quick and dirty normalize hax */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #eee;
  color: #a1a1a1;
  font-family: sans-serif;
}

.container-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  margin-bottom: 1.1rem;
  font-size: 1.2rem;
}

.searchInputWrapper {
  position: relative;
}

.searchInput {
  width: 35rem;
  height: 3rem;
  padding: 0 1rem; 
  border-radius: 2rem;
  border: none;
  transition: transform 0.1s ease-in-out;
  background: #f5f5f5;
  box-shadow: 3px 4px #e5e5e5;
}

::placeholder {
  color: #a1a1a1;
}

/* hide the placeholder text on focus */
:focus::placeholder {
  text-indent: -999px
}

.searchInput:focus {
  outline: none;
  transform: scale(1.1);
  transition: all 0.1s ease-in-out;
}

.searchInputIcon {
  position: absolute;
  right: 0.8rem;
  top: 0.5rem;
  color: #a1a1a1;
  transition: all 0.1s ease-in-out;
}

.container:focus-within > 
.searchInputWrapper > .searchInputIcon {
  right: 0.2rem;
}

/* box */

.box {
    /* width: 340px; */
    height: 100px;
    background: rgba( 255, 255, 255, 0.60 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition: all 1s ease;
    box-shadow: 0 6px 11px 0 rgba( 31, 38, 135, 0.37 );
    padding: 6px 10px;
}
.box:hover {
    box-shadow: 0 2px 32px 0 rgba( 31, 38, 135, 0.35 );
}
.box img {
    width:50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    padding: 20px;
}
.box h4 {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    margin-top: 28px;
    margin-left: 80px;
    font-size: 14px;
}
.box h5 {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    margin-top: 48px;
    margin-left: 80px;
    color : #808080;
}
.box p {
    /* position: absolute; */
    /* margin-top: 10px;
    margin-left: 20px; */
    font-size: 1rem;
    font-weight: bold;
}
.box a {
    text-decoration: none;
    color: #00acee;
}
span {
     /* position: absolute;
     margin-top: 70px; */
     /* margin-left: 20px; */
     color : #808080;
     font-size: 13px;  
     font-size: 0.8rem;
    font-weight: bold;  
}

/* Card Counts */
.card {
  height: 45px;
  box-shadow: 5px 5px 8px 0 rgb(31 38 133 / 52%);
}


.card p{
  font-size: 1.6rem;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 3px;
  display: block;
  color: #ffffff;
}

.card span{
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 7px;
  margin-left: 15px;
  display: block;
  color: aliceblue;
}

</style>
