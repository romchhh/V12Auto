import { useRef } from 'react';
import { toast } from 'react-toastify';
import Button2 from './Button2';
import Input from './Input';
import PhoneInput from './PhoneInput';

function Hero() {
    const phoneInputRef = useRef(null); // Створюємо реф для PhoneInput
	const nameInputRef = useRef(null); // Створюємо реф для імені

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name');
        const phone = formData.get('phone');

        // Очищення полів форми
        form.reset();
        

        if (name === '' || phone === '') {
            toast.error('Введіть всі дані!', {
                position: 'top-right',
                autoClose: 5000,
            });
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone }),
            });

            if (response.ok) {
                toast.success('Повідомлення надіслано!', {
                    position: 'top-right',
                    autoClose: 4000,
                });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            toast.error('Не вдалося надіслати повідомлення. Спробуйте пізніше.', {
                position: 'top-right',
                autoClose: 4000,
            });
        }
    };

    return (
        <section className='hero z-0'>
            <div className='container h-full relative'>
                <div className='absolute top-1/2 translate-y-[-50%] flex items-center justify-between w-full left-1/2 translate-x-[-50%] gap-5 lg:flex-row flex-col'>
                    <h1 className='xl:text-6xl md:text-5xl text-4xl text-white font-bold uppercase bg-black/45 xl:px-24 xl:py-10 sm:px-12 px-6 py-5 rounded-3xl text-center '>
                        Авто з США <br />
                        <span className='xl:text-3xl lg:text-2xl text-xl'>
                            Під ключ 
                        </span>
                    </h1>
                    <form
                        className='w-full 2xl:max-w-[500px] max-w-[400px] flex flex-col items-center md:p-8 p-5 rounded-2xl gap-5 sm:gap-10 shadow-slate-800'
                        style={{ background: 'linear-gradient(to right, #4B0000, #8B0000)' }}
                        onSubmit={handleSubmit}
                    >
                        <h2 className='md:text-2xl text-xl font-bold text-white uppercase max-w-[300px] text-center'>
                            Дізнайтеся ціни на авто з США
                        </h2>
                        <Input name='name' type='text' required={true}>
                            Ваше Ім&apos;я
                        </Input>
                        <PhoneInput name='phone' required={true}>
                            Номер телефону
                        </PhoneInput>
                        <Button2 className='text-accent w-full hover:bg-light-gray bg-white'>
                            Дізнатися ціни
                        </Button2>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Hero;
