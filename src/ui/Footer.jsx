function Footer() {
	return (
	  <section id="reviews" className="py-0 m-0">
		<div
		  className="w-full p-0 m-0"
		  style={{
			backgroundImage: 'url(/public/reviews.jpg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		  }}
		>
		  <div className="flex flex-col items-center text-black">
			{/* Text with provided styles */}
			<h2 className="text-5xl font-bold text-center mb-5">
			  Ми на карті
			</h2>
			<hr className="border-t-2 border-gray-300 mx-auto w-1/5 mb-5" />
  
			{/* Images */}
			<img
			  src="footer1.png"
			  alt="Відгук 1"
			  className="w-full h-auto m-0 p-0 object-cover"
			/>
			<img
			  src="footer2.png"
			  alt="Відгук 2"
			  className="w-full h-auto m-0 p-0 object-cover"
			/>
		  </div>
		</div>
	  </section>
	);
  }
  
  export default Footer;
  