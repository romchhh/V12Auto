function SocialsButton({ children, className }) {
	return (
	  <button
		className={`bg-accent hover:bg-accent-hover font-medium px-8 py-3 text-base rounded-2xl ${className}`}
		style={{
		  background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255))',
		}} // Keeps your gradient background
	  >
		{/* Apply the red color directly using the hex code */}
		<span style={{ color: '#800020' }}>
		  {children}
		</span>
	  </button>
	);
  }
  
  export default SocialsButton;
  
  