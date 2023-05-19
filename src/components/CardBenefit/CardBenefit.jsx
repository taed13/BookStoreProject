import React from "react";
import IndependentCard from "./components/IndependentCard/IndependentCard";

const CardBenefit = () => {
	return (
		<div class="container-lg alert-danger rounded-2 p-5 text-center">
			<div class="row">
				<IndependentCard />
				<IndependentCard />
				<IndependentCard />
			</div>


		</div>
	)
}

export default CardBenefit;