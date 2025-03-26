// Additional controls and interactions for the 3D Book

// Custom book control variables
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let bookDragSensitivity = 0.01;
let canManuallyTurnPage = false;
let manualPageTurnThreshold = 0.3;
let hoverPage = null;

// Initialize book-specific controls
function initBookControls() {
    // Add these event listeners after the book is created
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave);
    
    // Book rotation with arrow keys
    window.addEventListener('keydown', onKeyDown);
    
    console.log('Book controls initialized');
}

// Mouse down handler
function onMouseDown(event) {
    isDragging = true;
    
    // Store current mouse position
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
    
    // Check if we're hovering over a page that can be turned manually
    if (isBookOpen && hoverPage !== null) {
        canManuallyTurnPage = true;
    }
}

// Mouse move handler
function onMouseMove(event) {
    // If we're not dragging, check for hover effects
    if (!isDragging) {
        // Cast a ray to see if we're hovering over a page
        const mouse = new THREE.Vector2(
            (event.clientX / (window.innerWidth - 300)) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        
        // Check for page intersections
        const intersects = raycaster.intersectObjects(pages);
        
        if (intersects.length > 0) {
            const pageIndex = pages.indexOf(intersects[0].object);
            
            // Only highlight pages that can be turned (current page)
            if (pageIndex === currentPage && isBookOpen) {
                hoverPage = intersects[0].object;
                document.body.style.cursor = 'pointer';
            } else {
                hoverPage = null;
                document.body.style.cursor = 'default';
            }
        } else {
            hoverPage = null;
            document.body.style.cursor = 'default';
        }
        
        return;
    }
    
    // Calculate mouse movement
    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };
    
    // If we can manually turn a page
    if (canManuallyTurnPage && hoverPage !== null) {
        // Calculate turn amount based on horizontal mouse movement
        const turnAmount = deltaMove.x * 0.005;
        
        // Apply the rotation to the current page
        let newRotation = hoverPage.rotation.y - turnAmount;
        
        // Clamp the rotation between 0 and -PI
        newRotation = Math.max(-Math.PI, Math.min(0, newRotation));
        hoverPage.rotation.y = newRotation;
        
        // If page is turned past threshold, trigger full animation
        if (newRotation < -manualPageTurnThreshold * Math.PI) {
            // Turn the page completely
            animatePageTurn(hoverPage, newRotation, -Math.PI * 0.8, 300);
            currentPage++;
            canManuallyTurnPage = false;
        }
    } else {
        // Otherwise, rotate the entire book
        if (isDragging) {
            // Rotate the book around Y axis (horizontal mouse movement)
            book.rotation.y += deltaMove.x * bookDragSensitivity;
            
            // Rotate the book around X axis (vertical mouse movement) with limits
            const newXRotation = book.rotation.x + deltaMove.y * bookDragSensitivity;
            book.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, newXRotation));
        }
    }
    
    // Update previous mouse position
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

// Mouse up handler
function onMouseUp(event) {
    isDragging = false;
    canManuallyTurnPage = false;
    
    // If page is partially turned but released before threshold
    if (hoverPage && hoverPage.rotation.y < 0 && hoverPage.rotation.y > -manualPageTurnThreshold * Math.PI) {
        // Return the page to its original position
        animatePageTurn(hoverPage, hoverPage.rotation.y, 0, 300);
    }
}

// Mouse leave handler
function onMouseLeave(event) {
    isDragging = false;
    canManuallyTurnPage = false;
    document.body.style.cursor = 'default';
}

// Keyboard controls
function onKeyDown(event) {
    switch (event.key) {
        case 'ArrowLeft':
            // Rotate book left
            book.rotation.y -= 0.1;
            break;
        case 'ArrowRight':
            // Rotate book right
            book.rotation.y += 0.1;
            break;
        case 'ArrowUp':
            // Tilt book up
            book.rotation.x = Math.max(-Math.PI / 4, book.rotation.x - 0.1);
            break;
        case 'ArrowDown':
            // Tilt book down
            book.rotation.x = Math.min(Math.PI / 4, book.rotation.x + 0.1);
            break;
        case ' ':
            // Spacebar toggles the book open/closed
            isBookOpen ? closeBook() : openBook();
            break;
        case 'PageDown':
            // Next page
            if (isBookOpen) nextPage();
            break;
        case 'PageUp':
            // Previous page
            if (isBookOpen) prevPage();
            break;
        case 'Home':
            // Reset book position
            book.rotation.set(0, Math.PI * 0.05, 0);
            break;
    }
}

// Add realistic book lighting
function enhanceBookLighting() {
    // Add a subtle spotlight that follows the book
    const spotlight = new THREE.SpotLight(0xffffff, 0.6);
    spotlight.position.set(0, 10, 0);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.5;
    spotlight.decay = 2;
    spotlight.distance = 50;
    
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;
    
    scene.add(spotlight);
    
    // Update spotlight to follow book
    function updateSpotlight() {
        // Position spotlight over the book
        spotlight.target = book;
        
        // Request next frame
        requestAnimationFrame(updateSpotlight);
    }
    
    // Start the spotlight update loop
    updateSpotlight();
}

// Wait for the main script to initialize before setting up controls
document.addEventListener('DOMContentLoaded', function() {
    // Wait for main.js to complete initialization
    setTimeout(function() {
        if (typeof scene !== 'undefined' && scene !== null) {
            initBookControls();
            enhanceBookLighting();
        }
    }, 1000);
});
