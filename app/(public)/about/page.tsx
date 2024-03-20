import type React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
            <p className="text-lg mb-8 justify-center">
                PlayAR is an innovative sports training enterprise that specializes in integrating augmented and virtual reality (AR/VR) 
                technologies to transform the athletic training landscape. We offer a sophisticated platform that allows athletes, particularly 
                football players, to engage in highly realistic, immersive practice sessions. By simulating real-game scenarios, PlayAR enables 
                players to enhance their strategic decision-making, reaction times, and performance under game-like conditions. Our solution is 
                designed to overcome the limitations of traditional training methods, providing a safe, efficient, and effective way for athletes to 
                practice and improve their skills. With a focus on user-friendly interfaces and data-driven performance analysis, PlayAR is setting 
                new standards in sports training, helping athletes achieve their full potential on and off the field.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
            <p className="text-lg mb-8">
                The purpose of PlayAR is to transform athletic training with advanced technology, providing athletes with a virtual environment that mimics real-game scenarios. Through augmented and virtual reality, PlayAR aims to enhance players' skills, decision-making, and performance by offering a realistic, interactive training platform. This enables athletes to practice and refine their abilities in a controlled and safe setting, preparing them more effectively for competitive play and reducing the risk of injury. PlayAR's ultimate goal is to revolutionize how athletes train, making it more engaging, efficient, and effective, thereby elevating their potential for success in actual sports competitions.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-8">
                For more information about PlayAR, inquiries about our products, or to schedule a demo, please reach out to us through the following channels:
            </p>

            <div className="flex justify-center space-x-4">
                <div className="w-32 h-32 bg-gray-300" />
                <img src="pic1.jpg" alt="pic1" className="w-32 h-32" />
                <img src="pic2.jpg" alt="pic2" className="w-32 h-32" />
            </div>

            <p className="text-lg mb-8">
                Email: gabriel.duarte@pinecrest.com
                Phone: +1 (800) 123-4567
                Website: www.playar.com/contact
                Office Address: 123 PlayAR Way, Tech City, TC 12345, USA
                We look forward to hearing from you and discussing how PlayAR can enhance your athletic training experience. Our team is committed to providing support and answering any questions you may have.
            </p>
        </div>
    );
};

export default AboutPage;