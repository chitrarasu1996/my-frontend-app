import"../styles/header.css"

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand ms-2" href="#">Start Bootsrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>



              <div class="dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu "  >
                  <li><a class="dropdown-item" href="#">All Produts</a></li>
                  <li><a class="dropdown-item" href="#">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#">New arrival</a></li>
                </ul>
              </div>
            </ul>

            <form class="d-flex  align-items-center" role="search">

              


              <button type="submit" class="btn btn-outline-dark me-3" >
              <span><img className=" me-2 text-white   cart-wrapper" src="https://th.bing.com/th/id/OIP.PxlYN8YcOshaxf_o6-7L0AHaGq?w=224&h=202&c=7&r=0&o=5&dpr=2.3&pid=1.7" /></span>

                Cart
                
            <span className=" badge bg-dark ms-2 rounded-pill"> 0</span>
                </button>
            </form>
           


          </div>
        </div>
      </nav></div>
  )
};
export default Header;