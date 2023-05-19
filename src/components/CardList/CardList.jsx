import React from "react";
import CardItem from "../CardItem/CardItem";

const CardList = () => {
	return (
		<div className="card-items">
			<div className="container my-5 px-0">
				<div className="row">
					<CardItem />
					<CardItem />
					<CardItem />
					<CardItem />
				</div>
			</div>
		</div>
	)

}
export default CardList;