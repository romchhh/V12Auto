import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';
import SocialsButton from './SocialsButton';

function Socials() {
  return (
    <section className="min-h-screen socials bg-gray-800 pt-20"> {/* Додано pt-20 */}
    <div className="text-center text-white">
      <h2 className="text-5xl font-bold mb-6">
        Щоденні пропозиції авто зі США
        </h2>
        <hr className="border-t-2 border-red-300 mx-auto w-1/2 mb-10" />
        <p className="text-xl mb-6">
          Підписуйся на наші соціальні мережі і стеж за новинками
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          {/* Tiktok 1 */}
          <div className="flex flex-col items-center">
            <a href="https://www.tiktok.com/@antip_kievsky_v12" target="_blank" rel="noopener noreferrer">
              <SocialsButton className="bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg mb-4">
                <FaTiktok size={24} />
              </SocialsButton>
            </a>
            <a href="https://www.tiktok.com/@antip_kievsky_v12" target="_blank" rel="noopener noreferrer">
              <article className="overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <img src="tiktok1.jpg" alt="first tiktok" className="max-h-[500px]" />
              </article>
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <a href="https://www.instagram.com/v12auto.ua/" target="_blank" rel="noopener noreferrer">
              <SocialsButton className="bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg mb-4">
                <FaInstagram size={24} />
              </SocialsButton>
            </a>
            <a href="https://www.instagram.com/v12auto.ua/" target="_blank" rel="noopener noreferrer">
              <article className="overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <img src="inst.jpg" alt="instagram" className="max-h-[500px]" />
              </article>
            </a>
          </div>

          {/* Telegram */}
          <div className="flex flex-col items-center">
            <a href="https://t.me/V12autologist" target="_blank" rel="noopener noreferrer">
              <SocialsButton className="bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg mb-4">
                <FaTelegram size={24} />
              </SocialsButton>
            </a>
            <a href="https://t.me/V12autologist" target="_blank" rel="noopener noreferrer">
              <article className="overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <img src="tg.jpg" alt="telegram" className="max-h-[500px]" />
              </article>
            </a>
          </div>

          {/* Tiktok 2 */}
          <div className="flex flex-col items-center">
            <a href="https://www.tiktok.com/@vlados_v12" target="_blank" rel="noopener noreferrer">
              <SocialsButton className="bg-[#003366] text-burgundy hover:bg-[#00244d] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg mb-4">
                <FaTiktok size={24} />
              </SocialsButton>
            </a>
            <a href="https://www.tiktok.com/@vlados_v12" target="_blank" rel="noopener noreferrer">
              <article className="overflow-hidden rounded-xl inline-block hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <img src="tiktok2.PNG" alt="second tiktok" className="max-h-[500px]" />
              </article>
            </a>
          </div>
        </div>
      </div>

      <section id="reviews" className="relative w-full flex flex-col items-center py-10">
        <h2 className="text-5xl font-bold text-center mb-5 text-white">Відгуки клієнтів</h2>
        <hr className="border-t-2 border-gray-300 mx-auto w-1/4 mb-5" />
        <div className="flex flex-col-reverse md:flex-row w-full gap-0">
          <img src="reviews1.png" alt="Відгук 1" className="w-full md:w-1/2 h-auto object-cover" />
          <img src="reviews2.png" alt="Відгук 2" className="w-full md:w-1/2 h-auto object-cover" />
        </div>
      </section>

      <section id="reviews-map" className="relative w-full flex flex-col items-center py-0">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-5xl font-bold text-center mb-10">Ми на карті</h2>
          <hr className="border-t-2 border-gray-300 mx-auto w-1/6 mb-5" />
          <img src="footer1.png" alt="Ми на карті 1" className="w-full h-auto m-0 p-0 object-cover" />
          <img src="footer2.png" alt="Ми на карті 2" className="w-full h-auto m-0 p-0 object-cover" />
        </div>
      </section>
    </section>
  );
}

export default Socials;
