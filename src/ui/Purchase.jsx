import {
	FaCar,
	FaClipboardList,
	FaFileInvoice,
	FaSearch,
} from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { RiAuctionFill } from 'react-icons/ri';
import PurchaseItem from './PurchaseItem';

const PURCHASES = [
	{
		img: <FaFileInvoice size={24} />,
		title: 'Заявка на сайті або за телефоном',
	},
	{
		img: <FaSearch size={24} />,
		title: 'Консультація та підбір авто під ваші потреби',
	},
	{ img: <FaClipboardList size={24} />, title: 'Укладання договору та оплата' },
	{
		img: <RiAuctionFill size={24} />,
		title: 'Викупаємо авто на аукціоні, доставка в Україну',
	},
	{ img: <GiAutoRepair size={24} />, title: 'Ремонт на партнерському СТО у Києві' },
	{ img: <FaCar size={24} />, title: 'Видача готового авто в МРЕО' },
];

function Purchase() {
	return (
		<section
			id="purchase-scheme"
			className="min-h-screen flex items-center justify-center py-5"
			style={{
				backgroundImage: 'url(/public/purchase.jpg)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed', // Додаємо фіксовану позицію фону
				position: 'relative',
			}}
		>
			<div className="container flex flex-col gap-6">
				<h2 className="text-5xl font-bold lg:text-center text-center text-white">
					Схема купівлі авто із США
				</h2>
				<hr className="border-t-2 border-red-100 mx-auto w-2/5 mb-0" />
				<div className="inline-flex gap-4 flex-wrap justify-center m-auto">
					{PURCHASES.map((item, index) => (
						<PurchaseItem index={index + 1} title={item.title} key={index}>
							{item.img}
						</PurchaseItem>
					))}
				</div>
			</div>
		</section>
	);
}

export default Purchase;

