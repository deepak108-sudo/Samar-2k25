import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const mountRef = useRef(null);
    const animationIdRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x0a0a0a, 1); // Dark background like image
        mountRef.current.appendChild(renderer.domElement);

        // Create custom circular star texture for round stars
        const createStarTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');
            
            // Create radial gradient for glow effect
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            context.fillStyle = gradient;
            context.fillRect(0, 0, 64, 64);
            
            return new THREE.CanvasTexture(canvas);
        };

        const starTexture = createStarTexture();

        // Exact colors from image - only white and purple
        const colorPalette = [
            new THREE.Color(1.0, 1.0, 1.0),     // Pure white
            new THREE.Color(0.4, 0.2, 0.6),     // Purple
        ];

        // Create point-like stars with circular texture
        const starCount = 1500;
        const stars = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        const velocities = [];
        const twinklePhases = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            // Spread across wider area
            positions[i * 3] = (Math.random() - 0.5) * 500;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 500;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 500;

            // Random colors (white or purple only)
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            // Variable sizes for depth
            sizes[i] = Math.random() * 4 + 2;

            // Random twinkle phases
            twinklePhases[i] = Math.random() * Math.PI * 2;

            // Fast movement velocities
            velocities.push({
                x: (Math.random() - 0.5) * 0.8,
                y: (Math.random() - 0.5) * 0.8,
                z: (Math.random() - 0.5) * 0.8
            });
        }

        stars.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        stars.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        stars.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Point material with circular texture and glow
        const starMaterial = new THREE.PointsMaterial({
            size: 3,
            map: starTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
            alphaTest: 0.001
        });

        const starField = new THREE.Points(stars, starMaterial);
        scene.add(starField);

        // Add larger glowing particles with enhanced glow
        const glowCount = 200;
        const glowStars = new THREE.BufferGeometry();
        const glowPositions = new Float32Array(glowCount * 3);
        const glowColors = new Float32Array(glowCount * 3);
        const glowSizes = new Float32Array(glowCount);
        const glowVelocities = [];

        for (let i = 0; i < glowCount; i++) {
            glowPositions[i * 3] = (Math.random() - 0.5) * 400;
            glowPositions[i * 3 + 1] = (Math.random() - 0.5) * 400;
            glowPositions[i * 3 + 2] = (Math.random() - 0.5) * 400;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            // Enhanced glow colors
            glowColors[i * 3] = color.r * 1.2;
            glowColors[i * 3 + 1] = color.g * 1.2;
            glowColors[i * 3 + 2] = color.b * 1.2;

            glowSizes[i] = Math.random() * 8 + 4;

            glowVelocities.push({
                x: (Math.random() - 0.5) * 0.4,
                y: (Math.random() - 0.5) * 0.4,
                z: Math.random() * 1.2 + 0.3  // Forward movement
            });
        }

        glowStars.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
        glowStars.setAttribute('color', new THREE.BufferAttribute(glowColors, 3));
        glowStars.setAttribute('size', new THREE.BufferAttribute(glowSizes, 1));

        const glowMaterial = new THREE.PointsMaterial({
            size: 6,
            map: starTexture,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
            alphaTest: 0.001
        });

        const glowField = new THREE.Points(glowStars, glowMaterial);
        scene.add(glowField);

        camera.position.z = 150;

        // Animation loop
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            // Animate main stars
            const starColors = starField.geometry.attributes.color.array;
            const starSizes = starField.geometry.attributes.size.array;
            const starPositions = starField.geometry.attributes.position.array;
            
            for (let i = 0; i < starCount; i++) {
                // Enhanced twinkling effect with color-specific glow
                const twinkle = Math.sin(time * 5 + twinklePhases[i]) * 0.5 + 0.5;
                const baseColorIndex = i % colorPalette.length;
                const baseColor = colorPalette[baseColorIndex];
                
                // Enhanced glow based on color
                const glowIntensity = 0.4 + twinkle * 0.8;
                starColors[i * 3] = baseColor.r * glowIntensity;
                starColors[i * 3 + 1] = baseColor.g * glowIntensity;
                starColors[i * 3 + 2] = baseColor.b * glowIntensity;
                
                // Dynamic size with more variation
                starSizes[i] = (1.5 + twinkle * 1.2) * 2.5;

                // Fast movement with slight acceleration
                const speed = 1 + twinkle * 0.3;
                starPositions[i * 3] += velocities[i].x * speed;
                starPositions[i * 3 + 1] += velocities[i].y * speed;
                starPositions[i * 3 + 2] += velocities[i].z * speed;

                // Wrap around edges
                if (starPositions[i * 3] > 250) starPositions[i * 3] = -250;
                if (starPositions[i * 3] < -250) starPositions[i * 3] = 250;
                if (starPositions[i * 3 + 1] > 250) starPositions[i * 3 + 1] = -250;
                if (starPositions[i * 3 + 1] < -250) starPositions[i * 3 + 1] = 250;
                if (starPositions[i * 3 + 2] > 250) starPositions[i * 3 + 2] = -250;
                if (starPositions[i * 3 + 2] < -250) starPositions[i * 3 + 2] = 250;
            }
            
            starField.geometry.attributes.color.needsUpdate = true;
            starField.geometry.attributes.size.needsUpdate = true;
            starField.geometry.attributes.position.needsUpdate = true;

            // Animate glow particles
            const glowPos = glowField.geometry.attributes.position.array;
            for (let i = 0; i < glowCount; i++) {
                glowPos[i * 3] += glowVelocities[i].x;
                glowPos[i * 3 + 1] += glowVelocities[i].y;
                glowPos[i * 3 + 2] += glowVelocities[i].z;

                // Reset particles that move too far forward
                if (glowPos[i * 3 + 2] > 200) {
                    glowPos[i * 3] = (Math.random() - 0.5) * 400;
                    glowPos[i * 3 + 1] = (Math.random() - 0.5) * 400;
                    glowPos[i * 3 + 2] = -200;
                }

                // Wrap around sides
                if (glowPos[i * 3] > 200) glowPos[i * 3] = -200;
                if (glowPos[i * 3] < -200) glowPos[i * 3] = 200;
                if (glowPos[i * 3 + 1] > 200) glowPos[i * 3 + 1] = -200;
                if (glowPos[i * 3 + 1] < -200) glowPos[i * 3 + 1] = 200;
            }
            glowField.geometry.attributes.position.needsUpdate = true;

            // Subtle camera movement
            camera.position.x = Math.sin(time * 0.1) * 4;
            camera.position.y = Math.cos(time * 0.08) * 3;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default ThreeBackground;