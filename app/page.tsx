"use client";

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import AvatarComponent from "@/components/avatar-component";
import InfoComponent from "@/components/info-component";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import { useEffect, useRef, useState } from 'react';
import { User } from "@/types/user";
import { Skeleton } from "@/components/ui/skeleton";

export default function Portfolio() {
  const parallax = useRef<IParallax>(null!)
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/user');
        if (!response.ok) throw new Error('Failed to fetch user data');
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const myInfo = {
    name: user?.name || '',
    title: user?.title || '',
    education: user?.education || '',
    contacts: {
      cv: {
        url: user?.cv || '#',
        label: "Baixar CV"
      },
      email: {
        url: `mailto:${user?.email || ''}`,
        label: "Enviar e-mail"
      },
      linkedin: {
        url: user?.linkedin || '#',
        label: "LinkedIn"
      },
      github: {
        url: user?.github || '#',
        label: "GitHub"
      }
    }
  };

  return (
      <Parallax ref={parallax} pages={2} style={{ width: '100%', height: '100%', top: '0', left: '0' }} >

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
        >
          <img src={"/parallax/c-back.png"} style={{ width: '100%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.4}
          factor={2}
        >
          <img src={"/parallax/c-woman.png"} style={{ width: '50%', marginLeft: '30%', marginTop: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} >
          <div className="max-w-4xl mx-auto p-8">
            <div className="backdrop-blur-md bg-black/25 dark:bg-black/30 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {loading ? (
                  <Skeleton className="h-40 w-40 rounded-full" />
                ) : (
                  <AvatarComponent />
                )}
                
                {loading ? (
                  <div className="space-y-3 w-full">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex gap-2 mt-4">
                      <Skeleton className="h-9 w-24" />
                      <Skeleton className="h-9 w-24" />
                      <Skeleton className="h-9 w-24" />
                      <Skeleton className="h-9 w-24" />
                    </div>
                  </div>
                ) : (
                  <InfoComponent {...myInfo} />
                )}
              </div>
              
              {loading ? (
                <div className="mt-8">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Skeleton key={i} className="h-10 w-24" />
                    ))}
                  </div>
                </div>
              ) : (
                <TechStack />
              )}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.35} factor={2}>
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="p-8 space-y-6">
                <Skeleton className="h-8 w-48 mb-6" />
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-7 w-5/6" />
                    <Skeleton className="h-20 w-full" />
                    <div className="flex gap-2 mt-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Projects />
            )}
          </div>
        </ParallaxLayer>
      </Parallax>
  );
}