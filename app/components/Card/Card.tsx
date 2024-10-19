import Image from "next/image";
interface CardProp {
    imageSrc:string,
    title:string,
    content:string
}

const Card = (prop:CardProp) => {
    return (
        <div className="w-full max-w-md mx-auto bg-[#203e80] hover:bg-[#385fb3] rounded-xl hover:scale-95 transition-transform text-white shadow-lg">
            <div className="flex flex-col items-center text-center p-8 space-y-4">
                
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white">
                    <Image src={prop.imageSrc} alt={prop.title} width={64} height={64} className="object-cover h-full w-full" />
                </div>

                
                <h1 className="text-2xl font-semibold">{prop.title}</h1>

                
                <p className="text-md leading-relaxed text-gray-200">{prop.content}</p>
            </div>
        </div>
    );
};

export default Card;
