import React from "react";
import { Card } from "../components/card/Card";

export const withCard = BodyComponent => {
	return ({ contenCards, name }) => {
		return (
			<div className="cards-container">
				{contenCards.map((card, i) => (
					<Card
						key={card[name]}
						card={card}
						name={name}
						bodyComponent={BodyComponent}
						allInfoCard={contenCards[i]}
					/>
				))}
			</div>
		);
	};
};
