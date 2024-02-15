
import './App.css'
import img1 from './images/hero-bg.jpg'
import img2 from './images/logo.png'
import img3 from './images/product-img-1.jpg'
import img4 from './images/product-img-2.jpg'
import img5 from './images/product-img-3.jpg'
import img6 from './images/a.jpg'
import img7 from './images/abt.jpg'
import img8 from './images/1.jpg'
function App() {


  return (
    <>
    <main>
      <div className='body'>
        
        <div className='color-overlay'></div>

        <div>
          <img className='logo' src={img2} alt="" />

          <ul className='list'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Help</a></li>
            <div><a className='bars' href=""><i class="fa-solid fa-bars fa-2x"></i></a></div>

          </ul>
     
        </div>
        <div className='head'>
          <h1 style={{color:'rgb(248, 93, 3)',fontSize:'50px',fontWeight:'bold'}}>Delicious Seasonal Fruits</h1>
          <button className='btn'>Fruit Collection</button>
        </div>
        
      </div>
      <div className='service'>
        
        <div className='item'>
          
        <i class="fa-solid fa-truck-fast me-2 fa-3x"></i>
            <span style={{color:'black',fontSize:'25px'}}>Free Shipping</span>
         
        </div>

       
          <div className='item'>
          <i class="fa-solid fa-phone me-2 fa-3x"></i>
            <span style={{color:'black',fontSize:'25px'}}>24/7 Support</span>
          </div>

         <div className='item'>
         <i class="fa-solid fa-arrows-rotate me-2 fa-3x"></i>
            <span style={{color:'black',fontSize:'25px'}}>Refund</span>
         </div>
       
        
        
      </div>
      <div className='products'>
        <h2 style={{fontWeight:'bold'}} className='d-flex justify-content-center align-items-center gap-2 mt-4'><span style={{color:'rgb(248, 93, 3'}}>Our</span>  Products</h2>
        <div className='fruits mt-5'>
          <div className='fruit-item'>
            <img className='fruit' src={img3} alt="" />
            <h4 className='text-center'>Strawberry</h4>
            <h5 className='text-center'>per kg</h5>
            <h4 className='text-center'>85$</h4>
            <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'6px',width:'140px',height:'40px',border:'none',marginLeft:'9rem'}}><span><i style={{color:'orange'}} class="fa-solid fa-cart-shopping"></i>Add to Cart</span></button>

          </div>

          <div className='fruit-item'>
            <img  className='fruit' src={img4} alt="" />
            <h4 className='text-center'>Berry</h4>
            <h5 className='text-center'>per kg</h5>
            <h4 className='text-center'>70$</h4>
            <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'6px',width:'140px',height:'40px',border:'none',marginLeft:'9rem'}}><span><i style={{color:'orange'}} class="fa-solid fa-cart-shopping"></i>Add to Cart</span></button>

          </div>

          <div className='fruit-item'>
            <img className='fruit' src={img5} alt="" />
            <h4 className='text-center'>Lemon</h4>
            <h5 className='text-center'>per kg</h5>
            <h4 className='text-center'>35$</h4>
            <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'6px',width:'140px',height:'40px',border:'none',marginLeft:'9rem'}}><span><i style={{color:'orange'}} class="fa-solid fa-cart-shopping"></i>Add to Cart</span></button>

          </div>
        </div>
      </div>

      <div className='offer mt-5'>
        <div className='off'>
          <div className='circle' style={{border:'none',borderRadius:'50%',backgroundColor:'rgb(248, 93, 3)',width:'100px',height:'100px',}}>
            <p><span className='d-flex justify-content-center align-items-center mt-3'>30%</span>off per kg</p>
          </div>
          <img style={{width:'470px',height:'403px'}} src={img6} alt="" />
        </div>
        <div className='off'>
          <h1><span style={{color:'rgb(248, 93, 3)',fontWeight:'bold'}}>Deal</span> of the month </h1>
          <h4>HIKAN STRWABERRY</h4>
          <p>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam <br /> similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis <br /> iste natus error sit voluptatem accusant</p>
          <div className='box'>
            <div className='box-item'>
              <h3 style={{color:'rgb(248, 93, 3)'}}>00</h3>
              <p>Days</p>
            </div>
            <div className='box-item'>
              <h3 style={{color:'rgb(248, 93, 3)'}}>00</h3>
              <p>Hours</p>
            </div>
            <div className='box-item'>
              <h3 style={{color:'rgb(248, 93, 3)'}}>00</h3>
              <p>Mins</p>
            </div>
            <div className='box-item'>
              <h3 style={{color:'rgb(248, 93, 3)'}}>00</h3>
              <p>Secs</p>
            </div>
          </div>

          <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'6px',width:'140px',height:'40px',border:'none',marginTop:'2rem'}}><span><i style={{color:'orange'}} class="fa-solid fa-cart-shopping"></i>Add to Cart</span></button>

  
        </div>

      </div>
      <div className='about mt-5'>
        <div className='about-ite'>
          <img style={{width:'510px',height:'460px'}} src={img7} alt="" />
        </div>
        <div className='about-ite'>
          <span>Since Year 2021</span>
          <h1>We are <span style={{color:'rgb(248, 93, 3'}}>Fruitkha</span></h1>
          <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et <br /> massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget <br /> dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, <br /> interdum velit. Nam eu molestie lorem.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Sapiente facilis illo repellat veritatis minus, et labore minima <br /> mollitia qui ducimus.</p>
          <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'20px',width:'140px',height:'40px',border:'none',marginTop:'2rem'}}><span>Know more</span></button>

        </div>

      </div>
      <div className='sale mt-5'>
        <img className='sale1' style={{width:'100%',height:'400px'}} src={img8} alt="" />
       <div className='ms-5' style={{position:'absolute',marginTop:'-17rem',}}>
         <h2 style={{fontSize:'50px'}} >December sale is on! <br /> with big <span style={{color:'rgb(248, 93, 3)',fontWeight:'bold'}}>Discount...</span></h2>
         <h4><span style={{color:'rgb(248, 93, 3)',fontSize:'50px'}} >50% </span>off</h4>
         <button style={{backgroundColor:'rgb(248, 93, 3',color:'white',borderRadius:'20px',width:'140px',height:'40px',border:'none'}}><span>Shop Now</span></button>

       </div>
      </div>

      <footer>
        <div className='footer mt-5'>
          <div style={{color:'white'}} className='foot-item mt-5 aboutus'>
            <h4>About Us</h4>
            <p5>Ut enim ad minim veniam perspiciatis <br /> unde omnis iste natus error sit <br /> voluptatem accusantium doloremque <br />  laudantium, totam rem aperiam, <br /> eaque ipsa quae.</p5>
          </div>
          <div style={{color:'white'}} className='foot-item mt-5'>
            <h4>Get in Touch</h4>
            <h5>34/8, East Hukupara, Gifirtok, Sadan.</h5>
            <h5>support@fruitkha.com</h5>
            <h5>+00 111 222 3333</h5>
          </div>
          <div style={{color:'white'}} className='foot-item mt-5 pages'>
            <h4>Pages</h4>
            <h5><i class="fa-solid fa-arrow-right"></i> Home</h5>
            <h5><i class="fa-solid fa-arrow-right"></i> About</h5>
            <h5><i class="fa-solid fa-arrow-right"></i> News</h5>
            <h5><i class="fa-solid fa-arrow-right"></i> Shop</h5>
            <h5><i class="fa-solid fa-arrow-right"></i> Help</h5>




          </div>
          <div style={{color:'white'}} className='foot-item mt-5'>
            <h4>Subscribe</h4>
            <h5 className='sub'>Subscribe to our mailing list to get the <br /> latest updates.</h5>
            <div>
              <input type="text" id='email' placeholder='Email' />
              <button><i class="fa-solid fa-paper-plane"></i></button>
              
            </div>
            <div className='mt-3'>
            <a href=""><i class="fa-regular fa-envelope fa-2x me-4"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter fa-2x me-4"></i></a>
            <a href=""><i class="fa-brands fa-instagram fa-2x me-4"></i></a>
            <a href=""><i class="fa-brands fa-facebook fa-2x me-4"></i></a>
            </div>
          </div>
        </div>
        <h6 style={{color:'white'}} className='text-center mt-5'>Copyrights © 2019 - Imran Hossain, All Rights Reserved.</h6>
      </footer>
    </main>

    </>
  )
}

export default App
