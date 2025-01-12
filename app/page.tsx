import Info from '@/app/sections/Info';
import About from '@/app/sections/About';
import Sponsors from '@/app/sections/Sponsors';
import FAQ from '@/app/sections/FAQ';
import MarqueeText from '@/components/MarqueeText';

export default function Home() {
    return (
        <main>
            <Info />
            <MarqueeText text="PLACEHOLDER" direction='right'/>
            <About />
            <MarqueeText text="PLACEHOLDER" direction='left'/>
            <Sponsors />
            <MarqueeText text="PLACEHOLDER" direction='right'/>
            <FAQ />
        </main>
    );
}
