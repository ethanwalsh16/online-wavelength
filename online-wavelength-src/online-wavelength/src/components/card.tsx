import React from 'react';

interface CardProps {
	leftValue: string;
	rightValue: string;
}

const Card: React.FC<CardProps> = ({ leftValue, rightValue }) => {
	return (
		<div className="border-2 border-slate-500 w-[30%] ml-[35%] rounded-xl h-[210px] grid grid-cols-2 overflow-hidden">
			<p className="font-serif text-slate-900 md:text-lg text-sm px-1 border-r-2 border-slate-500 bg-sky-200 flex items-center justify-center">{leftValue}</p>
			<p className="font-serif text-slate-900 md:text-lg text-sm px-1 bg-rose-300 flex items-center justify-center">{rightValue}</p>
		</div>
	);
};

export default Card;