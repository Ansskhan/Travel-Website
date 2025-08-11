const navbar = document.getElementById('navbar');
navbar.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand  m-0 p-0" href="#" style="font-size: xx-large;color:green;">
<img src="./logo/1754589986-removebg-preview.png" style="width: 180px ;height: 50px; postion:relative; margin-left:-20px;" alt="">
         
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div class="center">
                    <ul class="navbar-nav centered">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pakistan Tour</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">City Tours</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Packages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Friends packages</a></li>
                                <li><a class="dropdown-item" href="#">Honey moon</a></li>
                                <li><a class="dropdown-item" href="#">Family packages</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
`
   // <img src="" alt="" style="width: 100px; height: 60px;">