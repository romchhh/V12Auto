import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';
import SocialsButton from './SocialsButton';

function Socials() {
  return (
    <section className='min-h-screen socials py-10'>
      <div className='z-100'>
        <h2 className='text-5xl font-bold text-white text-center mb-6'>
          Щоденні пропозиції авто зі США
        </h2>
        <hr className="border-t-2 border-red-300 mx-auto w-1/2 mb-10" />
        <p className='text-center text-white py-10 text-xl'>
          Підписуйся на наші соціальні мережі і стеж за новинками
        </p>
        <div className='flex justify-center gap-10 flex-wrap'>
          <a href='https://www.tiktok.com/@antip_kievsky_v12' target='_blank' rel='noopener noreferrer'>
            <SocialsButton className='bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg'>
              <FaTiktok size={24} />
            </SocialsButton>
          </a>
          <a href='https://www.instagram.com/v12auto.ua/' target='_blank' rel='noopener noreferrer'>
            <SocialsButton className='bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg'>
              <FaInstagram size={24} />
            </SocialsButton>
          </a>
          <a href='https://t.me/V12autologist' target='_blank' rel='noopener noreferrer'>
            <SocialsButton className='bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg'>
              <FaTelegram size={24} />
            </SocialsButton>
          </a>
          <a href='https://www.tiktok.com/@vlados_v12' target='_blank' rel='noopener noreferrer'>
            <SocialsButton className='bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg'>
              <FaTiktok size={24} />
            </SocialsButton>
          </a>


				</div>
				<div className='flex justify-center gap-10 mt-10 flex-wrap'>
					<a href='https://www.tiktok.com/@antip_kievsky_v12' target='_blank' rel='noopener noreferrer'>
						<article className='overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl'>
							<img
								src='tiktok1.jpg'
								alt='first tiktok'
								className='max-h-[500px]'
							/>
						</article>
					</a>
					<a href='https://www.instagram.com/v12auto.ua/' target='_blank' rel='noopener noreferrer'>
						<article className='overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl'>
							<img src='inst.jpg' alt='instagram' className='max-h-[500px]' />
						</article>
					</a>
					<a href='https://t.me/V12autologist' target='_blank' rel='noopener noreferrer'>
						<article className='overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl'>
							<img src='tg.jpg' alt='telegram' className='max-h-[500px]' />
						</article>
					</a>
					<a href='https://www.tiktok.com/@vlados_v12' target='_blank' rel='noopener noreferrer'>
						<article className='overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl'>
							<img
								src='tiktok2.PNG'
								alt='second tiktok'
								className='max-h-[500px]'
							/>
						</article>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Socials;
