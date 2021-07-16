import React from "react";
import { getAbbreviation } from "../utils/index";

export const withCard = WrappedComponent => {
	return ({ contenCards, name }) => {
		return (
			<div className="cards-container">
				{contenCards.map(card => (
					<div className="card-wrapper" key={card[name]}>
						<div className="card">
							<div className="avatar">
								<div className="avatar__abbr">
									{getAbbreviation(card[name])}
								</div>
							</div>
							<WrappedComponent card={card} />
						</div>
					</div>
				))}
			</div>
		);
	};
};
