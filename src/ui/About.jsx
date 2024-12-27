import Auction from './Auction';
import Button from './Button';

function About() {
	return (
		<section id='about' className='min-h-screen about relative flex flex-col'>
	<div className='container flex-1 flex items-center'>
		<div className='w-full flex md:justify-end justify-center items-center'>
			<div className='2xl:max-w-[500px] md:max-w-[400px] w-full px-10 md:px-0 flex flex-col gap-7 text-lg z-40 py-10 xl:py-0'>
				<h2 className='text-5xl font-bold text-center'>Про нас</h2>
				<hr className="border-t-2 border-gray-800 mx-auto w-1/3 mb-2" />
				<p className='font-bold text-2xl'>
					V12 - це компанія 2 братів, які борються за високу якість обслуговування і підтримки клієнтів.
				</p>
				<p className='text-lg font-semibold'>
					Чіткі терміни та якісний підхід до роботи на всіх етапах є візитною карткою компанії V12.
				</p>
				<p className='text-lg font-semibold'>
					Робота 24/7 та повна самовіддача команди зроблять неможливе - можливим.
				</p>
				<p className='text-lg font-semibold'>
					Ми будуємо бізнес по-європейськи! Позаштатне гасло компанії «задоволений клієнт - вище доходів», тому у нас 101% задоволених клієнтів!
				</p>
				<p className='text-lg font-semibold'>
					У месенджерах ми кожного дня публікуємо гарячі лоти. Скоріше обирай своє авто та хапай, поки тебе не випередили!
				</p>


						<div className='flex justify-center'>
							<a href='https://t.me/V12_003' target='_blank' rel='noopener noreferrer'>
							<Button className='text-white'>Підібрати авто</Button>
						</a>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full bg-white py-5 z-40'>
			<div className='container flex flex-col gap-4 sm:gap-12 sm:flex-row items-center justify-center lg:justify-between'>
				<Auction src='adesa.png' alt='adesa auction' />
				<Auction src='iaai.png' alt='iaai auction' />
				<Auction src='copart.png' alt='copart auction' />
				<Auction src='manheim.png' alt='manheim auction' />
				<Auction src='carmax.png' alt='carmax auction' className='max-h-10' />
			</div>
		</div>

		</section>
	);
}

export default About;
