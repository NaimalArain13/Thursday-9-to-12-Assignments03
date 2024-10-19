import Image from "next/image";
const JoinFundSection = () => {
    return (
        <div className="bg-orange-100 text-center py-16 px-4 pt-6">
            <div className="grid grid-cols gap-y-2 md:grid-cols-3 md:gap-x-4">
            <div className="hidden md:flex justify-center items-center space-x-4  mb-8">
                {/* Images */}
                <div className="w-32 h-52 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="https://i.pinimg.com/236x/0b/6c/c5/0b6cc5b40dc73925fa8817e78c6b94cf.jpg" alt="Fundraiser 2" width={200} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-60 overflow-hidden flex items-center rounded-xl transition-transform hover:scale-105">
                    <Image src="https://i.pinimg.com/236x/64/17/92/6417927c3c0e634ecd4788bc5b57f6dd.jpg" alt="Fundraiser 1" width={150} height={50} className="w-full h-full object-cover" />
                </div>
                
                
            </div>

            {/* Heading and Statistics */}
            <div className="flex flex-col gap-y-1">
            <h2 className="text-xl font-semibold text-gray-700">
                Be The Part Of FundRaisers With Over
            </h2>
            <p className="text-6xl font-bold text-gray-900 my-4">
                217,924<span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium text-gray-600">
                People From Around The World Joined
            </p>

            {/* Button */}
            <div>
            <button className="mt-8 bg-orange-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-500">
                Join FundRaisers Now!
            </button>
            </div>
            
            </div>

            <div className="flex justify-center items-center space-x-4  mb-8">
                {/* Images */}
                <div className="hidden w-32 h-60 overflow-hidden md:flex items-center rounded-xl transition-transform hover:scale-105">
                    <Image src="https://i.pinimg.com/236x/9e/1c/ed/9e1ced53f61bfe93f8a0065ab8184615.jpg" alt="Fundraiser 1" width={150} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="w-32 h-52 overflow-hidden rounded-xl transition-transform hover:scale-105">
                    <Image src="https://i.pinimg.com/236x/4e/7c/43/4e7c432685e01392db17105d8d24d0f1.jpg" alt="Fundraiser 2" width={200} height={50} className="w-full h-full object-cover" />
                </div>
                
            </div>
            </div>

        </div>
    );
};

export default JoinFundSection;
