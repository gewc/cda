<template>
  <div class="contianer-fluid">
    <div class="container mt-4">
      <h2>Dashboard</h2>
      <div class="row">
        <div class="col-md-4">
          <RouterLink to="/cooplist">
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
              <div class="card-body">
                <img src="@/assets/list.png" alt="logo">
                <div>List of Cooperatives</div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <img src="@/assets/hr.png" alt="logo">
              <div>Human Resource</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <img src="@/assets/dtr.png" alt="logo">
              <div>Daily Time Record</div>
            </div>
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
}

.container .row .col-md-4 .card .card-body img{
  width: 135px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.container .row .col-md-4 .card div.card-body:hover{
  cursor: pointer;
  animation-name: scalinghover;
  animation-duration: 1s;
}

@keyframes scalinghover {
  from {transform: scale(1);}
  to {transform: scale(1.10);}
}

.container .row .col-md-4 .card .card-body div{
  font-weight: bolder;
  font-family: "Lucida Handwriting";
  margin-top: 10px;
  font-size: 1.23rem;
  text-align: center;
  
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

</style>
