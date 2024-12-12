function Button({ children, className }) {
	return (
		<button
			className={`bg-accent hover:bg-accent-hover font-medium px-8 py-3 text-base rounded-2xl ${className}`}
			style={{ background: 'linear-gradient(to right, #6B0000, #8B0000)' }} // Темно-червоний градієнт
		>
			{children}
		</button>
	);
}

export default Button;
