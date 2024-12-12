function Advantage({ src, title, children, index }) {
	return (
		<article className='text-white flex flex-col items-center max-w-80 gap-3 min-w-64'>
			<div>
				{src ? (
					<img src={src} alt={title} className='w-16 h-16' />
				) : (
					<div className='text-4xl text-accent border-2 border-accent rounded-lg w-16 h-16 flex justify-center items-center font-bold bg-white'>
						{index}
					</div>
				)}
			</div>
			<h3 className='uppercase font-bold text-center text-2xl'>{title}</h3> {/* Increased font size */}
			<p className='text-center text-lg font-semibold'>{children}</p> {/* Added font-semibold */}
		</article>
	);
}

export default Advantage;

