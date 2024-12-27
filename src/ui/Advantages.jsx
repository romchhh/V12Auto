import Advantage from './Advantage';
import Button from './Button';

const ADVANTAGES = [
	{
		img: 'advantage_1.PNG',
		title: 'ДИЛЕРСЬКА ЛІЦЕНЗІЯ ТА РЕЄСТРАЦІЯ',
		description:
			'Маємо дилерську ліцензію та офіційну реєстрацію на аукціонах США та Канади, що дозволяє нам працювати безпосередньо з провідними платформами.',
	},
	{
		img: 'advantage_2.PNG',
		title: 'Ведення під ключ',
		description:
			'Контролюємо увесь процес: від покупки й доставки авто до його ремонту, сертифікації та постановки на український облік з отриманням номерних знаків.',
	},
	{
		img: 'advantage_6.PNG',
		title: 'Перевірка та оцінка на аукціоні',
		description:
			'Надаємо повний сервіс із чесною оцінкою авто, дрібним ремонтом, перевіркою під капотом та підготовкою до транспортування, щоб мінімізувати ризики в дорозі.',
	},
	{
		img: 'advantage_4.PNG',
		title: 'Страхування',
		description:
			'Авто застраховане на кожному етапі транспортування, що забезпечує захист від втрат і пошкоджень.',
	},
	{
		img: 'advantage_5.PNG',
		title: 'Партнерські СТО у Києві',
		description:
			'У Києві клієнти можуть скористатися нашими партнерськими СТО для якісного ремонту з гарантією на всі послуги.',
	},
	{
		img: 'advantage_7.PNG',
		title: 'Прискорене проходження митниці',
		description:
			'Забезпечуємо швидке та легальне митне оформлення за офіційними документами, що мінімізує витрати та ризик штрафів.',
	},
	{
		img: 'advantage_3.PNG',
		title: 'Тюнінг, детейлінг та полірування',
		description:
			'Пропонуємо повний комплекс послуг: від хімчистки до переобладнання авто, щоб надати йому бездоганний вигляд.',
	},
	{
		img: 'advantage_8.PNG',
		title: 'Доступ до закритих аукціонів',
		description:
			'Торгуємо на закритих аукціонах, що відкриває доступ до рідкісних автомобілів, недоступних на відкритих торгах.',
	},
];

function Advantages() {
	return (
		<section
			className='min-h-screen advantages flex flex-col justify-center items-center gap-6 py-10'
			id='advantages'
		>
			<h2 className="text-5xl font-bold text-white mb-5">Наші переваги</h2>
			<hr className="border-t-2 border-red-100 mx-auto w-1/5 mb-5" />

			<div className='container grid xl:grid-cols-4 gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center content-center'>
				{ADVANTAGES.map((advantage, index) => (
					<Advantage
						src={advantage.img}
						title={advantage.title}
						key={index}
						index={index + 1}
					>
						{advantage.description}
					</Advantage>
				))}
			</div>
			<div>
				<a href='https://t.me/V12_003' target='_blank' rel='noopener noreferrer'>
				<Button className='text-white'>Підібрати авто</Button>
				</a>
				
			</div>
		</section>
	);
}

export default Advantages;
