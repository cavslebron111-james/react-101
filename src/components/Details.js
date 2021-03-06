import React,{Component} from 'react';
import{ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component{
render(){
	return(
<ProductConsumer>
{value =>{
	const {id,company,img,info,price,title,inCart} =
	value.detailProduct;
	return (
	  <div className="container py-5">
      <div className="row">
<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
<h1>{title}</h1>
</div>
</div>
   <div className="row">
 <div className="col-10 mx-auto col-md-6 my-3">
 <img src={img} className="img-fluid" alt="product" />
 </div>
 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
 <h1> model: {title} </h1>
 <h2 className="text-title text-uppercase text-muted mt-3 mb-2">
  made by : <span className="text-uppercase"> {company}</span></h2>
 
<h1 className="text-capitalize font-weight-bold mt-3 mb-0">
  Our Price is : <span className="text-uppercase"> {price}$ </span></h1>

  <p className="text-capitalize font-weight-bold mt-3 mb-0"> some info about product </p>
  <p className="text-muted-lead"> {info}</p>
 <div>
	 <Link to="/">
	 <ButtonContainer className="text-capitalize font-weight-bold">
		 back to products
	 </ButtonContainer>
	 <ButtonContainer cart className="text-capitalize font-weight-bold"
		 disabled={inCart?true:false}
		onClick={()=>{
			value.addToCart(id);
			value.openModal(id);
		}
		}
		>
		 {inCart ?"inCart" : "add to Cart"}
	 </ButtonContainer>
	 
	 </Link>
 </div>
 
 
 
 </div>
</div>






</div>










		);
}}

</ProductConsumer>


		);
}
}