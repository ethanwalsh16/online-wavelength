import React from 'react';

const Rules: React.FC = () => {
	return (
		<div className="font-serif text-sm text-slate-900 pt-4">
			<ol className="list-decimal list-inside space-y-2">
				<li>divide players into two teams.</li>
				<li>one player from the active team becomes the psychic.</li>
				<li>the psychic draws a card with a spectrum (e.g., Hot-Cold, Happy-Sad).</li>
				<li>the psychic randomizes the slider to set a target location on the spectrum.</li>
				<li>the psychic gives a clue to their team to help them guess the target location.</li>
				<li>the team discusses and decides where to place their guess on the spectrum.</li>
				<li>reveal the target location and score points based on how close the guess is to the target.</li>
				<li>switch teams and repeat until a team reaches the winning score.</li>
			</ol>
		</div>
	);
};

export default Rules;