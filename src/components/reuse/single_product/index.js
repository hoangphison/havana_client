import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config  from '../../../config';

class ProductItem extends Component {
	render() {
		let price = (this.props.infor.promo_price !== 0) ?  this.props.infor.promo_price : this.props.infor.unit_price;
		return (
			<div className="col-md-3 col-md2">
				<div className="col-md1 simpleCart_shelfItem">
					<Link to={`/details/${this.props.infor._id}`}>
						<img className="img-responsive" src= { `${config.BASE_API_URL}img/${this.props.infor.image}` } alt="" />
					</Link>
					<h3> <Link to={`/details/${this.props.infor._id}`}>{ this.props.infor.name }</Link></h3>
					<div className="price">
						<h5 className="item_price">{ price } <u>vnđ</u></h5>
						<Link to={`/details/${this.props.infor._id}`}>
							<button type="button" className="item_add">Xem thêm</button>
						</Link>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
		);
	}

}

export default ProductItem;