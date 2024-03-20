import { Button } from "@/components/ui/button";

export default function PricingPage() {
    const pricingOptions = [
        { id: 1, title: 'Whats Included?', price: '$400/month', features: ['Dashboard Features', 'Web, iPad, and iPhone Apps', 'Live View','Accurate feedback using eye and head tracking', 'Custom Plays'] },
    ];

    return (
        <>
            <div className="text-4xl font-semibold py-4">Pricing</div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 py-4">
                {pricingOptions.map(option => (
                    <div key={option.id} className="rounded-lg bg-gray-100 w-full p-4">
                        <div className="text-xl pb-2">{option.title}</div>
                        <div className="text-lg">{option.price}</div>
                        <ul className="text-sm">
                            {option.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <a href="/checkout">
                            <Button>Sign Up Now!</Button>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
