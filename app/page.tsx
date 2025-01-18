import Info from '@/app/sections/Info';
import About from '@/app/sections/About';
import Sponsors from '@/app/sections/Sponsors';
import FAQ from '@/app/sections/FAQ';
import MarqueeText from '@/components/MarqueeText';

export default function Home() {
    return (
        <main>
            <Info />
            <MarqueeText text="WHO WE ARE" direction='right'/>
            <About />
            <MarqueeText text="OUR SPONSORS" direction='left'/>
            <Sponsors />
            <MarqueeText text="FAQ" direction='right'/>
            <FAQ />
        </main>
    );
}
