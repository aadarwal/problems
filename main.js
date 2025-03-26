// Main Three.js Application for 3D Book Visualization

// Scene setup variables
let scene, camera, renderer, book, controls;
let pages = [];
let currentPage = 0;
const totalPages = 20; // Adjust as needed
let isBookOpen = false;
let pageRotationSpeed = 5; // Default speed (will be adjustable)

// Materials and textures
let materials = {
    leather: null,
    cloth: null,
    hardcover: null
};

// Book dimensions
const bookConfig = {
    width: 5,
    height: 7,
    depth: 0.5,
    pageThickness: 0.01,
    coverThickness: 0.1
};

// Initialize the scene
function init() {
    // Create scene, camera, and renderer
    createScene();
    
    // Create lighting
    createLights();
    
    // Load textures
    loadTextures();
    
    // Create the book model
    createBook();
    
    // Setup event listeners for UI controls
    setupEventListeners();
    
    // Start animation loop
    animate();
}

// Create the Three.js scene, camera and renderer
function createScene() {
    // Create a new scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Create a camera
    camera = new THREE.PerspectiveCamera(
        45, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    camera.position.set(0, 0, 15);
    
    // Create a WebGL renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth - 300, window.innerHeight); // Adjust for control panel
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Add the renderer to the DOM
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    
    // Add orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

// Create lighting for the scene
function createLights() {
    // Ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Directional light for shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    
    // Configure shadow properties
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    
    // Add directional light to scene
    scene.add(directionalLight);
    
    // Hemisphere light for more natural lighting from top and bottom
    const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 0.5);
    scene.add(hemisphereLight);
}

// Load textures for book materials
function loadTextures() {
    // Create procedural textures instead of loading external files
    
    // Leather material with procedural texture
    materials.leather = new THREE.MeshStandardMaterial({
        color: 0x553322,
        roughness: 0.7,
        metalness: 0.1
    });
    
    // Add some noise to the leather material
    const leatherCanvas = document.createElement('canvas');
    leatherCanvas.width = 512;
    leatherCanvas.height = 512;
    const leatherCtx = leatherCanvas.getContext('2d');
    
    // Create a leather-like pattern
    leatherCtx.fillStyle = '#553322';
    leatherCtx.fillRect(0, 0, 512, 512);
    
    // Add some noise and grain
    for (let i = 0; i < 10000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = Math.random() * 3 + 1;
        const shade = Math.random() * 40 - 20;
        
        leatherCtx.fillStyle = `rgb(${85 + shade}, ${51 + shade}, ${34 + shade})`;
        leatherCtx.fillRect(x, y, size, size);
    }
    
    // Create scratches
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const length = Math.random() * 50 + 10;
        const angle = Math.random() * Math.PI * 2;
        
        leatherCtx.strokeStyle = 'rgba(120, 80, 60, 0.3)';
        leatherCtx.lineWidth = 1;
        leatherCtx.beginPath();
        leatherCtx.moveTo(x, y);
        leatherCtx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        leatherCtx.stroke();
    }
    
    // Apply the procedural texture
    const leatherTexture = new THREE.CanvasTexture(leatherCanvas);
    materials.leather.map = leatherTexture;
    
    // Create a procedural normal map for leather
    const normalCanvas = document.createElement('canvas');
    normalCanvas.width = 512;
    normalCanvas.height = 512;
    const normalCtx = normalCanvas.getContext('2d');
    
    // Fill with neutral normal (128, 128, 255)
    normalCtx.fillStyle = '#8080ff';
    normalCtx.fillRect(0, 0, 512, 512);
    
    // Add normal map details
    for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = Math.random() * 5 + 2;
        
        // Random normal direction
        const r = Math.floor(Math.random() * 40) + 108;
        const g = Math.floor(Math.random() * 40) + 108;
        normalCtx.fillStyle = `rgb(${r}, ${g}, 255)`;
        normalCtx.fillRect(x, y, size, size);
    }
    
    const leatherNormalMap = new THREE.CanvasTexture(normalCanvas);
    materials.leather.normalMap = leatherNormalMap;
    materials.leather.normalScale = new THREE.Vector2(0.5, 0.5);
    
    // Cloth material with procedural texture
    materials.cloth = new THREE.MeshStandardMaterial({
        color: 0x224466,
        roughness: 0.8,
        metalness: 0.0
    });
    
    // Create cloth texture
    const clothCanvas = document.createElement('canvas');
    clothCanvas.width = 512;
    clothCanvas.height = 512;
    const clothCtx = clothCanvas.getContext('2d');
    
    // Base color
    clothCtx.fillStyle = '#224466';
    clothCtx.fillRect(0, 0, 512, 512);
    
    // Create fabric weave pattern
    const weaveSize = 4;
    for (let y = 0; y < 512; y += weaveSize) {
        for (let x = 0; x < 512; x += weaveSize * 2) {
            const offset = (y % (weaveSize * 2) === 0) ? 0 : weaveSize;
            clothCtx.fillStyle = '#1a3a5a';
            clothCtx.fillRect(x + offset, y, weaveSize, weaveSize);
        }
    }
    
    const clothTexture = new THREE.CanvasTexture(clothCanvas);
    materials.cloth.map = clothTexture;
    
    // Hardcover material with procedural texture
    materials.hardcover = new THREE.MeshStandardMaterial({
        color: 0x882222,
        roughness: 0.4,
        metalness: 0.2
    });
    
    // Create hardcover texture
    const hardcoverCanvas = document.createElement('canvas');
    hardcoverCanvas.width = 512;
    hardcoverCanvas.height = 512;
    const hardcoverCtx = hardcoverCanvas.getContext('2d');
    
    // Base color
    hardcoverCtx.fillStyle = '#882222';
    hardcoverCtx.fillRect(0, 0, 512, 512);
    
    // Add some subtle detail
    for (let i = 0; i < 10000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = Math.random() * 2 + 0.5;
        const shade = Math.random() * 30 - 15;
        
        hardcoverCtx.fillStyle = `rgb(${136 + shade}, ${34 + shade}, ${34 + shade})`;
        hardcoverCtx.fillRect(x, y, size, size);
    }
    
    // Add a subtle pattern
    for (let y = 0; y < 512; y += 16) {
        hardcoverCtx.strokeStyle = 'rgba(100, 20, 20, 0.2)';
        hardcoverCtx.lineWidth = 1;
        hardcoverCtx.beginPath();
        hardcoverCtx.moveTo(0, y);
        hardcoverCtx.lineTo(512, y);
        hardcoverCtx.stroke();
    }
    
    const hardcoverTexture = new THREE.CanvasTexture(hardcoverCanvas);
    materials.hardcover.map = hardcoverTexture;
    
    // Paper material for pages with subtle texture
    const paperCanvas = document.createElement('canvas');
    paperCanvas.width = 512;
    paperCanvas.height = 512;
    const paperCtx = paperCanvas.getContext('2d');
    
    // Base color - slightly off-white
    paperCtx.fillStyle = '#fffcf0';
    paperCtx.fillRect(0, 0, 512, 512);
    
    // Add paper grain
    for (let i = 0; i < 15000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = Math.random() * 2 + 0.5;
        const shade = Math.random() * 10;
        
        paperCtx.fillStyle = `rgba(220, 210, 190, ${shade / 100})`;
        paperCtx.fillRect(x, y, size, size);
    }
    
    const paperTexture = new THREE.CanvasTexture(paperCanvas);
    
    materials.paper = new THREE.MeshStandardMaterial({
        color: 0xfffcf0,
        roughness: 0.8,
        metalness: 0.0,
        side: THREE.DoubleSide,
        map: paperTexture
    });
}

// Create the 3D book model
function createBook() {
    book = new THREE.Group();
    
    // Create front and back covers
    const coverGeometry = new THREE.BoxGeometry(
        bookConfig.width,
        bookConfig.height,
        bookConfig.coverThickness
    );
    
    // Front cover
    const frontCover = new THREE.Mesh(coverGeometry, materials.leather);
    frontCover.position.set(0, 0, bookConfig.depth / 2);
    frontCover.castShadow = true;
    frontCover.receiveShadow = true;
    
    // Back cover
    const backCover = new THREE.Mesh(coverGeometry, materials.leather);
    backCover.position.set(0, 0, -bookConfig.depth / 2);
    backCover.castShadow = true;
    backCover.receiveShadow = true;
    
    // Add covers to book group
    book.add(frontCover);
    book.add(backCover);
    
    // Create spine
    const spineGeometry = new THREE.BoxGeometry(
        bookConfig.coverThickness,
        bookConfig.height,
        bookConfig.depth
    );
    
    const spine = new THREE.Mesh(spineGeometry, materials.leather);
    spine.position.set(-bookConfig.width / 2 - bookConfig.coverThickness / 2, 0, 0);
    spine.castShadow = true;
    spine.receiveShadow = true;
    book.add(spine);
    
    // Create pages
    createPages();
    
    // Position the book
    book.rotation.y = Math.PI * 0.05; // Slightly rotate for better view
    scene.add(book);
}

// Create individual pages for the book
function createPages() {
    const pageGeometry = new THREE.PlaneGeometry(
        bookConfig.width * 0.95,
        bookConfig.height * 0.95
    );
    
    // Create pages and add them to the book
    for (let i = 0; i < totalPages; i++) {
        const page = new THREE.Mesh(pageGeometry, materials.paper);
        
        // Position page relative to spine
        page.position.set(
            -bookConfig.width / 2 * 0.1, // Slight offset from spine
            0,
            -bookConfig.depth / 2 + i * bookConfig.pageThickness
        );
        
        // Set pivot at spine
        page.geometry.translate(bookConfig.width / 2, 0, 0);
        
        // Store initial position/rotation
        page.userData.initialZ = page.position.z;
        page.userData.initialRotation = new THREE.Vector3(0, 0, 0);
        
        page.castShadow = true;
        page.receiveShadow = true;
        
        // Add page to book and pages array
        book.add(page);
        pages.push(page);
    }
}

// Open the book
function openBook() {
    if (isBookOpen) return;
    
    isBookOpen = true;
    
    // Animate front cover opening
    const frontCover = book.children[0];
    animatePageTurn(frontCover, 0, -Math.PI * 0.8, 1000);
}

// Close the book
function closeBook() {
    if (!isBookOpen) return;
    
    // First reset all pages
    pages.forEach((page, index) => {
        page.rotation.y = 0;
    });
    
    // Then close front cover
    const frontCover = book.children[0];
    animatePageTurn(frontCover, -Math.PI * 0.8, 0, 1000);
    
    isBookOpen = false;
    currentPage = 0;
}

// Turn to the next page
function nextPage() {
    if (!isBookOpen || currentPage >= pages.length - 1) return;
    
    // Animate the page turn
    animatePageTurn(pages[currentPage], 0, -Math.PI * 0.8, 500);
    currentPage++;
}

// Turn to the previous page
function prevPage() {
    if (!isBookOpen || currentPage <= 0) return;
    
    currentPage--;
    // Animate the page turn back
    animatePageTurn(pages[currentPage], -Math.PI * 0.8, 0, 500);
}

// Animate page turning with smooth transition
function animatePageTurn(page, startRotation, endRotation, duration) {
    const startTime = Date.now();
    
    function update() {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Use easing function for smoother animation
        const easedProgress = easeInOutCubic(progress);
        
        // Interpolate rotation
        page.rotation.y = startRotation + (endRotation - startRotation) * easedProgress;
        
        // Continue animation until complete
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Easing function for smoother animations
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Handle window resize
function onWindowResize() {
    camera.aspect = (window.innerWidth - 300) / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth - 300, window.innerHeight);
}

// Setup event listeners for UI controls
function setupEventListeners() {
    // Open book button
    document.getElementById('open-book').addEventListener('click', openBook);
    
    // Close book button
    document.getElementById('close-book').addEventListener('click', closeBook);
    
    // Next page button
    document.getElementById('next-page').addEventListener('click', nextPage);
    
    // Previous page button
    document.getElementById('prev-page').addEventListener('click', prevPage);
    
    // Page rotation speed slider
    document.getElementById('page-rotation').addEventListener('input', function(e) {
        pageRotationSpeed = parseInt(e.target.value);
    });
    
    // Book material dropdown
    document.getElementById('book-material').addEventListener('change', function(e) {
        const selectedMaterial = e.target.value;
        const frontCover = book.children[0];
        const backCover = book.children[1];
        const spine = book.children[2];
        
        frontCover.material = materials[selectedMaterial];
        backCover.material = materials[selectedMaterial];
        spine.material = materials[selectedMaterial];
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Update orbit controls
    controls.update();
    
    // Render the scene
    renderer.render(scene, camera);
}

// Start initialization when the page loads
window.addEventListener('DOMContentLoaded', init);

// Include Three.js library
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
document.head.appendChild(script);

// Include OrbitControls library
const orbitScript = document.createElement('script');
orbitScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/js/controls/OrbitControls.js';
document.head.appendChild(orbitScript);
