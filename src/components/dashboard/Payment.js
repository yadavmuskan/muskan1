// import React from 'react';
// import '../styles/Pay.css';

// function Payment() {
//     return (
//         <div class="container-from">
//         <div class="row justify-content-center">
//                             <div class="col-md-8"  id='from-1'>
//                                 <div class="card-from">
//                                     <div class="card-header">Register</div>
//                                     <div class="card-body">
//                                     <form>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
//     </div>
  
//   </div>
 
  
  
  
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck"/>
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
  
                                        
//                                     </div>
        
//                                 </div>
//                             </div>
//                         </div>
//         </div>
//     );   
// }

// export default Payment;



import React from 'react';
import '../styles/Pay.css';

function Payment() {
    return(
      <div class="container">
        <form id="contact" action="" method="post">
            <h1>Registration Form</h1>
            <div class="row">
                {/* <!-- first column --> */}
                <div class="column">                        
                    <fieldset>
                        <input type="text" placeholder="Full Name *" name="name" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input type="text" placeholder="Father name *" name="fname" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input type="email" placeholder="Your email *" name="email" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input type="text" placeholder="Date of birth *" name="date" onfocus="(this.type = 'date')" required autofocus/>
                    </fieldset>
                    {/* <!-- adding all country code list --> */}
                    <fieldset>
                        <input type="text" placeholder="Phone number *" name="phone" id="phone" required autofocus/>
                    </fieldset>
                </div>
                
            </div>
            {/* <!-- submit button --> */}
            <fieldset>
                <button type="submit" id="button">Submit Now</button>
            </fieldset>
        </form>
    </div>
 
    )
}

export default Payment;