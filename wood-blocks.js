// ===== 3D Floating Wooden Blocks - Hero Animation =====
(function () {
    const container = document.getElementById('wood-blocks-container');
    if (!container || typeof THREE === 'undefined') return;

    // --- Setup ---
    const clock = new THREE.Clock();
    let mouseX = 0, mouseY = 0;
    const meshes = [];

    // Wood color palette (various timber tones)
    const woodColors = [
        0x8B6914, // Dark oak
        0xA0522D, // Sienna
        0xCD853F, // Pale mahogany
        0xDEB887, // Burlywood
        0xD2691E, // Chocolate
        0xB8860B, // Dark goldenrod
        0x966F33, // Wood brown
        0x7B3F00, // Chocolate brown
        0xC19A6B, // Fallow
        0x6B4226, // Walnut
        0xE8C07A, // Light birch
        0x4A2C1D, // Dark walnut
        0xD4AC6E, // Sandy oak
    ];

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(
        50,
        container.offsetWidth / container.offsetHeight,
        0.1,
        100
    );
    camera.position.set(0, 0, 10);

    // --- Scene ---
    const scene = new THREE.Scene();

    // --- Lighting ---
    const ambient = new THREE.AmbientLight(0xffeedd, 0.6);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfff5e0, 0.9);
    dirLight.position.set(6, 8, 10);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0xd4ac6e, 0.5);
    dirLight2.position.set(-5, -3, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xff9040, 0.4, 30);
    pointLight.position.set(0, 5, 8);
    scene.add(pointLight);

    // --- Create wooden block geometry variants ---
    const geometries = [
        new THREE.BoxGeometry(1, 1, 1),                     // cube
        new THREE.BoxGeometry(1.8, 0.5, 0.8),               // plank
        new THREE.BoxGeometry(0.6, 0.6, 2.2),               // beam
        new THREE.BoxGeometry(0.8, 1.5, 0.6),               // tall block
        new THREE.BoxGeometry(1.3, 0.35, 1.3),              // flat board
        new THREE.CylinderGeometry(0.4, 0.4, 1.4, 8),       // log segment
    ];

    // --- Create materials with wood-like appearance ---
    function createWoodMaterial() {
        const color = woodColors[Math.floor(Math.random() * woodColors.length)];
        return new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.7 + Math.random() * 0.25,
            metalness: 0.05,
            flatShading: false,
        });
    }

    // --- Spawn blocks ---
    const blockCount = 30;
    for (let i = 0; i < blockCount; i++) {
        const geom = geometries[Math.floor(Math.random() * geometries.length)];
        const mat = createWoodMaterial();
        const mesh = new THREE.Mesh(geom, mat);

        // Spread blocks, biased toward the right side so they don't overlap hero text
        mesh.position.x = (Math.random() - 0.15) * 20;
        mesh.position.y = (Math.random() - 0.5) * 12;
        mesh.position.z = (Math.random() - 0.5) * 10 - 2;

        // Random initial rotation
        mesh.rotation.x = Math.random() * Math.PI * 2;
        mesh.rotation.y = Math.random() * Math.PI * 2;
        mesh.rotation.z = Math.random() * Math.PI * 2;

        // Clearly visible scale
        const baseScale = 0.45 + Math.random() * 0.65;
        mesh.scale.set(baseScale, baseScale, baseScale);

        // Store animation parameters per block
        mesh.userData = {
            baseScale: baseScale,
            rotSpeedX: (Math.random() - 0.5) * 0.008,
            rotSpeedY: (Math.random() - 0.5) * 0.012,
            rotSpeedZ: (Math.random() - 0.5) * 0.006,
            floatOffset: Math.random() * Math.PI * 2,
            floatAmplitude: 0.3 + Math.random() * 0.6,
            floatSpeed: 0.3 + Math.random() * 0.5,
            originY: mesh.position.y,
            originX: mesh.position.x,
            driftSpeedX: (Math.random() - 0.5) * 0.15,
        };

        scene.add(mesh);
        meshes.push(mesh);
    }

    // --- Mouse parallax ---
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // --- Scroll-based camera tilt ---
    let scrollProgress = 0;
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: '#hero-section',
            start: 'top top',
            end: 'bottom top',
            onUpdate: (self) => {
                scrollProgress = self.progress;
            },
        });
    }

    // --- Resize ---
    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });

    // --- Animation loop ---
    function animate() {
        requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();

        // Camera follows mouse & scroll
        camera.position.x += (mouseX * 1.0 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 0.6 - camera.position.y) * 0.03;
        camera.position.z = 10 - scrollProgress * 3;
        camera.lookAt(0, 0, 0);

        // Animate each block
        meshes.forEach((mesh) => {
            const d = mesh.userData;

            // Gentle rotation
            mesh.rotation.x += d.rotSpeedX;
            mesh.rotation.y += d.rotSpeedY;
            mesh.rotation.z += d.rotSpeedZ;

            // Floating Y motion
            mesh.position.y =
                d.originY + Math.sin(elapsed * d.floatSpeed + d.floatOffset) * d.floatAmplitude;

            // Subtle X drift
            mesh.position.x =
                d.originX + Math.sin(elapsed * d.driftSpeedX + d.floatOffset) * 0.4;

            // Fade blocks as user scrolls past hero
            const scaleFade = Math.max(0.05, 1 - scrollProgress * 1.5);
            mesh.scale.setScalar(d.baseScale * scaleFade);
        });

        renderer.render(scene, camera);
    }

    // Delay start slightly for smooth load
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.transition = 'opacity 1.5s ease';
        container.style.opacity = '1';
        animate();
    }, 400);
})();
