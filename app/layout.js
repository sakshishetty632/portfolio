import { Poppins } from 'next/font/google';
import "./globals.css";
import AnimatedCursor from 'react-animated-cursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "Portfolio | Sakshi Shetty",
  description: "I'm Sakshi Shetty, full-stack developer based in Pune, India. My journey in tech started back in 11th grade when I took up Computer Science — not entirely by choice at the time, but it didn’t take long for me to get genuinely drawn into it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="I'm Sakshi Shetty, full-stack developer based in Pune, India. My journey in tech started back in 11th grade when I took up Computer Science — not entirely by choice at the time, but it didn’t take long for me to get genuinely drawn into it." />
        <meta name="keywords" content="sakshi shetty, portfolio, jigar, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio" />
        <meta property="og:site_name" content="Sakshi Shetty's Portfolio" />
        <meta property="og:title" content="Portfolio | Sakshi Shetty" />
        <meta property="og:description"
          content="I'm Sakshi Shetty, full-stack developer based in Pune, India. My journey in tech started back in 11th grade when I took up Computer Science — not entirely by choice at the time, but it didn’t take long for me to get genuinely drawn into it." />
        <meta property="og:url" content="https://sakshishetty.vercel.app" />
        <link rel="canonical" href="https://sakshishetty.vercel.app" />
        <meta name="author" content="Sakshi Shetty" />
        <meta name="language" content="English" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://sakshishetty.vercel.app" />
        <meta name="application-name" content="Portfolio | Sakshi Shetty" />
        <meta name="apple-mobile-web-app-title" content="Portfolio | Sakshi Shetty" />
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio | Sakshi Shetty</title>
      </head>
      <body className={`${poppins.className} font-poppins bg-slate-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
        <AnimatedCursor
          innerSize={10}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{ backgroundColor: '#333' }}
          outerStyle={{ border: '3px solid #333' }}
        />
        {children}

        <script dangerouslySetInnerHTML={{
          __html: `
          <!--Start of Tawk.to Script-->
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6809ef8cffb9b6190f29810d/1ipjcvg5c';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();

          <!--End of Tawk.to Script-->
          `,
        }}
        />
      </body>
    </html>
  );
}
