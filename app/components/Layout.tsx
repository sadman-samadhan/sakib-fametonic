import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import Header from './Header'; 

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element | null {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header always gets isMobile */}
      <Header isMobile={isMobile} />
      <main className="flex-grow">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement<any>, { isMobile });
          }
          return child;
        })}
      </main>
    </div>
  );
}
