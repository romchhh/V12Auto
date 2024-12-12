
function PurchaseItem({ title, index, children }) {
	return (
		<div className="max-w-52 flex flex-col items-center gap-5">
			<div className="text-5xl font-extrabold text-white">{index}</div> {/* Збільшено розмір цифри */}
			<div className="w-20 h-20 bg-accent flex justify-center items-center text-white text-4xl shadow-xl rounded-full">
				{children}
			</div>
			<h3 className="text-lg font-medium text-center text-white">{title}</h3>
		</div>
	);
}

export default PurchaseItem;