function Reviews() {
	return (
	  <section
		id="reviews"
		className="relative w-full min-h-screen flex flex-col items-center py-10 bg-white"
	  >
		<h2 className="text-5xl font-bold text-center mb-5">Відгуки клієнтів</h2>
		<hr className="border-t-2 border-gray-300 mx-auto w-1/4 mb-5" />
		<div className="flex w-full gap-0">
		  <img
			src="reviews1.png"
			alt="Відгук 1"
			className="w-1/2 h-auto object-cover"
		  />
		  <img
			src="reviews2.png"
			alt="Відгук 2"
			className="w-1/2 h-auto object-cover"
		  />
		</div>
	  </section>
	);
  }
  
  export default Reviews;
  