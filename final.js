window.addEventListener('load', () => {
    document.querySelector('.song').play();
    animationTimeline();
});


// window.addEventListener('load', () => {
//     Swal.fire({
//         title: 'Do you want an extra surprise?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes',
//         cancelButtonText: 'No',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             document.querySelector('.song').play();
//             animationTimeline();
//         } else {
//             animationTimeline();
//         }
//     });
// });

// GSAP Animation Timeline
const animationTimeline = () => {
    const tl = gsap.timeline();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    
    // 1. Hearts/Balloons Float Up
    tl.fromTo(
        ".baloons img", 
        {
            y: "100vh", // Start from below the screen
            opacity: 0, // Invisible at the start
        },
        {
            y: "-100vh", // Float out of the top
            opacity: 1, // Fully visible while moving
            duration: 4, // Duration of the animation
            stagger: 0.3, // Stagger each heart/balloon
            ease: "power2.out", // Smooth easing for float effect
        }
    );

    // 2. Photo Fades In
    tl.from(".profile-picture", {
        scale: 0.8, // Start slightly smaller
        opacity: 0, // Fade-in effect
        duration: 1.5, // Animation duration
        ease: "power2.out", // Smooth easing
    }, "-=2"); // Overlap with the heart/balloon animation

    // 3. Text Fades In Below the Photo
    tl.from(".wish-hbd", {
        opacity: 0, // Fade-in effect
        y: 20, // Slight upward movement
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing
    }, "-=0.5"); // Slight overlap with the photo fade-in

    tl.from("#wishText", {
        opacity: 0, // Fade-in effect
        y: 20, // Slight upward movement
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing
    }, "-=0.7"); // Slight overlap with the first text

    tl.from(".Chiku", {
        opacity: 0, // Fade-in effect
        y: 20, // Slight upward movement
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing
    }, "-=0.7"); // Slight overlap with the first text
};
