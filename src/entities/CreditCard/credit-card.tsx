import Image from 'next/image';
import Card from "@/public/img/card.png";

interface CreditCardTypeProps {
    card_number: string;
    price: number;
    type: string;
}

export function CreditCard({ card_number, price, type }: CreditCardTypeProps) {
    return (
        <div className="w-[500px] h-[250px] text-3xl relative left-[20%] font-bold mb-20 border-2 rounded-3xl border-white flex flex-col justify-center px-10 bg-[#487D49]">
            <div>
                <div className="flex justify-between text-white items-center">
                    <Image src={Card} alt='Card Chip' width={60} height={40} />
                    <h1 className="tracking-widest">**** **** **** {card_number.slice(-4)}</h1>
                </div>
                
                <div className="flex justify-between mt-12 items-center text-white">
                    <h1>{price}$</h1>
                    <h1 className="uppercase italic">{type}</h1>
                </div>
            </div>
        </div>
    );
}