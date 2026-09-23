"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function GeometricCenterpiece({ wireframeColor, coreColor, accentColor, themeTrigger, isDark }: { wireframeColor: string, coreColor: string, accentColor: string, themeTrigger: string, isDark: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Group>(null);
  const autoSpinRef = useRef<THREE.Group>(null);
  const hasMounted = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (spinRef.current) {
      gsap.to(spinRef.current.rotation, {
        y: spinRef.current.rotation.y + Math.PI * 2,
        duration: 1.5,
        ease: "power2.inOut"
      });
    }
  }, [themeTrigger]);

  const timeRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const isReturningRef = useRef(false);

  useFrame((state, delta) => {
    // 1. Mouse Interaction
    if (meshRef.current) {
      const targetMouseX = isHoveredRef.current ? (state.pointer.x * Math.PI) / 4 : 0;
      const targetMouseY = isHoveredRef.current ? (state.pointer.y * Math.PI) / 4 : 0;

      meshRef.current.rotation.y += (targetMouseX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-targetMouseY - meshRef.current.rotation.x) * 0.05;
    }

    // 2. Auto Spin and Return
    if (isHoveredRef.current) {
      // Hovered: stay still and let meshRef handle tracking.
    } else if (isReturningRef.current) {
      // Returning to center
      const snapToNearest = (val: number) => {
        const rem = val % (Math.PI * 2);
        if (rem > Math.PI) return val - rem + Math.PI * 2;
        if (rem < -Math.PI) return val - rem - Math.PI * 2;
        return val - rem;
      };

      const targetY = snapToNearest(timeRef.current.y);
      const targetX = snapToNearest(timeRef.current.x);

      timeRef.current.y += (targetY - timeRef.current.y) * 0.05;
      timeRef.current.x += (targetX - timeRef.current.x) * 0.05;

      // Check if we are close enough to center to resume spinning
      if (Math.abs(targetY - timeRef.current.y) < 0.01 && Math.abs(targetX - timeRef.current.x) < 0.01) {
        isReturningRef.current = false;
        timeRef.current.y = targetY; // Lock to exact center
        timeRef.current.x = targetX;
      }
    } else {
      // Idle: Spin right to left
      timeRef.current.y += delta * 0.15; // Positive rotates right to left
      // timeRef.current.x += delta * 0.05; // Removed to ensure straight horizontal rotation
    }

    if (autoSpinRef.current) {
      autoSpinRef.current.rotation.y = timeRef.current.y;
      autoSpinRef.current.rotation.x = timeRef.current.x;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={spinRef}>
        <group ref={meshRef}>
          <group
            ref={autoSpinRef}
            onPointerOver={() => { isHoveredRef.current = true; isReturningRef.current = false; }}
            onPointerOut={() => { isHoveredRef.current = false; isReturningRef.current = true; }}
          >
            {/* Outer wireframe */}
            <mesh>
              <icosahedronGeometry args={[1.6, 1]} />
              <meshPhysicalMaterial
                color={wireframeColor}
                emissive={accentColor}
                emissiveIntensity={isDark ? 0.2 : 0.4}
                metalness={0.9}
                roughness={0.1}
                wireframe={true}
                transparent
                opacity={isDark ? 0.3 : 0.7}
              />
            </mesh>

            {/* Inner solid metallic core */}
            <mesh>
              <octahedronGeometry args={[1.2, 0]} />
              <meshPhysicalMaterial 
                color={coreColor}
                metalness={1}
                roughness={0.7}
                clearcoat={1}
                clearcoatRoughness={1}
              />
            </mesh>

            <OrbitalAtoms accentColor={accentColor} />
          </group>
        </group>
      </group>
    </Float>
  );
}

function OrbitalAtoms({ accentColor }: { accentColor: string }) {
  const groupRef = useRef<THREE.Group>(null);

  const atomsData = useMemo(() => {
    return [
      { speed: 1.5, rotation: [Math.PI / 4, 0, 0] as [number, number, number], size: 0.06 },
      { speed: 1.2, rotation: [-Math.PI / 4, Math.PI / 3, 0] as [number, number, number], size: 0.08 },
      { speed: 1.8, rotation: [0, Math.PI / 2, Math.PI / 6] as [number, number, number], size: 0.05 },
      { speed: -1.4, rotation: [Math.PI / 6, -Math.PI / 4, Math.PI / 8] as [number, number, number], size: 0.07 },
      { speed: 1.6, rotation: [-Math.PI / 3, 0, Math.PI / 4] as [number, number, number], size: 0.05 },
      { speed: -1.7, rotation: [0, -Math.PI / 3, -Math.PI / 6] as [number, number, number], size: 0.06 },
      { speed: 1.3, rotation: [Math.PI / 2, Math.PI / 4, 0] as [number, number, number], size: 0.09 },
    ];
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.rotation.z += delta * atomsData[index].speed;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {atomsData.map((data, i) => (
        <group key={i} rotation={data.rotation}>
          <mesh position={[1.6, 0, 0]}>
            <sphereGeometry args={[data.size, 16, 16]} />
            <meshBasicMaterial color={accentColor} />
            <pointLight distance={2} intensity={2} color={accentColor} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Particles({ accentColor }: { accentColor: string }) {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={accentColor} transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
}

function FallingStars({ accentColor }: { accentColor: string }) {
  const starsCount = 3;
  const stars = useMemo(() => {
    return Array.from({ length: starsCount }).map(() => ({
      x: 5 + Math.random() * 15, // Spawn top-right (x from 5 to 20)
      y: 10 + Math.random() * 10, // Spawn high up
      z: (Math.random() - 0.5) * 10 - 5,
      speed: 5 + Math.random() * 4, // Slower speed (5-9)
      delay: Math.random() * 3,
      size: 0.03 + Math.random() * 0.03, // Sizes between 0.03 and 0.06
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const star = stars[i];
        if (star.delay > 0) {
          star.delay -= delta;
          child.visible = false;
        } else {
          child.visible = true;
          // 45 degrees (PI/4) top-right to bottom-left
          star.y -= star.speed * Math.cos(Math.PI / 4) * delta;
          star.x -= star.speed * Math.sin(Math.PI / 4) * delta;
          child.position.set(star.x, star.y, star.z);

          if (star.y < -15 || star.x < -15) {
            star.y = 10 + Math.random() * 10;
            star.x = 5 + Math.random() * 15;
            star.z = (Math.random() - 0.5) * 10 - 5;
            star.delay = Math.random() * 2;
            star.speed = 5 + Math.random() * 4;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <group key={i} rotation={[0, 0, -Math.PI / 4]}>
          <mesh>
            <sphereGeometry args={[star.size, 16, 16]} />
            <meshBasicMaterial color={accentColor} transparent opacity={0.9} />
          </mesh>
          {/* Trail flowing directly behind the star */}
          <mesh position={[0, 0.4, 0]}>
            <coneGeometry args={[star.size * 0.9, 0.8, 8]} />
            <meshBasicMaterial color={accentColor} transparent opacity={0.3} />
          </mesh>
          <pointLight distance={1.5} intensity={1} color={accentColor} />
        </group>
      ))}
    </group>
  );
}

function SceneLights({ accentColor, isDark }: { accentColor: string, isDark: boolean }) {
  return (
    <>
      <ambientLight intensity={isDark ? 1.0 : 0.5} />
      <directionalLight position={isDark ? [5, 5, 5] : [10, 0, 2]} intensity={isDark ? 2.0 : 4.0} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={2} color={accentColor} />
      <spotLight position={[0, -5, 0]} intensity={3} color={accentColor} penumbra={1} distance={10} />
    </>
  );
}

export function HeroScene() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const scrollGroupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!isMounted) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      if (scrollGroupRef.current) {
        gsap.to(scrollGroupRef.current.position, {
          x: 3.5,
          scrollTrigger: {
            trigger: ".hero-trigger",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          }
        });

        gsap.to(scrollGroupRef.current.scale, {
          x: 0.75,
          y: 0.75,
          z: 0.75,
          scrollTrigger: {
            trigger: ".hero-trigger",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      }
    });

    mm.add("(prefers-reduced-motion: no-preference) and (max-width: 1023px)", () => {
      if (scrollGroupRef.current) {
        gsap.to(scrollGroupRef.current.scale, {
          x: 0.8,
          y: 0.8,
          z: 0.8,
          scrollTrigger: {
            trigger: ".hero-trigger",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      }
    });
  }, { dependencies: [isMounted] });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        {/* Fallback Static Visual */}
        <div className="w-64 h-64 border border-emerald/30 rounded-full animate-pulse flex items-center justify-center">
          <div className="w-32 h-32 bg-emerald/10 blur-xl rounded-full"></div>
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme !== "light"; // default to dark
  const wireframeColor = isDark ? "#1E1B18" : "#9E9283"; // Much darker off-white/tan
  const coreColor = isDark ? "#2D2926" : "#B5A997"; // Much darker off-white/tan
  const accentColor = isDark ? "#E58D2C" : "#C25E24";

  return (
    <div className="w-full h-full relative cursor-crosshair">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneLights accentColor={accentColor} isDark={isDark} />

        <group ref={scrollGroupRef}>
          <GeometricCenterpiece wireframeColor={wireframeColor} coreColor={coreColor} accentColor={accentColor} themeTrigger={resolvedTheme || "dark"} isDark={isDark} />
          <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={8} blur={2} far={4} color={accentColor} />
        </group>

        <Particles accentColor={accentColor} />
        <FallingStars accentColor={accentColor} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
