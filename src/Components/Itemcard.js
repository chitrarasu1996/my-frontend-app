import "../styles/itemcard.css"

const ItemCard = () => {
  return (
    <div className="container  ">

      <div className="row  d-flex my-5 justify-content-around    col-mb-5 ">

        <div className="col-md-4 px-4 mt-5">
          <div class="card  " >


            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />


            <div class="card-body bg-transparent ">
              <h5 class="card-title fw-bolder text-center">Fancy Product</h5>
              <p class="card-text ">$40.00 - $80.00</p>
              <a href="#" class="btn btn-outline-dark mt-5 border-dark py-2" >Add To Cart</a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 px-4  mt-5">

          <div class="card " >
            <div className="bg-dark badge position-absolute top-0 end-0 tex-white">sale</div>
            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
            <div class="card-body bg-transparent ">
              <div className="d-flex flex-column align-items-center">
                <h5 class="card-title fw-bolder text-center">Special Item</h5>
                <p className="card-text star-wrapper"><img className="star-wrapper" src="https://community.powerbi.com/oxcrx34285/attachments/oxcrx34285/QuickMeasuresGallery/207/1/5-star-rating.png" /></p>
              </div>
              <p class=" "><span className="text-muted text-decoration-line-through">$12.00</span> $80.00 </p>
              <a href="#" class="btn btn-light border-dark btn-outline-dark ">Add To Cart</a>


            </div>
          </div>
        </div>
        <div className="col-md-4 px-4  mt-5">

          <div class="card" >
            <div className="bg-dark badge position-absolute top-0 end-0 tex-white">sale</div>
            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
            <div class="card-body bg-transparent">
              <h5 class="card-title fw-bolder text-center">Sale item </h5>
              <p class=" "><span className="text-muted text-decoration-line-through">$50.00</span> $25.00 </p>
              <a href="#" class="btn btn-light mt-5 border-dark btn-outline-dark">View Options</a>
            </div>
          </div>
        </div>




      </div>
      <div className="row  d-flex align-items-center justify-content-around  my-5  col-mb-5 item-card-wrapper">

        <div className=" col-md-4 px-4">

          <div class="card align-items-center " >

            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
            <div class="card-body bg-transparent ">
              <div className="d-flex flex-column align-items-center">
                <h5 class="card-title fw-bolder text-center">Popular Item</h5>
                <p className="card-text star-wrapper"><img className="star-wrapper" src="https://community.powerbi.com/oxcrx34285/attachments/oxcrx34285/QuickMeasuresGallery/207/1/5-star-rating.png" /></p>
              </div>
              <p class=" "><span className="text-muted text-decoration-line-through">$40.00</span> $80.00 </p>
              <a href="#" class="btn btn-light border-dark btn-outline-dark ">Add To Cart</a>


            </div>
          </div>
        </div>
        <div className="col-md-4 px-4">

          <div class="card" >
            <div className="bg-dark badge position-absolute top-0 end-0 tex-white">sale</div>
            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
            <div class="card-body bg-transparent">
              <h5 class="card-title fw-bolder text-center">Sale Item</h5>
              <p class=" "><span className="text-muted text-decoration-line-through">$50.00</span> $25.00 </p>
              <a href="#" class="btn btn-light mt-5 border-dark btn-outline-dark">Add To Cart</a>
            </div>
          </div>
        </div>


        <div className="col-md-4 px-4 ">
          <div class="card  " >


            <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />


            <div class="card-body bg-transparent">
              <h5 class="card-title  fw-bolder text-center">Fancy Product</h5>
              <p class="card-text ">$120.00 - $280.00</p>
              <a href="#" class="btn btn-light mt-5 border-dark btn-outline-dark" >View options</a>
            </div>
          </div>
        </div>
        <div>
        <div className="row  d-flex align-items-center justify-content-center my-5  col-mb-5 item-card-wrapper">
       
        <div className=" col-md-4 px-4">

<div class="card " >
  <div className="bg-dark badge position-absolute top-0 end-0 tex-white">sale</div>
  <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
  <div class="card-body bg-transparent ">
    <div className="d-flex flex-column align-items-center">
      <h5 class="card-title fw-bolder text-center">Special Item</h5>
      <p className="card-text star-wrapper"><img className="star-wrapper" src="https://community.powerbi.com/oxcrx34285/attachments/oxcrx34285/QuickMeasuresGallery/207/1/5-star-rating.png" /></p>
    </div>
    <p class=" "><span className="text-muted text-decoration-line-through">$12.00</span> $80.00 </p>
    <a href="#" class="btn btn-light border-dark btn-outline-dark  ">Add To Cart</a>


  </div>
</div>
</div>
<div className=" col-md-4 px-4">

<div class="card " >
  <div className="bg-dark badge position-absolute top-0 end-0 tex-white">sale</div>
  <img src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg" class="card-img-top" alt="..." />
  <div class="card-body bg-transparent ">
    <div className="d-flex flex-column align-items-center">
      <h5 class="card-title fw-bolder text-center">Popular Item</h5>
      <p className="card-text star-wrapper"><img className="star-wrapper" src="https://community.powerbi.com/oxcrx34285/attachments/oxcrx34285/QuickMeasuresGallery/207/1/5-star-rating.png" /></p>
    </div>
    <p>$40.00</p>
    <a href="#" class="btn btn-light border-dark btn-outline-dark ">Add To Cart</a>


  </div>
</div>
</div>

        </div>
        </div>





      </div>
     

    </div>





  )
};
export default ItemCard;