<template>
<div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <RouterLink to="/dashboard" class="navbar-brand">
            <img src="@/assets/cdalogo.png" alt="" width="25" height="25" class="d-inline-block align-text-top">
            <span>Regional Office X</span>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <font-awesome-icon icon="user" class="fa-1x" />
                            <span>First Name</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><RouterLink class="dropdown-item" to="/">Account</RouterLink></li>
                            <li><RouterLink class="dropdown-item" to="/register">Register User</RouterLink></li>
                            <li><RouterLink class="dropdown-item" to="/">Logout</RouterLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    </nav>
    
</div>
</template>

<script>
export default {
    name: 'Nav-Com',
}
</script>

<style scoped>
.container-fluid .navbar-brand span {
  margin-left: 5px;
  font-weight: bolder;
  font-family: "Lucida Handwriting";
}

.container-fluid .nav-link span {
  margin-left: 7px;
  font-weight: bolder;
  font-family: "Lucida Handwriting";
}



</style>